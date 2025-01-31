import './Menu.css';
import Logo from '../../assets/tu-logo-aqui.png';
export const MenuComponents = () => {
	return (
		<div className='barra py-3 ' style={{ paddingInline: '100px' }}>
			<div className='d-flex bd-highlight justify-content-between'>
				<img src={Logo} width={80} height={80} />
				<h1 className='title'>FLEXIMATRE SA DE CV</h1>
				<img src={Logo} alt='' width={80} height={80} />
			</div>
		</div>
	);
};
