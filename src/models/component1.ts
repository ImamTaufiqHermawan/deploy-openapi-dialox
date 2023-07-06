/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Component1 {
  type: string;
  text: string;
}

export const component1Schema: Schema<Component1> = object({
  type: ['type', string()],
  text: ['text', string()],
});
