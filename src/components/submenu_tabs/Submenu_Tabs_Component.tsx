import { Nav, Tab } from 'react-bootstrap';
import { Submenu_Tabs_Component_Props } from './Submenu_interfaces';
import './Submenu_Tabs_Style.css';
import { useSubmenu_component } from './use_tabs_component';
import { unique_id } from '../../utils';

export const Submenu_Tabs_Component = ({
	tabs,
}: Submenu_Tabs_Component_Props) => {
	const { active_tab, handle_select, user_rol, nombres_creados } =
		useSubmenu_component(tabs);

	if (!nombres_creados) return <></>;

	return (
		<Tab.Container activeKey={active_tab} onSelect={handle_select}>
			<div className='shadow noMargin background-container'>
				<Nav className='mx-4'>
					{tabs.options.some(tab => tab.name !== undefined) &&
						tabs.options.map(
							tab =>
								tabs.validate_roles(user_rol!, tab.roles) && (
									<Nav.Item key={unique_id()}>
										<Nav.Link
											eventKey={tab.slug}
											className={`${
												active_tab === tab.slug &&
												'tabs-activate'
											} text-dark`}
										>
											{tab.name}
										</Nav.Link>
									</Nav.Item>
								),
						)}
				</Nav>
			</div>

			<Tab.Content className='mx-4 my-4'>
				{tabs.options.map(
					tab =>
						tabs.validate_roles(user_rol!, tab.roles) &&
						tab.slug === active_tab && (
							<Tab.Pane
								key={tab.slug + 'children'}
								eventKey={tab.slug}
							>
								{tab.children}
							</Tab.Pane>
						),
				)}
			</Tab.Content>
		</Tab.Container>
	);
};
