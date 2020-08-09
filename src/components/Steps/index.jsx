import React, { useState } from "react";
import { Steps as AntSteps, Button, message, InputNumber } from "antd";
/* Components */
import Layers from "../Layers";
import html2canvas from "html2canvas";

const { Step } = AntSteps;

if (typeof window === "object") {
  require("./style.scss");
}

function Steps() {
  const steps = [
    {
      title: "Amount",
      description: "Input the number of layers."
    },
    {
      title: "Colors",
      description:
        "Select the colors for the layers by clicking on each of them."
    },
    {
      title: "Download",
      description: "Preview the layers and download the image file."
    }
  ];

  return (
    <div>
      <AntSteps className="ant-steps" size="small">
        {steps.map(item => (
          <Step
            status="process"
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </AntSteps>
      <div className="steps-content">
        {<Layers onSetStepStatus={() => {}} />}
      </div>
      <div className="steps-action">
        <Button type="primary" onClick={handleDone}>
          Download
        </Button>
      </div>
    </div>
  );

  function handleDone() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      console.log(canvas);
      const link = document.createElement("a");
      link.download = "layers.jpg";
      link.href = canvas.toDataURL("image/jpg");
      link.click();
      message.success("Processing complete!");
    });
  }
}

export default Steps;
