export interface User {
  id: string;
  employeeNo: string;
  name: string;
  registerDate: string;
  address: string;
}

export interface UserRequest {
  employeeNo?: string;
  name?: string;
  registerDate?: string;
}
