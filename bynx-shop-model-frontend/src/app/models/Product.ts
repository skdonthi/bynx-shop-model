import { Category } from './Category';

export interface Product {
  name: string;
  articleNumber: string;
  prices: string;
  imageUrls: string[];
  type: ProductType;
  category: Category;
}

export type ProductType = 'NORMAL' | 'DIGITAL';
