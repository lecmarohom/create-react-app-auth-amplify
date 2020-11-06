import React from 'react';
import { Row, Col } from 'reactstrap';

import PopUpSensor from './PopUpSensor';

const ProgressBar = (props) => {
  const value = props.value[0];
  const threshold = props.threshold;
  return (
    <Row style={{ width: '300px' }}>
      <Col>
        <Row>
          <Col md="5">Sensor</Col>
          <Col md="3">Value</Col>
          <Col md="4">Status</Col>
        </Row>
        <PopUpSensor
          name="Rain Rate"
          value={value.rainRate}
          threshold={threshold.rainRate}
        />
        <PopUpSensor
          name="Soil Moisture A"
          value={value.soilMoistA}
          threshold={threshold.soilMoistA}
        />
        <PopUpSensor
          name="Soil Moisture B"
          value={value.soilMoistB}
          threshold={threshold.soilMoistB}
        />
        <PopUpSensor
          name="Soil Moisture C"
          value={value.soilMoistC}
          threshold={threshold.soilMoistC}
        />
        <PopUpSensor
          name="Temperature"
          value={value.temperature}
          threshold={threshold.temperature}
        />
        <PopUpSensor
          name="Humidity"
          value={value.humidity}
          threshold={threshold.humidity}
        />
        <PopUpSensor
          name="Pressure"
          value={value.pressure}
          threshold={threshold.pressure}
        />
        <PopUpSensor
          name="Wind Speed"
          value={value.windSpeed}
          threshold={threshold.windSpeed}
        />
        <PopUpSensor
          reverse
          name="Battery Level"
          value={value.batteryLevel}
          threshold={threshold.batteryLevel}
        />
      </Col>
    </Row>
  );
};

export default ProgressBar;
