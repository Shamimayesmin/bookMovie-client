import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Link,  } from "react-router-dom";
const SingleShow = ({ show }) => {
    const { _id } = show;
	const {name,image,genres,ended,summary} = show.show
	// console.log(show.show);
	return (
		<>
			<Card style={{ width: "18rem",}}>
				<Card.Img fluid variant="top" src={image.medium} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<Card.Text>
						{summary?.slice(0, 100).replace(/<[^>]+>/g, '')}
                        <span style={{ fontSize: "12px", color: "blue"}}>....more</span>
					</Card.Text>
					<div>
						<h6>
                        Genres:<Badge bg="secondary">{genres[0]}</Badge>
                        Ended:<Badge bg="secondary">{ended}</Badge>
						</h6>
					</div>
                  
					{/* to={(`/details/${_id}`)} */}
					
					<Link to={(`/details/${_id}`)}>
                    <Button className="me-3" variant="primary">Details</Button>
                    </Link>
					{/* <Link to={(`/ticket-book/${_id}`)}>
                    <Button variant="primary">Book</Button>
                    </Link> */}
					
				</Card.Body>
			</Card>
		</>
	);
};

export default SingleShow;
