import { create } from "zustand";

interface AppState {
	login: boolean;
	mail: string;
	token: string;
	perfil: number;
	isloading: boolean;
	inscripcion: {
		id: string;
		tipoTrabajo: number;
		categoria: number;
		formato: number;
		trabajo: {
			titulo: string;
			entregas: [];
		};
	};

	logout: () => void;
	iniciar: (mail: string, token: string) => void;
	toogleLoading: (estado: boolean) => void;
	settipoTrabajo: (value: number, ) => void;
	setcategoria: (value: number, ) => void;
	setformato: (value: number, ) => void;
}

export const useAppStore = create<AppState>((set) => ({
	login: true,
	mail: "",
	token: "",
	perfil: 0,
	isloading: false,
	leo: 0,
	inscripcion: {
		id: "",
		tipoTrabajo: 0,
		categoria: 0,
		formato: 0,
		trabajo: {
			titulo: "",
			entregas: [],
		},
	},
	logout: () =>
		set(() => ({
			login: false,
			mail: "",
			token: "",
		})),

	iniciar: (mail: string, token: string) =>
		set(() => ({ login: true, mail: mail, token: token })),

	toogleLoading: (estado) => {
		set(() => ({
			isloading: estado,
		}));
	},

	settipoTrabajo: (value: number, ) => set(  state => ({
		inscripcion: {
			...state.inscripcion,
			tipoTrabajo: value,
		}
	})  ), 

	setcategoria: (value: number, ) => set(  state => ({
		inscripcion: {
			...state.inscripcion,
			categoria: value,
		}
	})  ), 

	setformato: (value: number, ) => set(  state => ({
		inscripcion: {
			...state.inscripcion,
			formato: value,
		}
	})  ), 


}));
