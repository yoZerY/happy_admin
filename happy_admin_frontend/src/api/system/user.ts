import { http } from "@/utils/http";
import type { ResponseData, ResultTable } from "@/api/types";
import type { FormItemProps } from "@/views/system/user/utils/types";

export const getUserList = (data?: object) => {
  return http.request<ResultTable>("post", "/user/list", { data });
};

export const createUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/create", { data });
};

export const updateUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/update", { data });
};

export const getUserInfo = (id: number) => {
  return http.request<ResponseData<FormItemProps>>("get", `/user/${id}`);
};

export const deleteUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/delete", { data });
};
