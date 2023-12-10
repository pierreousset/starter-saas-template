/* eslint-disable camelcase */
import { getServerSession } from 'next-auth/next';
import { z } from 'zod';

import { proPlan } from '@/config/subscriptions';
import { authOptions } from '@/lib/auth';
import StripeLib from '@/lib/stripe';
import { getUserSubscriptionPlan } from '@/lib/subscription';

// Url redirection after stripe action.
const billingUrl = process.env.STRIPE_REDIRECT;

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !session?.user.email) {
      return new Response(null, { status: 403 });
    }

    const subscriptionPlan = await getUserSubscriptionPlan(session.user.id);

    // The user is on the pro plan.
    // Create a portal session to manage subscription.
    if (subscriptionPlan.isSubscriber && subscriptionPlan.stripeCustomerId) {
      const stripeSession = await StripeLib.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      });

      return new Response(JSON.stringify({ url: stripeSession.url }));
    }

    // The user is on the free plan.
    // Create a checkout session to upgrade.
    const stripeSession = await StripeLib.checkout.sessions.create({
      success_url: billingUrl,
      cancel_url: billingUrl,
      payment_method_types: ['card'],
      mode: 'subscription',
      billing_address_collection: 'auto',
      customer_email: session.user.email,
      line_items: [
        {
          price: proPlan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        userId: session.user.id,
      },
    });

    return new Response(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify(error.issues), { status: 422 });
    }

    return new Response(null, { status: 500 });
  }
}
