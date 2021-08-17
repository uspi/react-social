import { instance, ResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum } from "./api";

export const authAPI = {
  me() {
    return instance
      .get<ResponseType<MeResponseDataType>>(`auth/me`)
      .then((res) => res.data);
  },
  login(
    email: string | null,
    password: string,
    rememberMe = false,
    captcha: string | null = null
  ) {
    return instance
      .post<ResponseType<LoginDataResponseType, ResultCodeEnum | ResultCodeForCaptchaEnum>>(
        `auth/login`,
        {
          email,
          password,
          rememberMe,
          captcha,
        }
      )
      .then((res) => res.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

type MeResponseDataType = {
  id: number;
  email: string;
  login: string;
};
type LoginDataResponseType = {
  userId: number;
};
