/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateContactRequest {
  workspaceId: string;
  name: string;
  email: string;
  phoneNumber: string;
}

export const updateContactRequestSchema: Schema<UpdateContactRequest> = object({
  workspaceId: ['workspaceId', string()],
  name: ['name', string()],
  email: ['email', string()],
  phoneNumber: ['phoneNumber', string()],
});
