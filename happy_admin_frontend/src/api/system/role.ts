import { http } from "@/utils/http";
import type { Result, ResultTable } from "@/api/types";

/** 获取系统管理-角色管理列表 */
export const getRoleList = (data?: object) => {
  return http.request<ResultTable>("post", "/role/list", { data });
};

export const createRole = (data?: object) => {
  return http.request<Result>("post", "role/create", { data });
};
export const updateRole = (data?: object) => {
  return http.request<Result>("post", "role/update", { data });
};
export const deleteRole = (data?: object) => {
  return http.request<Result>("post", "role/delete", { data });
};

/** 系统管理-用户管理-获取所有角色列表 */
export const getAllRoleList = () => {
  return http.request<ResultTable>("get", "role/all-role");
};


export const getRoleIds = (data?: object) => {
  return http.request<Result>("post", "role/user-role-ids", { data });
};

export const setRoleMenus = (data?: object) => {
  return http.request<Result>("post", "role/set-role-menus", { data });
};
