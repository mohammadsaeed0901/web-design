export interface PlaneCardPropsType {
    totalPrice: number;
    detail: {
        name: string;
        logo?: string;
        ticketType?: string; 
        type?: string; 
        class?: string;
    }
    from: {
        city: string;
        hour: string;
    };
    to: {
        city: string;
        hour: string;
    };
    remaining?: number;
    onClick?: () => void;
}