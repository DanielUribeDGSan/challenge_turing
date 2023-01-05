import React from 'react';
import { BannerVideo } from '../components/BannerVideo';
import { ColorLine } from '../components/ColorLine';
import { Link } from 'react-router-dom';
import { LinksSmall } from '../components/LinksSmall';
import { BannerLogos } from '../components/BannerLogos';
import { SectionImagesCircle } from '../components/sections/SectionImagesCircle';

export const HomePage = () => {
	const bannerVideoTitle = 'Bienvenido';
	const bannerVideoSubTitle = 'Hacemos los datos fáciles de usar';
	const bannerVideoQuestion = '¿Qué es una consultoría ferozmente humana?';
	console.log(screen.width, screen.height);
	return (
		<main>
			<BannerVideo
				title={bannerVideoTitle}
				sub_title={bannerVideoSubTitle}
				question={bannerVideoQuestion}
			/>
			<ColorLine />
			<section className="container pt-5 pb-5">
				<LinksSmall path="/servicios" text="QUE REALIZAMOS" />
				<h1 className="title-lg">
					Contribuimos con su empresa para mejorar la toma de decisiones a
					través de sus datos.
				</h1>
				<Link
					to="/servicios"
					className="button-lg button-lg-primary-white mt-4"
				>
					Mas información
				</Link>
			</section>
			{/* <section className="container pt-5 pb-5">
				<SliderWorks />
			</section> */}
			<section className="bg-gray pt-5 pb-5">
				<div className="container">
					<article>
						<h1 className="title-sm">TECNOLOGÍAS QUE UTILIZAMOS</h1>
						<BannerLogos className="mt-2 mb-2" />
					</article>
				</div>
			</section>
			<SectionImagesCircle />
			<section className="bg-gray pt-5 pb-5">
				<div style={{ height: '4vh' }}></div>
			</section>
		</main>
	);
};
