"use client";
import React from "react";
import Countdown from "react-countdown";

const endingdate = new Date("2023-10-30");

const CountDown = () => {
	return (
		<div className="text-white">
			<Countdown
				className="font-bold text-5xl text-yellow-300"
				date={endingdate}
			/>
		</div>
	);
};

export default CountDown;
