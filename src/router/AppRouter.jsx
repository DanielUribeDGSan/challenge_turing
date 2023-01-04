import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { Navbar } from '../components/Navbar';

export const AppRouter = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
