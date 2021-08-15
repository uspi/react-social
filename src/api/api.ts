import axios from "axios";
import { ProfileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d208ae23-b630-4cf0-abb9-16089b6de9c2",
  },
});

const anonimInstance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const profileAPI = {
  getProfile(userId: number) {
    return anonimInstance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    let status = anonimInstance.get(`profile/status/${userId}`);
    return status;
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status });
  },

  saveUserPhoto(photoFile: any) {
    const formData = new FormData();
    formData.append(`image`, photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  saveProfile(profile: ProfileType) {
    return instance.put(`profile`, profile);
  },
};

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId: number) {
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data);
  },
  login(
    email: string,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) {
    return instance.post<LoginResponseType>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }).then(res => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}
type MeResponseType = {
  data: {
    id: number,
    email: string,
    login: string
  }
  resultCode: ResultCodeEnum
  messages: string[]
}

type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCodeEnum | ResultCodeForCaptchaEnum
  messages: string[]
}
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
