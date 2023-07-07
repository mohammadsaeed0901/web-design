import { Routes as AppRoutes, Route } from "react-router-dom";
import { FC, lazy } from "react";
import GuardRoute from "./GuardRoute.component";

const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard.component"));
const PlanesList = lazy(() => import("../Pages/Plane/PlanesList.component"));
const PlaneReserve = lazy(() => import("../Pages/Plane/Reserve/PlaneReserve.component"));
const Login = lazy(() => import("../Pages/Login/Login.component"));
const Resigter = lazy(() => import("../Pages/Register/Register.component"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.component"));

const Routes: FC = () => {
    return (
        <AppRoutes>
          <Route path="/" element={<GuardRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/flights/:city" element={<PlanesList />} />
            <Route path="/flights/:city/:id" element={<PlaneReserve />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resigter />} />
        </AppRoutes>
    );
  };
  
  export default Routes;
  