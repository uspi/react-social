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
  getStatus(userId) {
    let status = anonimInstance.get(`profile/status/${userId}`);
    return status;
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },

  saveUserPhoto(photoFile) {
    const formData = new FormData();
    formData.append(`image`, photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  }
};

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
    console.warn("Obsolete method. Please use profileAPI object.");
    return profileAPI.getProfile(userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};