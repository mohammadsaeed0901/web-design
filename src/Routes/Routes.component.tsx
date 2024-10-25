import { Routes as AppRoutes, Route } from "react-router-dom";
import { FC, lazy } from "react";
import GuardRoute from "./GuardRoute.component";

const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard.component"));
const PlanesList = lazy(() => import("../Pages/Plane/PlanesList.component"));
const PlaneReserve = lazy(() => import("../Pages/Plane/Reserve/PlaneReserve.component"));
const TrainsList = lazy(() => import("../Pages/Train/TrainsList.component"));
const TrainReserve = lazy(() => import("../Pages/Train/Reserve/TrainReserve.component"));
const HotelsList = lazy(() => import("../Pages/Hotel/HotelsList.component"));
const HotelReserve = lazy(() => import("../Pages/Hotel/Reserve/HotelReserve.component"));
const Login = lazy(() => import("../Pages/Login/Login.component"));
const Resigter = lazy(() => import("../Pages/Register/Register.component"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.component"));

const Routes: FC = () => {
    return (
        <AppRoutes>
          <Route path="/" element={<GuardRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/flights" element={<PlanesList />} />
            <Route path="/flights/:id" element={<PlaneReserve />} />
            <Route path="/trains/:city" element={<TrainsList />} />
            <Route path="/trains/:city/:id" element={<TrainReserve />} />
            <Route path="/hotel/:city" element={<HotelsList />} />
            <Route path="/hotel/:city/:id" element={<HotelReserve />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resigter />} />
        </AppRoutes>
    );
  };
  
  export default Routes;
  