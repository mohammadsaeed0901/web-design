export const CalculateDepartureAndArrivalTime = (departureTime: string, journeyDuration: number): { formattedDepartureTime: string; formattedArrivalTime: string } => {
    const formattedDepartureTime = new Date(departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    const departureDate = new Date(departureTime);
    const arrivalDate = new Date(departureDate);
    arrivalDate.setMinutes(departureDate.getMinutes() + journeyDuration);
    const formattedArrivalTime = arrivalDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false});

    return { formattedDepartureTime, formattedArrivalTime };
}