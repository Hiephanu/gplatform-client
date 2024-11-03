import type { InputSize } from './input';

export type CommonSearch = {
  filterOption?: string[];
  search?: boolean;
  placeholder?: string;
  size?: InputSize;
  loading?: boolean;
};
