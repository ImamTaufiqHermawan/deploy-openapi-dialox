/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema } from '../schema';

export interface UpdateStatusWebhookRequest {
  status: boolean;
}

export const updateStatusWebhookRequestSchema: Schema<UpdateStatusWebhookRequest> = object(
  { status: ['status', boolean()] }
);
