import { useQuery } from "react-query";
import { INSTANCE } from "../InstanceAxios";

async function funGetPosts() {
  const { data } = await INSTANCE.get(`/posts`);
  return data;
}

export const useGetPosts = () => {
  return useQuery("Posts", funGetPosts);
};
