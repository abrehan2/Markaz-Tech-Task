// IMPORTS -
import { config } from "@/config";
import qs from "qs";
import axios from "axios";

// PARTIALS -
const postsUrl = config.API_ENDPOINT.concat("/posts");
const params = {
  limit: 10,
};

// GET TEN POSTS -
export const getAllPosts = async () => {
  const queryParams = {
    ...params,
  };

  const { data } = await axios.get(`${postsUrl}?${qs.stringify(queryParams)}`);

  return data;
};
