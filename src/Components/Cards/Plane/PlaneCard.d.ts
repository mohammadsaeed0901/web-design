import { type ICity } from "Interfaces/City.interface";
import { type IFlight } from "Interfaces/Flight.interface";

export interface PlaneCardPropsType {
    flight: IFlight;
    cities: ICity[];
    onClick?: () => void;
}

export const AirplaneTypeTrans: Record<string, string> = {
    "BOEING": "بویینگ",
    "AIRBUS": "ایرباس",
};

export const AirplaneClassTypeTrans: Record<string, string> = {
    "BUSINESS": "بیزینس",
    "ECONOMY": "اکونومی",
};

export const AirplaneTicketTypeTrans: Record<string, string> = {
    "SYSTEM": "سیستمی",
    "CHARTER": "چارتری"
};