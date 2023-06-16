export interface PlaneCardPropsType {
    totalPrice: number;
    detail: {
        name: string;
        logo?: string;
        sys?: string;
        type?: string;
        eco?: string;
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