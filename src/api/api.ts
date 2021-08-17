import axios from "axios";
import { UserType } from "../types/types";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d208ae23-b630-4cf0-abb9-16089b6de9c2",
  },
});

export const anonimInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10,
}

export type ResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  messages: string[];
  resultCode: RC;
};
export type GetItemsType = {
  items: UserType[]
  totalCount: number,
  error: string | null
}