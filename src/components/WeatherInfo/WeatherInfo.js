import React from "react";

const WeatherInfo = ({ weatherData }) => {
	return (
		<div id="weather-info">
			<div>
				<h1>{weatherData.city && weatherData.city.name}</h1>
				<h2>
					Temperature: {weatherData.list && weatherData.list[0].main.temp}
				</h2>
				<h2>
					{weatherData.list && weatherData.list[0].weather[0].description}
				</h2>
				<h2>
					Humidity: {weatherData.list && weatherData.list[0].main.humidity}
				</h2>
				<h2>
					Pressure: {weatherData.list && weatherData.list[0].main.pressure}
				</h2>
			</div>
		</div>
	);
};

export default WeatherInfo;
