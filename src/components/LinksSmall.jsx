import React from 'react';
import { Link } from 'react-router-dom';

export const LinksSmall = ({ path, text }) => {
	return (
		<Link to={path} className="link-small">
			{text}
		</Link>
	);
};
