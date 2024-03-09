export type Product = {
  id: number;
  slug: string;
  name: string;
  image: Image;
  category: 'headphones' | 'speakers' | 'earphones';
  categoryImage: Image;
  new: boolean;
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
  slug: string;
  name: string;
  image: Image;
};
