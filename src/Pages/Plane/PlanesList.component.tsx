import { Box, Button, Typography } from "@mui/material";
import PlaneCard from "Components/Cards/Plane/PlaneCard.component";
import { useState, type FC, useEffect, useMemo } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { ICity } from "Interfaces/City.interface";
import { FormProvider, useForm } from "react-hook-form";
import InputComponent from "Components/Input/Input.component";
import SelectComponent from "Components/Select/Select.component";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { type IFlight } from "Interfaces/Flight.interface";

const PlanesList: FC = () => {
  const [searchParams] = useSearchParams();
  const [planes, setPlanes] = useState<IFlight[]>([]);
  const [cities, setCities] = useState<ICity[]>([]); 
  const navigate = useNavigate();

  const fetchFlights = async (departure?: string | null, arrival?: string | null, departureDate?: string | null, adt?: string | null) => {
    try {
        const response = await axios.get('http://localhost:5000/api/flights', {
            params: {
              departure,
              arrival,
              departureDate,
              adt
            }
        });
        setPlanes(response.data);
    } catch (error) {
        console.error('Error fetching flights:', error);
    }
};

  useEffect(() => {
    fetchFlights(searchParams?.get("departure"), searchParams?.get("arrival"), searchParams?.get("departureDate"), searchParams?.get("adt"));
    axios.get("http://localhost:5000/api/cities").then((response) => {
      setCities(response.data);
    });
  }, [searchParams]);

    const flightSchema = useMemo(
      () =>
        yupResolver(
          yup.object({
            origin: yup.string(),
            destination: yup.string(),
            departureDate: yup.string(),
            adtNo: yup.number(),
          })
        ),
      []
    );
  
    const formMethods = useForm({
      mode: "onChange",
      resolver: flightSchema,
      defaultValues: {  
        origin: searchParams?.get("departure") ?? "", 
        destination: searchParams?.get("arrival") ?? "", 
        departureDate: searchParams?.get("departureDate") ?? "", 
        adtNo: +searchParams?.get("adt")! 
      },
    });
  
    const { control, formState, handleSubmit, getValues } = formMethods;

    return (
        <Box sx={{ display: "flex", direction: "rtl" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "25%", padding: "24px 16px", border: "3px solid #f7f7f7", borderRadius: "8px", gap: 2, height: "fit-content" }}>
              <FormProvider {...formMethods}>
                <Box sx={{ display: "flex",direction: "rtl", justifyContent: "space-between", flexDirection: "column", gap: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>
                      مبدا (شهر)
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <SelectComponent
                      control={control}
                      name="origin"
                      options={cities.map((ct) => ({
                        label: ct.faDisplayName,
                        value: ct.id
                      }))}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>
                      مقصد (شهر)
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <SelectComponent
                      control={control}
                      name="destination"
                      options={cities.map((ct) => ({
                        label: ct.faDisplayName,
                        value: ct.id
                      }))}
                    />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>
                      تاریخ رفت
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <InputComponent control={control} name="departureDate" type="date" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography>
                      تعداد مسافران
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <InputComponent control={control} name="adtNo" type="number" />
                  </Box>
                  <Button variant="contained" color="warning" disabled={!formState.isValid} onClick={() => {
                    navigate({
                      pathname: `/flights`,
                      search: createSearchParams({
                        departure: getValues("origin") ?? "",
                        arrival: getValues("destination") ?? "",
                        departureDate: getValues("departureDate") ?? "",
                        adt: getValues("adtNo")?.toString() ?? "",
                      }).toString()
                    });
                  }}>
                    جستجو
                  </Button>
                </Box>
              </FormProvider>
            </Box>
            <Box sx={{ width: "75%", display: "flex", flexDirection: "column", gap: 2, alignItems: "center",  paddingX: "16px" }}>
              {planes.length > 0 ?
              planes.map((pln) => (
                  <PlaneCard 
                    flight={pln}
                    cities={cities}
                    onClick={() => navigate({ pathname: `/flights/${pln?.id}` })} 
                  />
              )) : <>No planes</>}
            </Box>
        </Box>
    );
};

export default PlanesList;