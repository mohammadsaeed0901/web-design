import { Routes as AppRoutes, Route } from "react-router-dom";
import { FC, lazy } from "react";
import GuardRoute from "./GuardRoute.component";

const Dashboard = lazy(() => import("../Pages/Main/Main.component"));
const VideoView = lazy(() => import("../Pages/VideoView/VideoView.component"));
const CategoryView = lazy(() => import("../Pages/CategoryView/CategoryView.component"));
const Login = lazy(() => import("../Pages/Login/Login.component"));
const Resigter = lazy(() => import("../Pages/Register/Register.component"));
const NotFound = lazy(() => import("../Pages/NotFound/NotFound.component"));

const Routes: FC = () => {
    return (
        <AppRoutes>
          <Route path="/" element={<GuardRoute />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/v/:id" element={<VideoView />} />
            <Route path="/t/:id" element={<CategoryView />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Resigter />} />
        </AppRoutes>
    );
  };
  
  export default Routes;
  