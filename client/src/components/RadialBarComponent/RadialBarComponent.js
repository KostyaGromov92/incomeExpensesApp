/* eslint-disable max-len */
// @flow

import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import { Col, Container, Row } from 'reactstrap';

// CONSTANTS
import radialBarData from '../../mock/radialBarData';

const RadialBarComponent = () => {
  const style = {
    top: 0,
    left: 350,
    lineHeight: '24px',
  };


  return (
    <Container className="chart-block">
      <h2 className="text-center">Radial Chart</h2>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={radialBarData}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise dataKey="uv" />
            <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
          </RadialBarChart>
        </Col>
      </Row>
    </Container>
  );
};

export default RadialBarComponent;
