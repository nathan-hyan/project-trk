export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  image?: string;
  barcode: string;
  storeId: string;
}
