import React, { useEffect } from 'react';
import { useAuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export const Dashboard = () => {
	const user = useAuthContext(state => state.user);
	const isAuthenticated = useAuthContext(state => state.isAuthenticated);
	const logout = useAuthContext(state => state.logout);
	const checkAuth = useAuthContext(state => state.checkAuth);

	const navigate = useNavigate();

	useEffect(() => {
		checkAuth();
		if (!isAuthenticated) navigate('/');
	}, [isAuthenticated, checkAuth, navigate]);

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<Container>
			<h2>Bienvenido, {user}</h2>
			<p>Pagina Protegida</p>
			<Button variant='danger' onClick={handleLogout}>
				Cerrar sesion
			</Button>
		</Container>
	);
};
