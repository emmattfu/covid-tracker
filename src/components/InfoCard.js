import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup'

function InfoCard({data: {confirmed, recovered, deaths, lastUpdate}}) {

    if (!confirmed) {
        return (
          
            <h1>Loading...</h1>
    
        )
      }

  return (
    <Row className='justify-content-center'>
      <Col className='flex-grow-0' xl={3} sm={12} md={4}>
        <Card border="primary mt-3">
          <Card.Header>Infected</Card.Header>
          <Card.Body>
            <Card.Title>
                <CountUp start={0} end={confirmed.value} duration={2}  separator=","/>
            </Card.Title>
            <Card.Subtitle>{new Date(lastUpdate).toLocaleDateString()}</Card.Subtitle>
            <Card.Text>
              Number of active cases of COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className='flex-grow-0' xl={3} sm={12} md={4}>
        <Card border="success mt-3">
          <Card.Header>Recovered</Card.Header>
          <Card.Body>
            <Card.Title>
                <CountUp start={0} end={recovered.value} duration={2}  separator=","/>
            </Card.Title>
            <Card.Subtitle>{new Date(lastUpdate).toLocaleDateString()}</Card.Subtitle>
            <Card.Text>
              Number of recovered from COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className='flex-grow-0' xl={3} sm={12} md={4}>
        <Card border="danger mt-3">
          <Card.Header>Deaths</Card.Header>
          <Card.Body>
            <Card.Title>
            <CountUp start={0} end={deaths.value} duration={2}  separator=","/>
            </Card.Title>
            <Card.Subtitle>{new Date(lastUpdate).toLocaleDateString()}</Card.Subtitle>
            <Card.Text>
              Number of deaths caused by COVID-19
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default InfoCard;
