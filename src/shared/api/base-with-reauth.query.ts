import { BaseQueryApi, FetchBaseQueryMeta, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { baseQueryWithAccessToken as baseQuery } from './base.query'
import { invalidateAccessToken } from './invalidate-access-token.action'
import { refreshTokens } from './refresh-tokens.action'

// TODO: REMOVE
// const AUTH_ERROR_CODES = new Set([401])

// export async function baseWithReauthQuery(
//   args: string | FetchArgs,
//   api: BaseQueryApi,
//   extraOptions: {}
// ): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
//   const result = await baseQuery(args, api, extraOptions)

//   if (result.error && typeof result.error?.status === 'number' && AUTH_ERROR_CODES.has(result.error.status)) {
//     const refreshToken = (api.getState() as RootState).session.refreshToken

//     const refreshResult = await baseQuery({ url: '/users/refresh-token', body: { refreshToken }, method: 'POST' }, api, extraOptions)
//     if (refreshResult.data) {
//       const response = refreshResult.data as { accessToken: string; refreshToken: string }
//       api.dispatch(refreshTokens(response))

//       return await baseQuery(args, api, extraOptions)
//     } else {
//       api.dispatch(invalidateAccessToken())
//     }
//   }

//   return result
// }

// export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
//   | {
//       error: E
//       data?: undefined
//       meta?: M
//     }
//   | {
//       error?: undefined
//       data: T
//       meta?: M
//     }
