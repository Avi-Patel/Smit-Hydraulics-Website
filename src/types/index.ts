export type Product = {
  id: string;
  label: string;
  code: string;
  description?: string;
  images: string[];
  price?: string;
  pdfLink?: string;
  details: Record<string, string>;
  additional?: Record<string, string[]>;
};
