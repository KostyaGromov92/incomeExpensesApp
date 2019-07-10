//@flow

import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

class LineChartComponent extends Component<*> {
	render() {
		const data = [
			{
				name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
			},
			{
				name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
			},
			{
				name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
			},
			{
				name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
			},
			{
				name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
			},
			{
				name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
			},
			{
				name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
			},
		];

		return (
			<Container className="chart-block">
				<h2 className="text-center">Line Chart</h2>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }}>
						<ResponsiveContainer
							idth="100%"
							height={300}
							formMiss
						>
							<LineChart data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
								<Line type="monotone" dataKey="uv" stroke="#82ca9d" />
							</LineChart>
						</ResponsiveContainer>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default LineChartComponent;
