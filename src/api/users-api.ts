import { GetItemsType, instance, ResponseType } from "./api";

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${pageNumber}&count=${pageSize}`)
      .then((res) => res.data);
  },

  follow(userId: number) {
    return instance
      .post<ResponseType>(`follow/${userId}`)
      .then((res) => res.data);
  },

  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((res) => res.data) as Promise<ResponseType>;
  },
  // getProfile(userId: number) {
  //   console.warn("Obsolete method. Please use profileAPI object.");
  //   return profileAPI.getProfile(userId);
  // },
};
