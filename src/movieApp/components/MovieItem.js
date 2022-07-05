import React from "react";
import { Card, Button } from "react-bootstrap";
export default function MovieItem({
    title,
    cover,
    category,
    rate,
    cast,
    release,
}) {
    return (
        <div className="movie-item">
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={cover}
                    style={{ height: "450px" }}
                />
                <Card.Body style={{ height: "360px" }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>Category</Card.Subtitle>
                    <Card.Text> {category} </Card.Text>
                    <Card.Subtitle>Rate</Card.Subtitle>
                    <Card.Text> {rate} </Card.Text>
                    <Card.Subtitle>Cast</Card.Subtitle>
                    <Card.Text> {cast} </Card.Text>
                    <Card.Subtitle>Release date</Card.Subtitle>
                    <Card.Text> {release} </Card.Text>
                    <Button variant="primary">See details</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
