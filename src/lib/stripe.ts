import { Stripe as StripeAccount } from 'stripe';

export const Stripe = new StripeAccount(process.env.STRIPE_API_KEY as string, {
  apiVersion: '2023-10-16',
  typescript: true,
});

type StripeEvent = StripeAccount.Event;
type StripeCheckoutSession = StripeAccount.Checkout.Session;

export type { StripeEvent, StripeCheckoutSession };

export default Stripe;
