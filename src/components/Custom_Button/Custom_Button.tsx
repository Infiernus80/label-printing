import { Button } from 'react-bootstrap';
import './Custom_Button.css';
import { ButttonProps } from './Button_Interface';

export const Custom_Button = ({
	tipo = 'normal',
	value = '',
	Icon,
	setClasesButton = '',
	setClasesIcon = '',
	isWidth = false,
	...props
}: ButttonProps): JSX.Element => {
	const tipo_obj: Record<string, string> = {
		circular: 'circle',
		flotante: 'firstButton',
		normal: 'd-flex flex-row-reverse',
	};

	const tipo_m: Record<string, string> = {
		circular: 'd-flex justify-content-center',
		flotante: 'me-2',
		normal: ' mx-2 ',
	};
	const tipos = tipo_obj[tipo] || '';
	const margenes = tipo_m[tipo] || '';
	return (
		<Button
			className={`${setClasesButton} ${tipos} d-flex align-items-center ${
				isWidth ? 'w-100 justify-content-center' : ''
			}`}
			{...props}
		>
			{Icon && (
				<Icon
					color='white'
					size={20}
					className={`${setClasesIcon} ${margenes}`}
				/>
			)}
			{value}
		</Button>
	);
};
