export interface FilterContainerPropTypes {
  type: string;
  booking: {
    origin?: string | undefined;
    destination?: string | undefined;
    checkIn?: string | undefined;
    checkOut?: string | undefined;
    passengersNo?: number | undefined;
  };
  setBooking: React.Dispatch<React.SetStateAction<{
    origin?: string | undefined;
    destination?: string | undefined;
    checkIn?: string | undefined;
    checkOut?: string | undefined;
    passengersNo?: number | undefined;
  }>>;
}