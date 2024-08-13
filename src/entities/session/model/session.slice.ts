import { PayloadAction, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { sessionApi } from '../api/session.api'

type SessionSliceState =
  | {
      isLoggedIn: true
      username: string | null
      isAdmin: boolean
    }
  | {
      isLoggedIn: false
      username: string | null
      isAdmin: boolean
    }

const initialState = {
  isLoggedIn: false,
  isAdmin: false,
  username: null,
} as const

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState satisfies SessionSliceState as SessionSliceState,
  reducers: {
    clearSessionData: (state) => {
      state.isLoggedIn = initialState.isLoggedIn
      state.username = initialState.username
      state.isAdmin = initialState.isAdmin
    },
    authenticate: (state, action: PayloadAction<{ name: string; isAdmin: boolean }>) => {
      state.isLoggedIn = true
      state.username = action.payload.name
      state.isAdmin = action.payload.isAdmin
    },
    unauthenticate: (state) => {
      state.isLoggedIn = false
      state.username = null
      state.isAdmin = false
    },
  },
})

export const selectIsAuth = (state: RootState) => state.session.isLoggedIn

export const { clearSessionData, authenticate, unauthenticate } = sessionSlice.actions
