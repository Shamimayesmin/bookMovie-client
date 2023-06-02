import React, { useEffect, useState } from "react";
import SingleShow from "../SingleShow/SingleShow";
import { Row, Col, Container } from "react-bootstrap";

const AllShows = () => {
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
	//className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
	return (
		<Container style={{ marginBottom: '20px',marginTop:"30px", padding: "30px" }}>
			<Row>
				{shows &&
					shows?.map((show) => (
						<Col xs={12} md={6} lg={4} style={{ marginBottom: '20px', paddingBottom: "20px" ,columnGap:'0px'}}>
							<SingleShow  key={show._id} show={show} />
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default AllShows;
