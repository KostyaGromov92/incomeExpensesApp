// @flow

import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

type Props = {
  lineChartData: Object
};

const LineChartComponent = ({ lineChartData }: Props) => (
  <Container>
    <h2 className="text-center">Line Chart</h2>
    <Row>
      <Col sm="12" md="12">
        <ResponsiveContainer
          idth="100%"
          height={300}
          formMiss
        >
          <LineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Col>
    </Row>
  </Container>
);
export default LineChartComponent;
