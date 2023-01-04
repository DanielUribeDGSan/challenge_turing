import React from 'react';
import { BannerVideo } from '../components/BannerVideo';
import { ColorLine } from '../components/ColorLine';

export const HomePage = () => {
	return (
		<div>
			<BannerVideo
				title="Bienvenido"
				sub_title="Hacemos los datos fáciles de usar"
				question="¿Qué es una consultoría ferozmente humana?"
			/>
			<ColorLine />
		</div>
	);
};
