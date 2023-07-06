/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ConnectChannelInstagramRequest,
  connectChannelInstagramRequestSchema,
} from '../models/connectChannelInstagramRequest';
import {
  ListPagesInstagramRequest,
  listPagesInstagramRequestSchema,
} from '../models/listPagesInstagramRequest';
import { string } from '../schema';
import { BaseController } from './baseController';

export class InstagramController extends BaseController {
  /**
   * @return Response from the API call
   */
  async newRequest(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/');
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param body
   * @return Response from the API call
   */
  async listPagesInstagram(
    workspaceId: string,
    body: ListPagesInstagramRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      body: [body, listPagesInstagramRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/instagrams/pages`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param body
   * @return Response from the API call
   */
  async connectChannelInstagram(
    workspaceId: string,
    body: ConnectChannelInstagramRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      body: [body, connectChannelInstagramRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/instagrams/connect`;
    return req.call(requestOptions);
  }
}