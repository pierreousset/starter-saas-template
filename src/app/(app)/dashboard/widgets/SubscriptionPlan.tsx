import StripeLib from '@/lib/stripe';
import plans from '@/config/subscriptions';
import BillingCard from './BillingCard';

const SubscriptionPlan = async ({ subscriptionPlan }: any) => {
  // If user has a pro plan, check cancel status on Stripe.
  let isCanceled = false;

  if (
    subscriptionPlan &&
    subscriptionPlan.isSubscriber &&
    subscriptionPlan.stripeSubscriptionId
  ) {
    const stripePlan = await StripeLib.subscriptions.retrieve(
      subscriptionPlan.stripeSubscriptionId
    );
    isCanceled = stripePlan.cancel_at_period_end;
  }

  return (
    <>
      {(Object.keys(plans) as Array<keyof typeof plans>).map(key => {
        const isCurrentPlan =
          subscriptionPlan.stripePriceId === plans[key].stripePriceId;
        return (
          <BillingCard
            key={key}
            isCurrentPlan={isCurrentPlan}
            subscriptionPlan={{
              ...plans[key],
              ...subscriptionPlan,
              isCanceled,
            }}
          />
        );
      })}
    </>
  );
};

export default SubscriptionPlan;
