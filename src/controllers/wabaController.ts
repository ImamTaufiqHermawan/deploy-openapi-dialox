/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ConnectWabaCopyRequest,
  connectWabaCopyRequestSchema,
} from '../models/connectWabaCopyRequest';
import {
  ConnectWabaRequest,
  connectWabaRequestSchema,
} from '../models/connectWabaRequest';
import { string } from '../schema';
import { BaseController } from './baseController';

export class WabaController extends BaseController {
  /**
   * @param workspaceId
   * @return Response from the API call
   */
  async listWaba(
    workspaceId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ workspaceId: [workspaceId, string()] });
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/waba`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param body
   * @return Response from the API call
   */
  async connectWaba(
    workspaceId: string,
    body: ConnectWabaRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      body: [body, connectWabaRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/waba`;
    return req.call(requestOptions);
  }

  /**
   * @param workspaceId
   * @param wabaId
   * @param body
   * @return Response from the API call
   */
  async connectWabaCopy(
    workspaceId: string,
    wabaId: string,
    body: ConnectWabaCopyRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      workspaceId: [workspaceId, string()],
      wabaId: [wabaId, string()],
      body: [body, connectWabaCopyRequestSchema],
    });
    req.json(mapped.body);
    req.appendTemplatePath`/workspaces/${mapped.workspaceId}/waba/${mapped.wabaId}`;
    return req.call(requestOptions);
  }
}
