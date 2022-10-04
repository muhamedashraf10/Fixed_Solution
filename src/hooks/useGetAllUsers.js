import { useQuery } from "react-query";
import { INSTANCE } from "../InstanceAxios";

async function funGetAllUsers() {
  const { data } = await INSTANCE.get("/users");
  return data;
}

export const useGetAllUsers = () => {
  return useQuery("allUsers", funGetAllUsers);
};
