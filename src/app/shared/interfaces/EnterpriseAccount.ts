export interface EnterpriseAccount {
  uuid: number;
  email: string;
  password: string;
  name: string;
  logo?: string;
  city?: string;
  state?: string;
  country?: string;
  address?: string;
  zipCode?: string;
  rating?: number;
  description?: string;
  phone?: string;
  socialMedia?: string;
  role: number;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  about?: string;
}
