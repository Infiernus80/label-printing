import { Roles_App } from './Roles_App';

export interface Tab_Config_Interface {
	name?: string;
	children: JSX.Element;
	slug?: string;
	roles: string[];
	fun_name: (rol_usuario: Roles_App, params?: Params_Tabs) => string;
}

export interface Params_Tabs {
	param_name: string | null;
	value?: string | undefined | null;
	query_param: IterableIterator<[string, string]>;
}
