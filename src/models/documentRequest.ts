/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Content, contentSchema } from './content';

export interface DocumentRequest {
  from: string;
  type: string;
  content: Content;
}

export const documentRequestSchema: Schema<DocumentRequest> = object({
  from: ['from', string()],
  type: ['type', string()],
  content: ['content', lazy(() => contentSchema)],
});