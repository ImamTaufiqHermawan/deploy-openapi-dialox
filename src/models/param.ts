/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Param {
  key: string;
  value: string;
}

export const paramSchema: Schema<Param> = object({
  key: ['key', string()],
  value: ['value', string()],
});
