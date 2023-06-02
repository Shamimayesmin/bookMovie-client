import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link, useLoaderData } from "react-router-dom";
// import BookMovieModal from "./BookMovieModal";

const DetailsCard = () => {
	const data = useLoaderData()
    const {_id} = data
	console.log(data);
// {/* to={(`/ticket-book/${_id}`) */}
	return (
		<Container
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "50px",
				marginBottom: "70px",
			}}
		>
			<Card style={{ width: "50%" }}>
				<Card.Img variant="top" src={data.show.image.medium} />
				<Card.Body>
					<Card.Title>
						{data.show.name}{" "}
						<span>
							<Badge bg="primary">{data.show.genres[0]}</Badge>
						</span>
					</Card.Title>
					<Card.Text>{data.show.summary.replace(/<[^>]+>/g, "")}</Card.Text>
					<div>
						<h6>Language:{data.show.language}</h6>
						<h6>
							Ended:<Badge bg="secondary">{data.ended}</Badge>
						</h6>
					</div>
                    {/* {(`/ticket-book`)} */}
					<Link to={(`/ticket-book/${_id}`)}>
						<Button variant="primary">Book</Button>
					</Link>
				</Card.Body>
			</Card>

		</Container>
	);
};

export default DetailsCard;
