export interface EnterpriseAccount {
  EID: number;
  EMAIL: string;
  PASSWORD: string;
  NAME: string;
  LOGO?: string;
  CITY?: string;
  STATE?: string;
  COUNTRY?: string;
  ADDRESS?: string;
  ZIPCODE?: string;
  RATING?: number;
  DESCRIPTION?: string;
  PHONE?: string;
  SOCIAL_MEDIA?: string;
  STATUS: number;
  CREATEAT: Date;
  UPDATEAT: Date;
}
