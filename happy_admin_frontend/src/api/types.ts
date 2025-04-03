export type Result = {
  data?: Array<any>;
};

export type ResultTable = {
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总条目数 */
    totalCount?: number;
    /** 每页显示条目个数 */
    pageSize?: number;
    /** 当前页数 */
    currentPage?: number;
  };
};

export interface ResponseData<T> {
  data: T;
}
