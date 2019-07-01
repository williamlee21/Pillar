import React, { Component } from "react";
import './App.css'	
import LocationSearchBar from "./components/LocationSearchBar/LocationSearchBar";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherChart from "./components/WeatherChart/WeatherChart";

const API_KEY = "f42172ba53d75842be4d204fd5b90170";

class App extends Component {
	state = {
		cityQuery: "",
		weatherData: []
	};

	componentDidMount() {
		this.getWeatherByCurrentLocation();
	}

	getWeatherByInput = async e => {
		e.preventDefault();
		let query = e.target.elements.city.value
			.trim()
			.split(" ")
			.join("+");

		const api_call = await fetch(
			// `http://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${API_KEY}`
			`http://api.openweathermap.org/data/2.5/forecast?q=${query}&APPID=${API_KEY}`
		);
		const weatherData = await api_call.json();

		this.setState({ weatherData });
	};

	getWeatherByCurrentLocation = async () => {
		await navigator.geolocation.getCurrentPosition(async pos => {
			this.setState({
				coordsData: [pos.coords.latitude, pos.coords.longitude]
			});
			let lat = pos.coords.latitude.toFixed(2);
			let lon = pos.coords.longitude.toFixed(2);

			const api_call = await fetch(
				// `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
				`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${API_KEY}`
			);
			const weatherData = await api_call.json();

			this.setState({ weatherData });
		});
	};

	render() {
		return (
			<div>
				<LocationSearchBar
					getWeatherByInput={this.getWeatherByInput}
					getWeatherByCurrentLocation={this.getWeatherByCurrentLocation}
				/>
				{this.state.weatherData.cod !== "400" ? (
					<WeatherInfo weatherData={this.state.weatherData} />
				) : (
					""
				)}
				<WeatherChart weatherData={this.state.weatherData} />
			</div>
		);
	}
}

export default App;
