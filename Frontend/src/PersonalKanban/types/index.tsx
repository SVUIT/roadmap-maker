export type Record = {
  [x: string]: any;
  id: string;
  title: string;
  dropdownOptionSubject: string;
  description?: string;
  caption?: string;
  color?: string;
  createdAt?: string;
};

export type Column = {
  id: string;
  title: string;
  dropdownOptionSubject: string;
  description?: string;
  caption?: string;
  color?: string;
  records?: Record[];
  wipLimit?: number;
  wipEnabled?: boolean;
  createdAt?: string;
};
