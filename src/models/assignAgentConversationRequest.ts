/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface AssignAgentConversationRequest {
  memberId: string[];
}

export const assignAgentConversationRequestSchema: Schema<AssignAgentConversationRequest> = object(
  { memberId: ['memberId', array(string())] }
);
