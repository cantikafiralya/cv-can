import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layouts/LayoutComponent";
import LoadingComponent from "../components/loadingComponent/LoadingComponent";

import HomePage from "../pages/homePage/HomePage";

const RouteManagement = () => {

  return (
    <Suspense fallback={<LoadingComponent />}>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </LayoutComponent>

    </Suspense>
  );
};

export default RouteManagement;
