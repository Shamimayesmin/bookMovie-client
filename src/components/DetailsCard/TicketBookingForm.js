import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const TicketBookingForm = () => {
	

	const data = useLoaderData().show;
	console.log(data);
	
	
	return (
		<Container
			style={{
				width: "75%",
				backgroundColor: "pink",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "50px",
				marginBottom: "70px",
				padding: "20px",
				borderRadius: '30px'
			}}
		>
			<Form>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							className="w-100 p-2"
							type="text"
							defaultValue={data.name}
						/>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Genres</Form.Label>
						<Form.Control type="text" defaultValue={data.genres[0]} />
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Type</Form.Label>
						<Form.Control type="text" defaultValue={data.type} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Language</Form.Label>
						<Form.Control type="text" defaultValue={data.language} />
					</Form.Group>
				</Row>
				<Row className="mb-3">
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>premiered</Form.Label>
						<Form.Control type="text" defaultValue={data.premiered} />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Rating</Form.Label>
						<Form.Control type="text" defaultValue={data.rating.average} />
					</Form.Group>
				</Row>

				<Form.Group className="mb-3" controlId="formGridAddress1">
					<Form.Label>status</Form.Label>
					<Form.Control defaultValue={data.status} />
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
};

export default TicketBookingForm;
