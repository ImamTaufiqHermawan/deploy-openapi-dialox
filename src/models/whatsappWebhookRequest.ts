/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Entry, entrySchema } from './entry';

export interface WhatsappWebhookRequest {
  object: string;
  entry: Entry[];
}

export const whatsappWebhookRequestSchema: Schema<WhatsappWebhookRequest> = object(
  {
    object: ['object', string()],
    entry: ['entry', array(lazy(() => entrySchema))],
  }
);
