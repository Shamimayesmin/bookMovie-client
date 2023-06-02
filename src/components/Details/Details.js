import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DetailsCard from '../DetailsCard/DetailsCard';

const Details = () => {
    const [loading, setLoading] = useState(true);
	const [shows, setShows] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/shows")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setShows(data);
				setLoading(false);
			});
	}, [setLoading]);

	if (loading) {
		return (
			<div className="flex items-center">
				<div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
			</div>
		);
	}
	
    return (
        <Container style={{ marginBottom: '20px',marginTop:"30px", padding: "30px" }}>
			<Row>
				{shows &&
					shows?.map((details) => (
						<Col xs={12} md={6} lg={4} style={{ marginBottom: '20px', paddingBottom: "20px" ,columnGap:'0px'}}>
							<DetailsCard  key={details._id} details={details} />
						</Col>
					))}
			</Row>
		</Container>
    );
};

export default Details;