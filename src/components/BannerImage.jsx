import React from 'react';
import './BannerImage.css';
import BannerImg from '../assets/images/refresh22-what-we-do-header-3010x1020.jpg';
export const BannerImage = ({ title, description }) => {
	return (
		<section>
			<div className="banner_image">
				<div
					className="bg-image"
					style={{ backgroundImage: `url(${BannerImg})` }}
				>
					<div className="position-relative container h-100">
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</section>
	);
};
