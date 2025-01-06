export interface priceDetails {
  originalRate: number,
  discount: number,
  CurrentRate: number,
  delivery: number,
  fee: number,
  freeDelivery: boolean
}

export interface ResponseData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export interface Imagedata {
  img: string;
  content: string | number;
};

export interface productBill {
  rate: number | any;
  count: number | string;
}

export interface addressType { name: string, address: string }

export interface ShareURLType {
  webName: string,
  url: string
}