import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { useLoaderData } from "react-router-dom";

const DetailsCard = () => {
    const data = useLoaderData().show
    console.log(data);

   
	return (
		<Container style={{ display:"flex" ,justifyContent:"center", alignItems:"center" , marginTop: "50px", marginBottom:"70px"}}>
            <Card style={{ width: "50%"}}>
			<Card.Img variant="top" src={data.image.medium} />
			<Card.Body>
				<Card.Title>{data.name} <span><Badge bg="primary">{data.genres[0]}</Badge></span>
                </Card.Title>
				<Card.Text>
                {data.summary.replace(/<[^>]+>/g, '')}
				</Card.Text>
                <div>
						<h6>
                        Language:{data.language}
						</h6>
                        <h6>Ended:<Badge bg="secondary">{data.ended}</Badge></h6>
					</div>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
        </Container>
	);
};

export default DetailsCard;
