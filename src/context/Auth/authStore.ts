import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// const API_URL = 'http://localhost:3000/auth';

interface AuthState {
	user: string | null;
	isAuthenticated: boolean;
	login: (username: string, password: string) => Promise<boolean>;
	logout: () => void;
	checkAuth: () => Promise<void>;
}

const AuthContext: StateCreator<AuthState> = set => ({
	user: null,
	isAuthenticated: false,

	login: async (username: string, password: string) => {
		try {
			// 🔹 Simulación de backend con NestJS
			// Cuando esté listo, solo cambia `mockLogin` por `axios.post(API_URL + "/login", { username, password }, { withCredentials: true })`
			const response = await mockLogin(username, password);

			if (response.success) {
				set({ user: response.user, isAuthenticated: true });
				return true;
			}
			return false;
		} catch (error) {
			console.error('Error en login', error);
			return false;
		}
	},
	logout: () => {
		// 🔹 Aquí, cuando el backend esté listo, llamaremos a `axios.post(API_URL + "/logout", {}, { withCredentials: true })`
		set({ user: null, isAuthenticated: false });
	},

	checkAuth: async () => {
		try {
			// 🔹 Aquí, cuando el backend esté listo, llamaremos a `axios.get(API_URL + "/me", { withCredentials: true })`
			const response = await mockCheckAuth();
			if (response.success) {
				set({ user: response.user, isAuthenticated: true });
			}
		} catch (error) {
			console.error('No autenticado', error);
			set({ user: null, isAuthenticated: false });
		}
	},
});

export const useAuthContext = create<AuthState>()(
	persist(AuthContext, {
		name: 'auth-storage',
		storage: createJSONStorage(() => sessionStorage),
	}),
);

// 🔹 Simulación de backend (esto se eliminará cuando NestJS esté listo)
const mockLogin = async (username: string, password: string) => {
	return new Promise<{ success: boolean; user?: string }>(resolve => {
		setTimeout(() => {
			if (username === 'admin' && password === 'admin') {
				resolve({ success: true, user: username });
			} else {
				resolve({ success: false });
			}
		}, 1000);
	});
};

const mockCheckAuth = async () => {
	return new Promise<{ success: boolean; user?: string }>(resolve => {
		setTimeout(() => {
			resolve({ success: false });
		}, 500);
	});
};
