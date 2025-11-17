export interface Housing{
  id: number;
  name: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  rating: number;
  status: string;
  type?: string;
  description?: string;
  postedDays?: number;
}
// ? itu kalau isi data nya bersifat opsional(dak ada pun, tidak apa-apa)