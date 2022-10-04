import { useQuery } from "react-query";
import { INSTANCE } from "../InstanceAxios";

async function funGetSingleUser(userId) {
  const { data } = await INSTANCE.get(`/users/${userId}`);
  return data;
}

export const useGetSingleUser = (userId) => {
  return useQuery(["singleUser", userId], () => funGetSingleUser(userId));
};
