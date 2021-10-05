import axios from "axios";

const baseUrl = "https://segware-book-api.segware.io/api";

export const register = async (username, password) => {
  return await axios.post(baseUrl + "/sign-up", {
    username,
    password,
  });
};

export const login = async (username, password) => {
  return await axios.post(baseUrl + "/sign-in", {
    username,
    password,
  });
};

export const forgotPassword = async (username) => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/forgot-password/" + username,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};

export const post = async (content) => {
  return await axios({
    method: "post",
    url: baseUrl + "/feed",
    data: {
      content,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const reaction = async (feedId, like, love) => {
  return await axios({
    method: "post",
    url: baseUrl + "/reaction",
    data: {
      feedId,
      like,
      love,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const feed = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/feeds",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return response.data;
};
