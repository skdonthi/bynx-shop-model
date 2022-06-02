export interface Response<T> {
  timestamp: string;
  statusCode: number;
  status: string;
  message: string;
  data: {[key in PropType]: T};
}

export type PropType = "products" | "users";
