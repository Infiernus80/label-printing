import { Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Dashboard } from '../features/dashboard/Dashboard';

export const MenuRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
		</Routes>
	);
};
