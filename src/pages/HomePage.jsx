import React from 'react';
import { BannerVideo } from '../components/BannerVideo';
import { ColorLine } from '../components/ColorLine';
import { Link } from 'react-router-dom';
import { SliderWorks } from '../components/SliderWorks';
import { LinksSmall } from '../components/LinksSmall';
import { BannerLogos } from '../components/BannerLogos';

export const HomePage = () => {
	return (
		<div>
			<BannerVideo
				title="Bienvenido"
				sub_title="Hacemos los datos fáciles de usar"
				question="¿Qué es una consultoría ferozmente humana?"
			/>
			<ColorLine />
			<section className="container pt-5 pb-5">
				<LinksSmall path="/servicios" text="QUE REALIZAMOS" />
				<h1 className="title-lg">
					Contribuimos con su empresa para mejorar la toma de decisiones a
					través de sus datos.
				</h1>
				<Link to="/servicios" className="button-lg mt-4">
					Mas información
				</Link>
			</section>
			{/* <section className="container pt-5 pb-5">
				<SliderWorks />
			</section> */}
			<section className="bg-gray pt-5 pb-5">
				<div className="container">
					<LinksSmall path="/" text="TECNOLOGÍAS QUE UTILIZAMOS" />
					<BannerLogos className="mt-2 mb-2" />
				</div>
			</section>
		</div>
	);
};
