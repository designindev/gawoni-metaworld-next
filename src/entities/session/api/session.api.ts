'use client'

import { baseApi, CURRENT_USER_TAG } from 'shared/api'
import { type LoginDto } from '../dto/login.dto'
import { sessionRoutes } from './session.routes'
import { RegisterDto } from '../dto/register.dto'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ name: string; admin: boolean }, LoginDto>({
      query: (body) => ({ url: sessionRoutes.LOGIN, method: 'POST', body }),
      invalidatesTags: [CURRENT_USER_TAG],
    }),
    register: build.mutation<void, RegisterDto>({
      query: (body) => ({ url: sessionRoutes.REGISTER, method: 'POST', body }),
      invalidatesTags: [CURRENT_USER_TAG],
    }),
    // resetPassword: build.mutation<void, ResetPasswordDto>({
    //   query: (body) => ({ url: sessionRoutes.RESET_PASSWORD, method: 'POST', body }),
    // }),
    // newPassword: build.mutation<void, ResetPasswordDto>({
    //   query: (body) => ({ url: sessionRoutes.NEW_PASSWORD, method: 'POST', body }),
    // }),
    // logout: build.mutation<void, { refreshToken: string }>({
    //   query: (body) => ({ url: sessionRoutes.LOGOUT, method: 'POST', body }),
    // }),
    // refreshToken: build.mutation<void, { refreshToken: string }>({
    //   query: (body) => ({ url: sessionRoutes.REFRESH_TOKEN, method: 'POST', body }),
    //   transformResponse: sessionMaper,
    // }),
  }),
})

export const { useLoginMutation, useRegisterMutation } = sessionApi
