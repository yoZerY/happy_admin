import { http } from '@/utils/http'
import type { ResponseData, ResultTable } from '@/api/types'
import type { FormItemProps } from "@/views/system/user/utils/types";

/** 获取系统管理-用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<ResultTable>("post", "/user/list", { data });
};

/** 获取系统管理-用户管理列表 */
export const createUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/create", { data });
};

/** 获取系统管理-用户管理列表 */
export const updateUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/update", { data });
};

/** 获取系统管理-用户管理列表 */
export const getUserInfo = (id: number) => {
  return http.request<ResponseData<FormItemProps>>("get", `/user/${id}`);
};
