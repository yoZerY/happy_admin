import { http } from "@/utils/http";
import type { ResultTable } from "@/api/types";

/** 获取系统管理-用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<ResultTable>("post", "/user/list", { data });
};

/** 获取系统管理-用户管理列表 */
export const createUser = (data?: object) => {
  return http.request<ResultTable>("post", "/user/create", { data });
};
