import React from "react";
import { Row, Col, Card } from "antd";
/* Components */
import Steps from "../../components/Steps";

if (typeof window === "object") {
  require("./style.scss");
}

function MainContainer() {
  return (
    <Row className="main-container" gutter={50}>
      <Col xs={24}>
        <Card title="Layers setup">
          <Steps />
        </Card>
      </Col>
    </Row>
  );
}

export default MainContainer;
