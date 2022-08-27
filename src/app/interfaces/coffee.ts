export interface Entity {
  id: number;
  name: string;
  description?: string;
  price: string;
  promotion?: boolean;
  promotionPrice?: string;
}
