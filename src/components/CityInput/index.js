import React, {useState} from 'react';
import {Container, Form, Button } from 'react-bootstrap';
import './index.css';

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [error, setError] = useState("");

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = () => {
        if(!city)
        {
            setError("City Feild is Empty");
        }
        else
        {
            setError("");
            fetchCityWeather();
        }
    };

    return(
    <>
        <Container className="mt-4">
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" value={city} placeholder="Enter your city name..." onChange={handleInputChange}/>
                <p className="text-danger">{error}</p>
                </Form.Group>
            </Form>
        </Container>
        <Container id="center">
            <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Container>
    </>
    );
};

export default CityInput;