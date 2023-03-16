import React from "react";
import { Form, Row } from "react-bootstrap";
import { Button } from 'react-bootstrap';

function FlightFilter() {
    return (
        <Form>
            <Row>
                {/* Departure location input */}
                <Form.Group className="col-md-4" controlId="formDeparture">
                    <Form.Label>Departure</Form.Label>
                    <Form.Control type="text" placeholder="Enter departure city" />
                </Form.Group>
                {/* Arrival location input */}
                <Form.Group className="col-md-4" controlId="formDestination">
                    <Form.Label>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Enter destination city" />
                </Form.Group>
                {/* Flight dates input */}
                <Form.Group className="col-md-2" controlId="formDepartureDate">
                    <Form.Label>Departure date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Form.Group className="col-md-2" controlId="formReturnDate">
                    <Form.Label>Return date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
            </Row>
            <Row>
                {/* Number of passengers input */}
                <Form.Group className="col-md-3" controlId="formPassengers">
                    <Form.Label>Passengers</Form.Label>
                    <Form.Control as="select" defaultValue="1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5+</option>
                    </Form.Control>
                </Form.Group>
                {/* Submit button */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Row>
        </Form>
    )
};

export default FlightFilter;