export interface Response<T> {
  timestamp: string;
  statusCode: number;
  status: string;
  message: string;
  data: Map<string, T>;
}
