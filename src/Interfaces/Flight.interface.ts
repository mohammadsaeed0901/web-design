export type IFlightClassType = "ECONOMY" | "BUSINESS";

export type IAirplaneType = "AIRBUS" | "BOEING";

export type IFlightTicketType = "SYSTEM" | "CHARTER";

export interface IFlight {
    id: number;
    airline: string;
    airplaneClassType: IFlightClassType;
    airplaneTicketType: IFlightTicketType;
    airplaneType: IAirplaneType;
    departureTime: string;
    destinationCityId: number;
    isCancel: boolean;
    journeyDuration: string;
    journeyDurationPerMinute: number;
    logoBase64: string;
    originCityId: number;
    remainingSeatsNo: number;
    totalPrice: string;
}