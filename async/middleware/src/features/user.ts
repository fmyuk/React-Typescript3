import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'domains/github';
import { SucceededPayload, FailedPayload } from './payload-types';

export type UserState = {
  users: User[];
  isLoading: boolean;
  error?: Error | null;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null
};

type GetMembersParams = { orgCode: string };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getMembersStarted: (
      state,
      action: PayloadAction<GetMembersParams>
    ) => ({
      ...state,
      users: [],
      isLoading: true
    }),
    getMembersFailed: (
      state,
      action: PayloadAction<FailedPayload<GetMembersParams, Error>>
    ) => ({
      ...state,
      isLoading: false,
      error: action.payload.error
    })
  }
});
