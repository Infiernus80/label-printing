import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Custom_Button } from '../../../components/Custom_Button/Custom_Button';

export const Etiquetas = () => {
	return (
		<>
			<div
				style={{
					height: '70vh',
					background: 'white',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					borderRadius: '8px',
					padding: 30,
				}}
			>
				<Row>
					<Col md={2}>
						<h3>Datos del cliente</h3>
					</Col>
					<Col>
						<Form.Control placeholder='Buscar cliente' />
					</Col>
				</Row>

				<hr style={{ height: 3, background: 'black' }} />

				<Row className='d-flex justify-content-between'>
					<Col>
						<h5>Etiqueta</h5>
						<Form>
							<Row>
								<Col md={6}>
									<Form.Group className='mb-2'>
										<Form.Label>
											Nombre de la empresa
										</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Producto</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Lote</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Peso bruto</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
								</Col>
								<Col md={6}>
									<Form.Group className='mb-2'>
										<Form.Label>Artículo</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Peso neto</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Operador</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
									<Form.Group className='mb-2'>
										<Form.Label>Fecha</Form.Label>
										<Form.Control
											type='text'
											placeholder='example'
										/>
									</Form.Group>
								</Col>
							</Row>
						</Form>
					</Col>

					<Col md={4}>
						<Form.Group className='mb-2'>
							<Row>
								<Col className='d-flex justify-content-end align-items-center'>
									<Form.Label className='text-start'>
										Cantidad
									</Form.Label>
								</Col>
								<Col sm={8}>
									<Form.Control
										type='number'
										placeholder='Cantidad de etiquetas'
										style={{ textAlign: 'left' }}
									/>
								</Col>
							</Row>
						</Form.Group>

						<Card className='p-3 shadow-sm'>
							<Card.Body>
								<div className='d-flex justify-content-between'>
									<strong>FLEXIMATRE SA DE CV.</strong>
									<img
										src='https://via.placeholder.com/40'
										alt='QR Code'
									/>
								</div>
								<p className='mb-1'>
									<strong>Cliente:</strong> SANCHEZ Y MARTIN
								</p>
								<p className='mb-1'>
									<strong>Producto:</strong> 48 &nbsp;&nbsp;
									<strong>Artículo:</strong> BOBINA BOPP
								</p>
								<p className='mb-1'>
									<strong>Peso neto:</strong> 1.85 Kg
									&nbsp;&nbsp;
									<strong>Peso bruto:</strong> 2.85 Kg
								</p>
								<p className='mb-1'>
									<strong>Lote:</strong> 00001
								</p>
								<p className='mb-1'>
									<strong>Operador:</strong> Pablo Sandoval
									Vera - 01 de enero del 25
								</p>
								<p className='small text-muted'>
									Luis Enrique Williams #702, Zapopan Jalisco,
									C.P. 45150
								</p>
							</Card.Body>
						</Card>

						<Button className='mt-3 w-100' variant='primary'>
							Crear etiquetas
						</Button>
					</Col>
				</Row>
			</div>
		</>
	);
};
