import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../Assets/css/WeatherModal.css';
import BgImage from '../../Assets/images/mt1.jpg';

const weather = () => {
  const bgImage = {
    background: 'url(' + BgImage + ')',
    backgroundSize: 'cover'
  };
  return (
    <Card className="weather-container shadow">
      <CardHeader style={bgImage}>
        <p>Location Here</p>
        <h1>
          <FontAwesomeIcon icon="cloud" /> 28 &#176;C
        </h1>
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <FontAwesomeIcon icon={'cloud'} />
            <p>MON</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={'cloud'} />
            <p>TUE</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={'cloud'} />
            <p>WED</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={'cloud'} />
            <p>THU</p>
          </Col>
          <Col>
            <FontAwesomeIcon icon={'cloud'} />
            <p>FRI</p>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default weather;
