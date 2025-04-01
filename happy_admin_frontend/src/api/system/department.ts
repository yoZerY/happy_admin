import { http } from "@/utils/http";
import type { ResultTable } from "@/api/types";

/** 获取系统管理-部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<ResultTable>("post", "/dept/list", { data });
};

/** 获取系统管理-部门管理列表 */
export const getAllDeptList = () => {
  return http.request<ResultTable>("get", "/dept/all");
};
