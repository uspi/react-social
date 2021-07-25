import axios from "axios";

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
  getProfile(userId) {
    return anonimInstance.get(`profile/${userId}`);
  },
  getStatus(userId){
    return anonimInstance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
    return instance.put(`profile/status`, {status: status});
  }
}

export const usersAPI = {
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object.")
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
