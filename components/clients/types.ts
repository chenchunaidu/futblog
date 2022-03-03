export interface Client {
  firstName: string;
  lastName: string;
  email: string;
  currency: string;
  language: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  phoneNumber: string;
  faxNumber: string;
  taxIdentificationNumber: string;
  notes?: string;
  organizationName?: string;
  clientType?: string;
}

export type CreateClientForm = Client;
