import { Col, Form, Row } from 'react-bootstrap';
import { Custom_Button } from '../../../components/Custom_Button/Custom_Button';

export const Clientes = () => {
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
				<Row className='mt-3'>
					<Col>
						<Form.Label>Nombre del cliente</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col>
						<Form.Label>Nombre de la empresa</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
				</Row>

				<hr style={{ height: 3, background: 'black' }} />

				<Row className='mt-3'>
					<h3>Servicio</h3>
					<Col>
						<Form.Label>Producto</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col>
						<Form.Label>Lote</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col>
						<Form.Label>Articulo</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
				</Row>
				<Row className='mt-3'>
					<Col md={4}>
						<Form.Label>Peso neto</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col md={4}>
						<Form.Label>Peso bruto</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
				</Row>

				<hr style={{ height: 3, background: 'black' }} />

				<Row className='mt-3'>
					<Col md={4}>
						<Form.Label>Operador</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col md={4}>
						<Form.Label>Fecha</Form.Label>
						<Form.Control placeholder='example' />
					</Col>
					<Col md={4} className='mt-4'>
						<Form.Group as={Row}>
							<Col md={6}>
								<Custom_Button
									value='Guardar'
									isWidth
									variant='outline-dark'
								/>
							</Col>
							<Col md={6}>
								<Custom_Button
									value='Crear etiquetas'
									isWidth
									variant='outline-dark'
								/>
							</Col>
						</Form.Group>
					</Col>
				</Row>
			</div>
		</>
	);
};
