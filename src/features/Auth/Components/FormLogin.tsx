import { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { useAuthContext } from '../../../context';
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const login = useAuthContext(state => state.login);
	const isAuthenticated = useAuthContext(state => state.isAuthenticated);
	const checkAuth = useAuthContext(state => state.checkAuth);

	useEffect(() => {
		checkAuth();
		if (isAuthenticated) navigate('/dashboard');
	}, [isAuthenticated, checkAuth]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('username', username);
		const success = await login(username, password);
		if (!success) {
			setError('Usuario o contraseña incorrectos');
			return;
		}
		console.log('success', success);
		setError('');
		navigate('/dashboard');
	};

	return (
		<>
			<Card className='w-75 m-auto py-5 shadow rounded '>
				<Card.Body className='p-5 mt-5'>
					<Row>
						<Col className='d-flex justify-content-center'>
							<h1>Inicio de sesión</h1>
						</Col>
					</Row>
					<Row>
						<Form onSubmit={handleSubmit}>
							<Col className='mt-4'>
								<Form.Label>Correo</Form.Label>
								<Form.Control
									type='text'
									placeholder='Ingresa tu correo'
									value={username}
									onChange={e => setUsername(e.target.value)}
								/>
							</Col>
							<Col className='mt-4'>
								<Form.Label>Contraseña</Form.Label>
								<Form.Control
									type='password'
									placeholder='Ingresa tu contraseña'
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
							</Col>
							<Row className='d-flex justify-content-center mt-5'>
								{error && (
									<p className='text-danger'>{error}</p>
								)}
								<Col md={8}>
									<Button
										className='w-100'
										variant='dark'
										type='submit'
									>
										Iniciar sesión
									</Button>
								</Col>
							</Row>
							<Row className='d-flex justify-content-center mt-4'>
								<Col md={8}>
									<Button
										className='w-100 d-flex align-items-center justify-content-center'
										variant='outline-dark'
									>
										<FcGoogle className='me-2' size={24} />
										Iniciar sesión con Google
									</Button>
								</Col>
							</Row>
						</Form>
					</Row>
				</Card.Body>
			</Card>
		</>
	);
};
