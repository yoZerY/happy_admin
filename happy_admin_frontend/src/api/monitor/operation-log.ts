import { http } from "@/utils/http";
import type { ResultTable } from "@/api/types";

/** 获取系统监控-操作日志列表 */
export const getOperationLogsList = (data?: object) => {
  return http.request<ResultTable>("post", "/operation-log/list", { data });
};
