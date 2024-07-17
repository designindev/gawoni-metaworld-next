'use client'

import { baseApi, CURRENT_USER_TAG } from 'shared/api'
import { type Session } from '../model/session.model'
import { type LoginDto } from '../dto/login.dto'
import { sessionRoutes } from './session.routes'
import { RegisterDto } from '../dto/register.dto'
import { sessionMaper } from '../lib/session.mapper'
import { ResetPasswordDto } from '../dto/reset-password.dto'

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, LoginDto>({
      query: (body) => ({ url: sessionRoutes.LOGIN, method: 'POST', body, credentials: 'include' }),
      invalidatesTags: [CURRENT_USER_TAG],
      transformResponse: sessionMaper,
    }),
    register: build.mutation<void, RegisterDto>({
      query: (body) => ({ url: sessionRoutes.REGISTER, method: 'POST', body }),
      invalidatesTags: [CURRENT_USER_TAG],
    }),
    resetPassword: build.mutation<void, ResetPasswordDto>({
      query: (body) => ({ url: sessionRoutes.RESET_PASSWORD, method: 'POST', body }),
    }),
    logout: build.mutation<Session, { refreshToken: string }>({
      query: (body) => ({ url: sessionRoutes.LOGOUT, method: 'POST', body }),
    }),
    refreshToken: build.mutation<Session, { refreshToken: string }>({
      query: (body) => ({ url: sessionRoutes.REFRESH_TOKEN, method: 'POST', body }),
      transformResponse: sessionMaper,
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useResetPasswordMutation } = sessionApi
