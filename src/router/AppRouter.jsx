import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { Navbar } from '../components/Navbar';
import { ServicesPage } from '../pages/ServicesPage';
import { DataPage } from '../pages/DataPage';

export const AppRouter = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/servicios" element={<ServicesPage />} />
				<Route path="/data" element={<DataPage />} />

				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
};
