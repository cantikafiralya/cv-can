import React from "react";
import "./loadingComponent.css";
import { Spin } from "antd";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <Spin size="large" tip="Loading . . ."style={{ color: '#2b2a4c' }}/>
    </div>
  );
};

export default LoadingComponent;
