import './index.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import imagen from '../../assets/tu-logo-aqui.png';
import { FormLogin } from './Components/FormLogin';

export const LoginPage = () => {
	return (
		<Container
			fluid
			className='d-flex align-items-center justify-content-start vh-100 m-0 p-0'
		>
			<Row className='w-100'>
				<Col md={8} className='d-flex contenido_form'>
					<Row as={Col} className='shadow rounded'>
						<Col
							as={Row}
							className='d-flex justify-content-center align-items-center'
						>
							<Image src={imagen} height={768} />
						</Col>
						<Col as={Row} className='d-flex justify-content-center'>
							<FormLogin />
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};
