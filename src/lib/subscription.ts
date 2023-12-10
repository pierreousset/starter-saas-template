// @ts-nocheck
// TODO: Fix this when we turn strict mode on.
import { UserSubscriptionPlan } from '@/types/index';
import { freePlan, basicPlan, proPlan } from '@/config/subscriptions';
import db from '@/lib/prisma';

export async function getUserSubscriptionPlan(
  userId: string
): Promise<UserSubscriptionPlan> {
  const user = await db.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
    },
  });

  if (!user) {
    throw new Error('User not found');
  }

  // Check if user is on a pro plan.
  let isSubscriber = false;
  let plan;

  if (user.stripePriceId && user.stripeCurrentPeriodEnd) {
    isSubscriber =
      user.stripeCurrentPeriodEnd.getTime() + 86_400_000 > Date.now();
  }

  switch (user.stripePriceId) {
    case basicPlan.stripePriceId:
      plan = basicPlan;
      break;
    case proPlan.stripePriceId:
      plan = proPlan;
      break;
    default:
      plan = freePlan;
  }

  return {
    ...plan,
    ...user,
    stripeCurrentPeriodEnd: user.stripeCurrentPeriodEnd?.getTime(),
    isSubscriber,
  };
}
