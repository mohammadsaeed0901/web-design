export interface IPlaneDetail {
  id: number;
  detail: {
      name: string;
      logo?: string;
      ticketType?: string;
      type?: string;
      class?: string;
  };
  from: {
      city: string;
      hour: string;
  };
  to: {
      city: string;
      hour: string;
  };
  totalPrice: number;
  remaining?: number;
}