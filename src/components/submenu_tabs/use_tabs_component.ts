import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Tab_Config } from '../../classes/Tab_Config';
import { Roles_App } from '../../types';

export const useSubmenu_component = (tabs: Tab_Config) => {
	const [params, set_params] = useSearchParams();

	//Descomentar esta linea y pasarla en el segundo efect
	const params_edit = useParams();
	const [active_tab, set_active_tab] = useState<string>(tabs.slug);
	//Eliminar esta linea y obtener el rol del estado global al iniciar sesion
	const user_rol = 'ADMINISTRADOR';
	const [nombres_creados, set_nombres_creados] = useState(false);

	useEffect(() => {
		const param_value = params.get(tabs.param_name);
		const selected_tab = param_value ? param_value : tabs.slug;
		set_active_tab(selected_tab);
	}, [params, tabs.param_name, tabs.slug]);

	useEffect(() => {
		if (!user_rol) return;

		set_nombres_creados(
			tabs.set_names(user_rol as Roles_App, {
				param_name: 'id',
				value: params_edit.id,
				query_param: params.entries(),
			}),
		);
	}, [user_rol, params_edit.id]);

	const handle_select = (selectedTab: string | null) => {
		if (selectedTab && selectedTab !== active_tab) {
			params.set(tabs.param_name, selectedTab);
			set_params(params.toString());
		}
	};

	return {
		active_tab,
		handle_select,
		user_rol,
		nombres_creados,
	};
};
