import React from 'react';
import videoBg from '../assets/videos/videoBackground.mp4';
import './BannerVideo.css';

export const BannerVideo = ({ title, sub_title, question }) => {
	return (
		<div className="banner__video__container">
			<div className="overlay "></div>
			<video src={videoBg} autoPlay loop muted />
			<div className="banner__video__title container">
				<h1>{title}</h1>
				<h2>{sub_title}</h2>
				<p>{question}</p>
			</div>
		</div>
	);
};
