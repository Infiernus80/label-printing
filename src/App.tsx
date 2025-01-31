import { Outlet } from 'react-router-dom';
import { MenuComponents } from './components/Menu/MenuComponents';

export const App = () => {
	return (
		<>
			<MenuComponents />
			<Outlet />
		</>
	);
};
