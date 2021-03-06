import { Product } from "./Product";

export type BuyOption =     "DOWNLOAD_LINK" | "EMAIL";

export interface DigitalProduct extends Product {
  buyOption: BuyOption;
}
