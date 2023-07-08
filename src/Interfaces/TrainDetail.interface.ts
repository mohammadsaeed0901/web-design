export interface ITrainDetail {
    id: number;
    detail: {
        name: string;
        logo?: string;
        type: string;
        company: string;
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