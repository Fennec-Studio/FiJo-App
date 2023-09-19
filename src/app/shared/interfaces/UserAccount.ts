export interface UserAccount {
  uuid: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}
