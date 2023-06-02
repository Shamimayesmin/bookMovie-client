import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
const SingleShow = ({ show }) => {
	const {name,image,_id,genres,ended} = show.show
	console.log(show.show);
	return (
		<>
			<Card style={{ width: "18rem",}}>
				<Card.Img fluid variant="top" src={image.medium} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</Card.Text>
					<div>
						<h6>
                        Genres:<Badge bg="secondary">{genres[0]}</Badge>
                        Ended:<Badge bg="secondary">{ended}</Badge>
						</h6>
					</div>
                    {/* to={(`/tour-details/${_id}`)} */}
					<Link to={(`/movie-details/${_id}`)}>
                    <Button variant="primary">Go somewhere</Button>
                    </Link>
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleShow;
