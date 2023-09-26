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
  age?: number;
  gender?: number;
  career?: string;
  salary?: number;
  about?: string;
  experience?: Experience[];
}

export interface Experience {
  business: string;
  position: string;
  description: string;
  start: Date;
  end: Date;
  current: boolean;
}
