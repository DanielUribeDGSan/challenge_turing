import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

function TuringApp() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	);
}

export default TuringApp;
