import React from 'react';
import './ColorLine.css';
import ColorBarDefault from '../assets/utils/color-bar-w-blue-3010x50.png';
export const ColorLine = () => {
	return (
		<div className="color__line">
			<picture>
				<source media="(max-width: 400px)" srcset={ColorBarDefault} />
				<source media="(max-width: 768px)" srcset={ColorBarDefault} />
				<img
					class="m-color-bar__bg h-abs-bg b-lazy b-loaded is-b-loaded"
					alt="Bar of colors"
					src={ColorBarDefault}
				/>
			</picture>
		</div>
	);
};
