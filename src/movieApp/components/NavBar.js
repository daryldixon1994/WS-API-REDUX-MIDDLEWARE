import React from "react";
import { useDispatch } from "react-redux";
import {
    Navbar,
    Nav,
    Container,
    Form,
    Button,
    FormControl,
} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { getSearch, getRate } from "../redux/actions";
function NavBar() {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(getSearch(event.target.value));
    };
    const ratingChanged = (newRating) => {
        dispatch(getRate(newRating));
    };
    const handleReset = (e) => {
        window.location.reload();
    };
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand>Movie App</Navbar.Brand>
                    <ReactStars
                        count={10}
                        onChange={(newRating) => ratingChanged(newRating)}
                        size={30}
                        activeColor="#ffd700"
                    />
                    <Button
                        as="input"
                        type="reset"
                        value="Reset"
                        onClick={() => handleReset()}
                    />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        ></Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search movie title"
                                className="me-2"
                                aria-label="Search"
                                onChange={(event) => handleChange(event)}
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
