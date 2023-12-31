/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Parameters, parametersSchema } from './parameters';

export interface TemplateWithTextVariableRequest {
  broadcastName: string;
  phoneNumber: string;
  contactName: string;
  templateName: string;
  language: string;
  parameters: Parameters;
}

export const templateWithTextVariableRequestSchema: Schema<TemplateWithTextVariableRequest> = object(
  {
    broadcastName: ['broadcastName', string()],
    phoneNumber: ['phoneNumber', string()],
    contactName: ['contactName', string()],
    templateName: ['templateName', string()],
    language: ['language', string()],
    parameters: ['parameters', lazy(() => parametersSchema)],
  }
);
