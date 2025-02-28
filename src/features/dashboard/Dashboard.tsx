import { useAuthContext } from '../../context';
import { useNavigate } from 'react-router-dom';
import { Submenu_Tabs_Component } from '../../components/submenu_tabs/Submenu_Tabs_Component';
import { Roles_App, Tab_Config_Interface } from '../../types';
import { Tab_Config } from '../../classes/Tab_Config';

export const Dashboard = () => {
	const user = useAuthContext(state => state.user);
	const logout = useAuthContext(state => state.logout);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<div
			className=''
			style={{
				height: '90vh',
				width: '90vw',
				padding: 10,
				margin: 'auto',

				background: 'rgba(243, 244, 246, 0.5)',
			}}
		>
			<Submenu_Tabs_Component tabs={dashboard_tab} />
		</div>
	);
};

const Dashboard_tabs = (rol_usuario: Roles_App) => {
	let role_title_tab: { [key: string]: string };

	role_title_tab = {
		[Roles_App.ADMINISTRADOR]: 'Etiquetas',
		[Roles_App.USUARIO]: 'Etiquetas',
	};
	return role_title_tab[rol_usuario];
};

const Clientes_tabs = (rol_usuario: Roles_App) => {
	let role_title_tab: { [key: string]: string };

	role_title_tab = {
		[Roles_App.ADMINISTRADOR]: 'Clientes',
		[Roles_App.USUARIO]: 'Clientes',
	};
	return role_title_tab[rol_usuario];
};

const Tabs_Dashboard: Tab_Config_Interface[] = [
	{
		children: (
			<>
				{' '}
				<h1>HOLA</h1>
			</>
		),
		roles: ['ADMINISTRADOR'],
		fun_name: Dashboard_tabs,
	},
	{
		children: (
			<>
				{' '}
				<h1>HOLA</h1>
			</>
		),
		roles: ['ADMINISTRADOR'],
		fun_name: Clientes_tabs,
	},
];

export const dashboard_tab = new Tab_Config(Tabs_Dashboard, 'tab');
