import { SubscriptionPlan } from '@/types/index';

export const freePlan: SubscriptionPlan = {
  name: 'Free',
  description:
    'The free plan is limited to 3 posts. Upgrade to the PRO plan for unlimited posts.',
  stripePriceId: '',
};

export const basicPlan: SubscriptionPlan = {
  name: 'BASIC',
  description: 'The Basic plan has unlimited posts.',
  stripePriceId: process.env.STRIPE_BASIC_MONTHLY_PLAN_ID || '',
};

export const proPlan: SubscriptionPlan = {
  name: 'PRO',
  description: 'The PRO plan has unlimited posts.',
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || '',
};

export default {
  freePlan,
  basicPlan,
  proPlan,
};
