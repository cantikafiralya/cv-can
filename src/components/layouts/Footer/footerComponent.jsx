import React from "react";
import { Layout, Row, Col, Space, Divider } from "antd";
import "./footer.css";


const FooterComponent = () => {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "#2b2a4c",
      }}
    >
<p>{""}</p>      
  <Row justify="center" align="middle">
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <Space direction="vertical">
              <span className="footer-text">© 2023 Cantika Firalya</span>
            </Space>
          </Col>
        </Row>
    </Footer>
  );
};

export default FooterComponent;
