import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { APIkey } from "../../config";

function Weather({ rideState: { loading, rides } }) {
	let city = "Bucuresti";

	const [temp, setTemp] = useState(0);
	const [icon, setIcon] = useState("");

	if (!loading && rides !== null && rides.length !== 0) {
		city = rides[0].start;
	}

	const fetchWeather = async () => {
		try {
			const res = await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`
			);
			const data = await res.json();

			setTemp(Math.round(data.main.temp - 273));
			setIcon(`https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
		} catch (error) {
			if (error.message === "city not found") {
				city = "Bucuresti";
			}
		}
	};

	useEffect(() => {
		fetchWeather();

		// eslint-disable-next-line
	}, [city]);

	return (
		<div className="card bg-dark">
			<div className="row">
				<div className="col s6">
					<span>City: {city}</span> <br />
					<span>Temperature: {temp} °C</span> <br />
				</div>
				<div className="col s6 center-align">
					<img
						alt=""
						src={icon}
						width="70"
						height="225"
						style={{ margin: "-3em" }}
					/>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	rideState: state.ride,
});

export default connect(mapStateToProps, null)(Weather);
