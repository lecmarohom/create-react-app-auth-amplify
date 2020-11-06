import React from 'react';
import { Row, Col, Progress } from 'reactstrap';

const PopUpSensor = (props) => {
  const percentage = (props.value / props.threshold) * 100;
  let color = null;
  if (percentage <= 25) {
    color = 'success';
  } else if (percentage <= 50) {
    color = 'primary';
  } else if (percentage <= 75) {
    color = 'warning';
  } else {
    color = 'danger';
  }
  if (props.reverse) {
    if (percentage <= 25) {
      color = 'danger';
    } else if (percentage <= 50) {
      color = 'warning';
    } else if (percentage <= 75) {
      color = 'primary';
    } else {
      color = 'success';
    }
  }
  return (
    <Row>
      <Col md="5">{props.name}</Col>
      <Col md="3">{Math.ceil(percentage)}%</Col>
      <Col md="4">
        <Progress
          animated
          striped
          color={color}
          value={props.value}
          max={props.threshold}
        />
      </Col>
    </Row>
  );
};

export default PopUpSensor;
