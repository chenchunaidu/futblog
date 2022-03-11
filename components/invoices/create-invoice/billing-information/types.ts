export interface Discount {
  name: string;
  amount: string;
}

export interface Tax {
  name: string;
  amount: string;
}

export interface Shipping {
  name: string;
  amount: string;
}

export interface AdditionalDetails {
  discount: Discount;
  tax: Tax;
  shipping: Shipping;
}

export interface BillingItem {
  name: string;
  description: string;
  quantity: string;
  rate: string;
  amount: string;
  chips: string[];
  discount: Partial<Discount>;
  taxName?: string;
  taxAmount?: string;
  shipping: Partial<Shipping>;
}

export type HandleItemChange = (
  itemIndex: number,
  key: keyof BillingItem,
  value:
    | string
    | string[]
    | Partial<Discount>
    | Partial<Tax>
    | Partial<Shipping>
) => void;
