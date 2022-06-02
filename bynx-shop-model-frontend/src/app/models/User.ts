import { Address } from './Address';

export interface User {
  name: string;
  address: Address;
  subscriptions: Subscription[];
}

export type Subscription =
  | 'PROMOTION'
  | 'OFFER'
  | 'COUPON'
  | 'DISCOUNT'
  | 'WHATS_NEW';
