/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Button1 {
  variable: string;
  type: string;
  value: string;
  index: string;
}

export const button1Schema: Schema<Button1> = object({
  variable: ['variable', string()],
  type: ['type', string()],
  value: ['value', string()],
  index: ['index', string()],
});
