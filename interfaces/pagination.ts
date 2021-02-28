interface Pagination {
  current: number;
  pageSize: number;
  total: number;
  showTotal: (total: number, range: number[]) => string;
}

export default Pagination;
