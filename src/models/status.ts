/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Conversation, conversationSchema } from './conversation';
import { Pricing, pricingSchema } from './pricing';

export interface Status {
  id: string;
  status: string;
  timestamp: string;
  recipientId: string;
  conversation: Conversation;
  pricing: Pricing;
}

export const statusSchema: Schema<Status> = object({
  id: ['id', string()],
  status: ['status', string()],
  timestamp: ['timestamp', string()],
  recipientId: ['recipient_id', string()],
  conversation: ['conversation', lazy(() => conversationSchema)],
  pricing: ['pricing', lazy(() => pricingSchema)],
});
