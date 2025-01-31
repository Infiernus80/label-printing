import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context';
import { PrivateRouteProps } from './Routes_Interface';

export const PublicRoute = ({ children }: PrivateRouteProps): JSX.Element => {
	const isAuthentication = useAuthContext(state => state.isAuthenticated);

	if (!isAuthentication) return children as JSX.Element;

	return <Navigate to='/dashboard' />;
};
