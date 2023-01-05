import React from 'react';
import videoBg from '../assets/videos/videoBackground.mp4';
import './BannerVideo.css';
import { Link } from 'react-router-dom';

export const BannerVideo = ({ title, sub_title, question }) => {
	return (
		<div className="banner__video__container position-relative">
			<div className="overlay "></div>
			<video src={videoBg} autoPlay loop muted />
			<div className="banner__video__title container">
				<h1>{title}</h1>
				<h2>{sub_title}</h2>
				<p>{question}</p>
				<Link to="/servicios" className="button-white-lg button-lg">
					Mas información
				</Link>
			</div>
		</div>
	);
};
