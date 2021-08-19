import { anonimInstance, GetItemsType, instance, ResponseType } from './api'

export const usersAPI = {
  getUsers(
    pageNumber = 1,
    pageSize = 10,
    term: string = '',
    friend: null | boolean = null
  ) {
    const termValue = term === '' ? '' : `&term=${term}`
    const friendValue = friend === null ? '' : `&friend=${friend}`

    return anonimInstance // TODO: change to just instance
      .get<GetItemsType>(
        `users?page=${pageNumber}&count=${pageSize}${termValue}${friendValue}`
      )
      .then((res) => res.data)
  },

  follow(userId: number) {
    return instance
      .post<ResponseType>(`follow/${userId}`)
      .then((res) => res.data)
  },

  unfollow(userId: number) {
    return instance
      .delete(`follow/${userId}`)
      .then((res) => res.data) as Promise<ResponseType>
  },
  // getProfile(userId: number) {
  //   console.warn("Obsolete method. Please use profileAPI object.");
  //   return profileAPI.getProfile(userId);
  // },
}
