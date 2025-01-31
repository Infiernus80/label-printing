import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context';
import { PrivateRouteProps } from './Routes_Interface';

export const Private_Route = ({ children }: PrivateRouteProps): JSX.Element => {
	const isAuth = useAuthContext(state => state.isAuthenticated);

	return isAuth ? (children as JSX.Element) : <Navigate to='/login' />;
};
