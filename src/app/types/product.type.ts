import { ProductCategory } from "./product-category.enum";

export type Product = {
  id: string;
  name: string;
  image: Image;
  category: ProductCategory;
  categoryImage: Image;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: Includes[];
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
  others: OtherProduct[];
};

type Image = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type Includes = {
  quantity: number;
  item: string;
};

type OtherProduct = {
  id: string;
  name: string;
  image: Image;
};
