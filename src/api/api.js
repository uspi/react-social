import axios from "axios";

// const baseUrl = "https://social-network.samuraijs.com/api/1.0/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "d208ae23-b630-4cf0-abb9-16089b6de9c2",
  },
});

const instaceAnonim = axios.create({
  withCredentials: false,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  
  getUsers(pageNumber = 1, pageSize = 10) {
    return instance
      .get(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => {return response.data;});
  },
  // getUsers(pageNumber = 1, pageSize = 10) {
  //   return instaceAnonim
  //     .get(`users?page=${pageNumber}&count=${pageSize}`)
  //     .then((response) => {return response.data;});
  // },
};
