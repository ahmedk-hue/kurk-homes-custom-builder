export interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

export interface LocationItem {
  city: string;
  link: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  location: string;
  imageUrl: string;
}