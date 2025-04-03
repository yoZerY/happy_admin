import { http } from '@/utils/http'
import type { Result } from '@/api/types'

/** 获取系统管理-菜单管理列表 */
export const createMenu = (data?: object) => {
  return http.request<Result>("post", "/menu/create", { data });
};

export const updateMenu = (data?: object) => {
  return http.request<Result>("post", "/menu/update", { data });
};

/** 获取系统管理-菜单管理列表 */
export const getMenuList = (data?: object) => {
  return http.request<Result>("post", "/menu/list", { data });
};

/** 获取角色管理-权限-菜单权限 */
export const getRoleMenu = (data?: object) => {
  return http.request<Result>("post", "menu/role-menu", { data });
};

/** 获取角色管理-权限-菜单权限-根据角色 id 查对应菜单 */
export const getRoleMenuIds = (data?: object) => {
  return http.request<Result>("post", "menu/role-menu-ids", { data });
};
