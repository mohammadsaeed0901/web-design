export interface TrainCardPropsType {
    totalPrice: number;
    remaining?: number;
    detail: {
        name: string;
        logo?: string;
        type: string;
        company: string;
    }
    from: {
        city: string;
        hour: string;
    };
    to: {
        city: string;
        hour: string;
    };
    onClick?: () => void;
}