// Results View
export interface MovieFilters {
  page: number;
  page_size: number;
  name?: string;
  order?: MovieOrder;
}

export enum MovieOrder {
  DEFAULT = '',
  NEWEST_FIRST = 'updated_at DESC',
  OLDEST_FIRST = 'updated_at ASC',
  NAME_A_Z = 'recipient.name ASC',
  NAME_Z_A = 'recipient.name DESC',
}

export interface Movie {
  name: string;
  releaseYear: number;
  mainActor: string;
  length: number;
  image: string;
}
