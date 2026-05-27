export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription?: string;
  ingredients?: string;
  image: string;
  category: 'Cakes' | 'Cookies' | 'Gift Boxes' | 'Seasonal' | 'All';
  collection?: string;
  isLimitedEdition?: boolean;
  tags?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  variant?: string;
}

export interface AppState {
  cart: CartItem[];
}
