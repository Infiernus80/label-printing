import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../features/Auth/LoginPage';
import { Private_Route } from './Private_Route';
import { MenuRouter } from './MenuRouter';
import { PublicRoute } from './PublicRoute';

const AppRouter = () => {
	return (
		<Routes>
			<Route
				path='/*'
				element={
					<Private_Route>
						<MenuRouter />
					</Private_Route>
				}
			/>

			<Route
				path='/login'
				element={
					<PublicRoute>
						<LoginPage />
					</PublicRoute>
				}
			/>
		</Routes>
	);
};

export default AppRouter;
