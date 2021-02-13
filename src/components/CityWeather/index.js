import React from 'react';
import {Container, Table} from 'react-bootstrap';
import './index.css';

const CityWeather = ({cityWeather}) => {

    return(
        <>
            {cityWeather!=="" &&
                <Container id="mytbl">
                    <Table bordered variant="dark">
                        <tr>
                            <td>{"City Name: " + cityWeather.name}</td>
                            <td>{"Latitude: " + cityWeather.coord.lat.toFixed(2)+"°"}</td>
                            <td>{"Longitude: " + cityWeather.coord.lon.toFixed(2)+"°"}</td>
                        </tr>
                        <tr>
                            <td>{"Average Temperature: " + (cityWeather.main.temp-273.15).toFixed(2)+"°C"}</td>
                            <td>{"Maximum Temperature: " + (cityWeather.main.temp_max-273.15).toFixed(2)+"°C"}</td>
                            <td>{"Minimum Temperature: " + (cityWeather.main.temp_min-273.15).toFixed(2)+"°C"}</td>
                            
                        </tr>
                        <tr>
                            <td>{"Weather Condition: " + cityWeather.weather[0].description}</td>
                            <td>{"Wind Speed: " + cityWeather.wind.speed+" m/s"}</td>
                            <td>{"Pressure: " + cityWeather.main.pressure+" hPa"}</td>
                            
                        </tr>
                        <tr>
                            <td>{"Real Feel: " + (cityWeather.main.feels_like-273.15).toFixed(2)+"°C"}</td>
                            <td>{"Humidity: " + cityWeather.main.humidity+"%"}</td>
                            <td>{"Cloudiness: " + cityWeather.clouds.all+"%"}</td>
                        </tr>
                    </Table>
                </Container>
            }
        </>
    );
};

export default CityWeather;