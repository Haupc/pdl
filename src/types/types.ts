export interface CarouselItem {
  id: string;
  next: string;
  prev: string;
  bgUrl: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
