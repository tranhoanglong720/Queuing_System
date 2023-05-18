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
export interface Service {
  name: string;
  des: string;
  id: string;
  ma: string;
  listRules: string[];
  stateService: string;
}
export interface Level {
  STT: string;
  customer: string;
  namedv: string;
  dateCreate: string;
  experDate: string;
  stateLevel: string;
  source: string;
}
