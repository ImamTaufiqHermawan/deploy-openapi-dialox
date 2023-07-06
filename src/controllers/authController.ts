/**
 * Dialox Api ImamLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { LoginRequest, loginRequestSchema } from '../models/loginRequest';
import {
  RegisterRequest,
  registerRequestSchema,
} from '../models/registerRequest';
import {
  RequestResetPasswordRequest,
  requestResetPasswordRequestSchema,
} from '../models/requestResetPasswordRequest';
import {
  VerifyEmailRequest,
  verifyEmailRequestSchema,
} from '../models/verifyEmailRequest';
import {
  VerifyResetPasswordRequest,
  verifyResetPasswordRequestSchema,
} from '../models/verifyResetPasswordRequest';
import { BaseController } from './baseController';

export class AuthController extends BaseController {
  /**
   * @param body
   * @return Response from the API call
   */
  async login(
    body: LoginRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/auth/login');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ body: [body, loginRequestSchema] });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async verifyEmail(
    body: VerifyEmailRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/auth/verify');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ body: [body, verifyEmailRequestSchema] });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async requestResetPassword(
    body: RequestResetPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/auth/request-reset');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      body: [body, requestResetPasswordRequestSchema],
    });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async verifyResetPassword(
    body: VerifyResetPasswordRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/auth/verify-reset');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({
      body: [body, verifyResetPasswordRequestSchema],
    });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async register(
    body: RegisterRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/auth/register');
    req.baseUrl('Server 1');
    const mapped = req.prepareArgs({ body: [body, registerRequestSchema] });
    req.json(mapped.body);
    return req.call(requestOptions);
  }

  /**
   * @return Response from the API call
   */
  async me(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/auth/me');
    req.baseUrl('Server 1');
    return req.call(requestOptions);
  }
}
