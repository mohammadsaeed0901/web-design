import { useEffect, Suspense } from "react";
import { Navigate } from "react-router-dom";
import Layout from "Layout/";
import type { FC } from "react";

const GuardRoute: FC = () => {
  const refreshToken = window.localStorage.getItem("refreshtoken");
  refreshToken || window.localStorage.clear();

  return refreshToken ? <Layout /> : <Navigate to="/login" />;
};

export default GuardRoute;