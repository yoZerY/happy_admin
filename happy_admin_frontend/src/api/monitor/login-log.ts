import { http } from "@/utils/http";
import type { ResultTable } from "@/api/types";

/** 获取系统监控-登录日志列表 */
export const getLoginLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "/login-log/list", { data });
};
