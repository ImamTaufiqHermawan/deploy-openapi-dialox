/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Contact, contactSchema } from './contact';

export interface TypeCreateGroupRequest {
  contacts: Contact[];
  type: string;
  groupName: string;
}

export const typeCreateGroupRequestSchema: Schema<TypeCreateGroupRequest> = object(
  {
    contacts: ['contacts', array(lazy(() => contactSchema))],
    type: ['type', string()],
    groupName: ['groupName', string()],
  }
);
