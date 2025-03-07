import { ButtonProps } from 'react-bootstrap';

export interface ButttonProps extends ButtonProps {
	tipo?: 'normal' | 'circular' | 'flotante';
	value?: string;
	setClasesButton?: string;
	setClasesIcon?: string;
	isWidth?:boolean,
	Icon?: React.ComponentType<{
		color?: string;
		size?: number;
		className?: string;
	}>;
}
