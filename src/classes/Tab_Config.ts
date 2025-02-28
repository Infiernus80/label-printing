import {
	create_slug,
	Roles_App,
	Params_Tabs,
	Tab_Config_Interface,
} from '../types';

export class Tab_Config {
	public param_name: string;
	public options: Tab_Config_Interface[];
	public readonly slug: string;

	constructor(options: Tab_Config_Interface[], param_name = 'tab') {
		this.param_name = param_name;
		this.options = options;
		this.slug = create_slug(param_name);
	}

	public validate_roles(rol_usuario: string, roles_options: string[]) {
		return roles_options.includes(rol_usuario);
	}

	public set_names(rol_usuario: Roles_App, params?: Params_Tabs): boolean {
		this.options = this.options.map(option => {
			const name_final = option.fun_name(rol_usuario, params);
			return {
				...option,
				name: name_final,
				slug: create_slug(name_final),
			};
		});

		return true;
	}
}
