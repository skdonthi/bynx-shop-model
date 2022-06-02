import { DigitalProduct } from 'src/app/models/DigitalProduct';
import { NormalProduct } from 'src/app/models/NormalProduct';


export type ProductDisplay = {
  quantity: number;
  isAddedTocart: boolean;
} & (DigitalProduct | NormalProduct);
