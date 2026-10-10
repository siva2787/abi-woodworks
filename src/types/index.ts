export type CategoryId = 
  | 'all'
  | 'sofas'
  | 'wardrobes'
  | 'chairs'
  | 'tables'
  | 'benches'
  | 'beds'
  | 'doors'
  | 'storage'
  | 'pooja'
  | 'accessories'
  | 'custom';

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryLabel: string;
  indicativePrice: string;
  priceMin: number;
  priceMax: number;
  shortDescription: string;
  description: string;
  image: string;
  gallery?: string[];
  customizationInfo: string;
  materialsSuggested: string[];
  finishOptions: string[];
  isFeatured?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  description: string;
  image: string;
  verifiedProject: boolean; // Flag to honestly distinguish verified business work vs inspiration
}

export interface QuoteFormData {
  customerName: string;
  phoneNumber: string;
  category: string;
  dimensions?: string;
  preferredMaterial?: string;
  budgetRange?: string;
  designDescription?: string;
  productName?: string;
}
