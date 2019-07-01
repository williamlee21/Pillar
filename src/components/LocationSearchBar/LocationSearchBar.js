import React from "react";

const LocationSearchBar = ({
	getWeatherByCurrentLocation,
	getWeatherByInput
}) => {
	return (
		<div id="location-search-bar">
			<form onSubmit={getWeatherByInput}>
				<input type="text" name="city" placeholder="Please enter your city" />
				<button>Find</button>
			</form>

			<button onClick={() => getWeatherByCurrentLocation()}>
				Get current location
			</button>
		</div>
	);
};

export default LocationSearchBar;
