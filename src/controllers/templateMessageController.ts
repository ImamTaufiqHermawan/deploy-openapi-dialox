/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateTemplateRequest,
  createTemplateRequestSchema,
} from '../models/createTemplateRequest';
import {
  DeleteTemplateMessageRequest,
  deleteTemplateMessageRequestSchema,
} from '../models/deleteTemplateMessageRequest';
import {
  UpdateTemplateRequest,
  updateTemplateRequestSchema,
} from '../models/updateTemplateRequest';
import { number, string } from '../schema';
import { BaseController } from './baseController';

export class TemplateMessageController extends BaseController {
  /**
   * @param workspaceId
   * @param channelId
   * @param body
   * @return Response from the API call
   */
  async createTemplate(
    workspaceId: string,
    channelId: string,
    body: CreateTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      channelId: [channelId, string()],
      body: [body, createTemplateRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/channels/${mapped.channelId}/template-messages/whatsapp`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param templateId
   * @param body
   * @return Response from the API call
   */
  async updateTemplate(
    workspaceId: string,
    templateId: string,
    body: UpdateTemplateRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PATCH');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      templateId: [templateId, string()],
      body: [body, updateTemplateRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/template-messages/${mapped.templateId}/whatsapp`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param channelId
   * @return Response from the API call
   */
  async syncTemplateMessage(
    workspaceId: string,
    channelId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      channelId: [channelId, string()],
    });
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/channels/${mapped.channelId}/template-messages/whatsapp/sync`;
    return req.call(requestOptions);
  }

  /**
   * @param order
   * @param status
   * @param workspaceId
   * @param channelId
   * @return Response from the API call
   */
  async listTemplateMessage(
    order: string,
    status: string,
    workspaceId: string,
    channelId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      order: [order, string()],
      status: [status, string()],
      workspaceId: [workspaceId, string()],
      channelId: [channelId, string()],
    });
    req.query('order', mapped.order);
    req.query('status', mapped.status);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/channels/${mapped.channelId}/template-messages/whatsapp`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param templateId
   * @return Response from the API call
   */
  async detailTemplateMessage(
    workspaceId: string,
    templateId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      templateId: [templateId, number()],
    });
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/template-messages/${mapped.templateId}/whatsapp`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param channel
   * @param temlateId
   * @param body
   * @return Response from the API call
   */
  async deleteTemplateMessage(
    workspaceId: string,
    channel: string,
    temlateId: string,
    body: DeleteTemplateMessageRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      channel: [channel, string()],
      temlateId: [temlateId, string()],
      body: [body, deleteTemplateMessageRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/channels/${mapped.channel}/template-messages/${mapped.temlateId}/whatsapp`;
    return req.call(requestOptions);
  }
}
