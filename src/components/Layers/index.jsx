import React, { useMemo, useState } from "react";
/* Components */
import { SketchPicker } from "react-color";
/* Antd */
import { Row, List, Col, Popover, InputNumber, Alert } from "antd";

import { ReactComponent as Layer01 } from "../../assets/svg/ube-layer-01.svg";
import { ReactComponent as Layer02 } from "../../assets/svg/ube-layer-02.svg";
import { ReactComponent as Layer03 } from "../../assets/svg/ube-layer-03.svg";
import { ReactComponent as Layer04 } from "../../assets/svg/ube-layer-04.svg";
import { ReactComponent as Layer05 } from "../../assets/svg/ube-layer-05.svg";
import { ReactComponent as Layer06 } from "../../assets/svg/ube-layer-06.svg";
import { ReactComponent as Layer07 } from "../../assets/svg/ube-layer-07.svg";
import { ReactComponent as Layer08 } from "../../assets/svg/ube-layer-08.svg";
import { ReactComponent as Layer09 } from "../../assets/svg/ube-layer-09.svg";
import { ReactComponent as Layer10 } from "../../assets/svg/ube-layer-10.svg";
import { ReactComponent as Layer11 } from "../../assets/svg/ube-layer-11.svg";
import { ReactComponent as Layer12 } from "../../assets/svg/ube-layer-12.svg";
import { ReactComponent as Layer13 } from "../../assets/svg/ube-layer-13.svg";

if (typeof window === "object") {
  require("./style.scss");
}

function Layers() {
  const [numberOfLayers, setNumberOfLayers] = useState(13);
  const [colors, setColors] = useState([]);
  const layersArray = useMemo(() => {
    const layers = Array(numberOfLayers)
      .fill(0)
      .map(Number.call, Number);
    setColors(
      layers.map(layer => ({
        r: getRandomIntInclusive(0, 255),
        g: getRandomIntInclusive(0, 255),
        b: getRandomIntInclusive(0, 255),
        a: "1"
      }))
    );
    return layers;
  }, [numberOfLayers]);

  return (
    <Row className="main-container" gutter={50}>
      <Col style={{ margin: "auto" }} xs={24} md={12} lg={8}>
        <InputNumber
          min={1}
          max={13}
          defaultValue={numberOfLayers}
          onChange={value => {
            console.log(value);
            value > 13
              ? setNumberOfLayers(13)
              : value <= 13 && value >= 1
              ? setNumberOfLayers(value)
              : setNumberOfLayers(1);
          }}
        />
        <Alert
          style={{ marginTop: 10, textAlign: "start" }}
          message="Warning"
          description="Changing this number will reset all the layers and their colors."
          type="warning"
          showIcon
        />
      </Col>
      <Col
        style={{ overflow: "auto", maxHeight: 400, margin: "auto" }}
        xs={24}
        md={12}
        lg={8}
      >
        <List
          size="small"
          bordered
          dataSource={layersArray}
          renderItem={renderItem}
        />
      </Col>
      <Col id="capture" style={{ height: 400 }} xs={24} lg={8}>
        {colors.length === layersArray.length &&
          layersArray.map(layer => {
            const LayerComponent = getLayerComponent(layer);
            return (
              <LayerComponent
                key={layer}
                style={{ position: "absolute", left: "10%" }}
                width={400}
                fill={`rgba(${colors[layer].r}, ${colors[layer].g}, ${colors[layer].b}, ${colors[layer].a})`}
              />
            );
          })}
      </Col>
    </Row>
  );

  function getLayerComponent(layer) {
    switch (layer) {
      case 0:
        return numberOfLayers >= 7
          ? Layer01
          : numberOfLayers === 6
          ? Layer02
          : numberOfLayers === 5
          ? Layer03
          : numberOfLayers === 4
          ? Layer04
          : numberOfLayers === 3
          ? Layer05
          : numberOfLayers === 2
          ? Layer06
          : Layer07;
      case 1:
        return numberOfLayers >= 7
          ? Layer02
          : numberOfLayers === 6
          ? Layer03
          : numberOfLayers === 5
          ? Layer04
          : numberOfLayers === 4
          ? Layer05
          : numberOfLayers === 3
          ? Layer06
          : Layer07;
      case 2:
        return numberOfLayers >= 7
          ? Layer03
          : numberOfLayers === 6
          ? Layer04
          : numberOfLayers === 5
          ? Layer05
          : numberOfLayers === 4
          ? Layer06
          : Layer07;
      case 3:
        return numberOfLayers >= 7
          ? Layer04
          : numberOfLayers === 6
          ? Layer05
          : numberOfLayers === 5
          ? Layer06
          : Layer07;
      case 4:
        return numberOfLayers >= 7
          ? Layer05
          : numberOfLayers === 6
          ? Layer06
          : Layer07;
      case 5:
        return numberOfLayers >= 7 ? Layer06 : Layer07;
      case 6:
        return Layer07;
      case 7:
        return Layer08;
      case 8:
        return Layer09;
      case 9:
        return Layer10;
      case 10:
        return Layer11;
      case 11:
        return Layer12;
      case 12:
        return Layer13;
      default:
        return;
    }
  }

  function renderItem(layer) {
    return (
      <List.Item className="list-item">
        <span>{`Layer ${layer + 1}`}</span>
        {colors.length > 0 && (
          <Popover
            content={
              <SketchPicker
                color={{
                  r: colors[layer].r,
                  g: colors[layer].g,
                  b: colors[layer].b,
                  a: colors[layer].a
                }}
                onChange={newColor =>
                  setColors(
                    colors.map((color, index) =>
                      index === layer ? newColor.rgb : color
                    )
                  )
                }
              />
            }
          >
            <div
              className="swatch"
              style={{
                background: `rgba(${colors[layer].r}, ${colors[layer].g}, ${colors[layer].b}, ${colors[layer].a})`
              }}
            ></div>
          </Popover>
        )}
      </List.Item>
    );
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
}

export default Layers;
