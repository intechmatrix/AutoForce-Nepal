// types/product.ts
export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  images: string[];
  description: string;
  features: string[];
  applications: string[];
  benefits: string[];
  specifications: string[];
  fullDescription: string;
}
