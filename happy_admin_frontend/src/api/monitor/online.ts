import { http } from "@/utils/http";
import type { ResultTable } from "@/api/types";

/** 获取系统监控-在线用户列表 */
export const getOnlineLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "online/list", { data });
};
