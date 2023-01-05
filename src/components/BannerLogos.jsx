import React from 'react';
import './BannerLogos.css';
import tableau from '../assets/logos/tecnoly-tableau.png';
import salesforce from '../assets/logos/salesforce.jpg';
import pmi from '../assets/logos/pmi.png';
import scrum from '../assets/logos/scrum.png';
import { Link } from 'react-router-dom';

export const BannerLogos = (props) => {
	return (
		<div {...props}>
			<div className="row d-flex align-items-center bannerLogos mt-4">
				<div className="col-6 col-md-3 col-lg-3 d-flex align-items-center">
					<img className="img-fluid" src={tableau} alt="tecnoly-tableau" />
				</div>
				<div className="col-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
					<img className="img-fluid" src={salesforce} alt="tecnoly-tableau" />
				</div>
				<div className="col-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
					<img className="img-fluid" src={pmi} alt="tecnoly-tableau" />
				</div>
				<div className="col-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-end">
					<img className="img-fluid" src={scrum} alt="tecnoly-tableau" />
				</div>
			</div>
			<div className="row bannerLogos__content align-items-center mt-lg-5 mt-3">
				<div className="col-12 col-md-8 col-lg-6 d-flex align-items-center ">
					<p>
						Tenemos asociaciones sólidas con las principales empresas
						tecnológicas del mundo.
					</p>
				</div>
				<div className="col-12 col-md-4 col-lg-6 d-flex align-items-center justify-content-md-end justify-content-lg-end">
					<Link to="/servicios" className="button-lg">
						Mas información
					</Link>
				</div>
			</div>
		</div>
	);
};
