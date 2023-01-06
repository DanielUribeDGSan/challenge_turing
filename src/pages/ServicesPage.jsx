import React from 'react';
import { BannerImage } from '../components/BannerImage';
import { ColorLine } from '../components/ColorLine';
import { SectionGrid2 } from '../components/sections/SectionGrid2';
import { SectionGrid2Form } from '../components/sections/SectionGrid2Form';
export const ServicesPage = () => {
	const bannerImageTitle = 'Servicios';
	const bannerImageDescription =
		'Tenemos una gran gama de soluciones para llevar al máximo el nivel tu compañia';
	return (
		<main>
			<BannerImage
				title={bannerImageTitle}
				description={bannerImageDescription}
			/>
			<ColorLine />
			<SectionGrid2 className="pt-5 pb-5" />
			<SectionGrid2Form className="pt-5" />
		</main>
	);
};
