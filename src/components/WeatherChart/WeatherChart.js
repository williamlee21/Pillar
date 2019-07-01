import React from "react";

const WeatherChart = ({ weatherData }) => {
	let dataArray = weatherData.list ? weatherData.list.slice(1, 5) : [];
	console.log(dataArray)
	let displayWeatherData =
		dataArray.length > 0
			? dataArray.map(weather => {
					let time = new Date(weather.dt_txt)
					time = `${time.getHours()}:00`
					return (
						<div className="weather-card">
							<h1>{weather.main.temp}</h1>
							<h2>Humidity: {weather.main.humidity}</h2>
							<h2>Pressure: {weather.main.pressure}</h2>
							<h4>{weather.weather[0].description}</h4>
							<h3>{time}</h3>
						</div>
					);
			  })
			: [];

	return (
		<div id="chart">
			{console.log(dataArray)}
			{console.log(displayWeatherData)}
			{displayWeatherData}
		</div>
	);
};

export default WeatherChart;
