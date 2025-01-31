import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context';

const ProtectedRoute = () => {
	const isAuthenticated = useAuthContext(state => state.isAuthenticated);

	return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
