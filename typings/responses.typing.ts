export interface ApiV1Response<T> {
  meta: Meta;
  data: T;
}

export interface Meta {
  message: string;
  errors: string[];
}
