'use client';

import * as React from 'react';

import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

interface BillingFormProps extends React.HTMLAttributes<HTMLFormElement> {
  subscriptionPlan: any & {
    isCanceled: boolean;
  };
  isCurrentPlan: boolean;
}

const BillingCard = ({ subscriptionPlan, isCurrentPlan }: BillingFormProps) => (
  <Card className={`min-w-260 w-auto ${isCurrentPlan && 'border-lime-500'}`}>
    <CardHeader>
      <CardTitle>
        Plan <strong>{subscriptionPlan.name}</strong>
      </CardTitle>
      {isCurrentPlan ? (
        <CardDescription className='text-green-500'>
          You are currently on the plan.
        </CardDescription>
      ) : (
        <CardDescription />
      )}
    </CardHeader>
    <CardContent>{subscriptionPlan.description}</CardContent>
    <CardFooter className='flex flex-col items-start space-y-2 md:justify-between md:space-x-0'>
      {isCurrentPlan ? (
        <p className='rounded-full pt-3 text-xs font-medium'>
          {subscriptionPlan.isCanceled
            ? 'Your plan will be canceled on '
            : 'Your plan renews on '}
          {formatDate(subscriptionPlan.stripeCurrentPeriodEnd)}.
        </p>
      ) : null}
    </CardFooter>
  </Card>
);

export default BillingCard;
