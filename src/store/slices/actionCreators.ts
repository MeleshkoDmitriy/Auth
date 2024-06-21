import { Dispatch } from "@reduxjs/toolkit";
import { ILoginRequest, ILoginResponse } from "../../api/auth/types";
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  loadProfileStart,
  loadProfileFailure,
  loadProfileSuccess,
} from "./authReducer";
// import { history } from "../../utils/history";
// import { store } from "..";
import { AxiosPromise } from "axios";
// import { isTokenExpired } from "../../utils/jwt";
import { api } from "../../api";

export const loginUser =
  (data: ILoginRequest) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loginStart());

      const res = await api.auth.login(data);

      dispatch(loginSuccess(res.data.accessToken));
      dispatch(getProfile());
    } catch (e: any) {
      console.error(e);

      dispatch(loginFailure(e.message));
    }
  };

export const getProfile =
  () =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    try {
      dispatch(loadProfileStart());

      const res = await api.auth.getProfile();

      dispatch(loadProfileSuccess(res.data));
    } catch (e: any) {
      console.error(e);

      dispatch(loadProfileFailure(e.message));
    }
  };
