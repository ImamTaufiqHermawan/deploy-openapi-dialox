/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateBussinessProfilesRequest {
  messagingProduct: string;
  address: string;
  description: string;
  vertical: string;
  about: string;
  email: string;
}

export const updateBussinessProfilesRequestSchema: Schema<UpdateBussinessProfilesRequest> = object(
  {
    messagingProduct: ['messaging_product', string()],
    address: ['address', string()],
    description: ['description', string()],
    vertical: ['vertical', string()],
    about: ['about', string()],
    email: ['email', string()],
  }
);
