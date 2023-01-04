import React from 'react';
import './ColorLine.css';
import ColorBarDefault from '../assets/utils/color-bar-w-blue-3010x50.png';
export const ColorLine = () => {
	return (
		<div className="color__line">
			<picture>
				<source media="(max-width: 400px)" src={ColorBarDefault} />
				<source media="(max-width: 768px)" src={ColorBarDefault} />
				<img alt="Bar of colors" src={ColorBarDefault} />
			</picture>
		</div>
	);
};
