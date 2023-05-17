export interface User {
  name: string;
  phone: string;
  email: string;
  role: string;
  account: string;
  password: string;
  state: string;
  id: string;
}
export interface Role {
  name: string;
  des: string;
  listFuncA: string[];
  listFuncB: string[];
  id: string;
}
