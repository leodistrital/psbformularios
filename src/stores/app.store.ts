import { create } from "zustand";

interface AppState {
	login: boolean;
	mail: string;
	token: string;
	userid: number;
	isloading: boolean;
	inscripcion: {
		id: number;
		tipoTrabajo: number;
		categoria: number;
		formato: number;
		usuario: number;
		trabajo: {
			titulo: string;
			entregas: [];
		};
	};

	logout: () => void;
	iniciar: (mail: string, token: string, userid: number) => void;
	toogleLoading: (estado: boolean) => void;
	settipoTrabajo: (value: number) => void;
	setcategoria: (value: number) => void;
	setformato: (value: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
	login: false,
	mail: "",
	token: "",
	userid: 0,
	isloading: false,
	leo: 0,
	inscripcion: {
		id: 60094,
		tipoTrabajo: 0,
		categoria: 0,
		formato: 0,
		usuario: 0,
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
			userid: 0,
		})),

	iniciar: (mail: string, token: string, userid: number) =>
		set((state) => ({ login: true, mail: mail, token: token, userid: userid , inscripcion:{...state.inscripcion, usuario:userid }    })),

	toogleLoading: (estado) => {
		set(() => ({
			isloading: estado,
		}));
	},

	settipoTrabajo: (value: number) => {
		set((state) => ({
			inscripcion: {
				...state.inscripcion,
				tipoTrabajo: value,
			},
		}));
		// console.log(value, useAppStore.getState().inscripcion);
	},
	// set((state) => ({
	// 	inscripcion: {
	// 		...state.inscripcion,
	// 		tipoTrabajo: value,
	// 	},
	// })),

	// settipoTrabajo: (value: number) =>
	// set((state) => ({
	// 	inscripcion: {
	// 		...state.inscripcion,
	// 		tipoTrabajo: value,
	// 	},
	// })),

	setcategoria: (value: number) =>
		set((state) => ({
			inscripcion: {
				...state.inscripcion,
				categoria: value,
			},
		})),

	setformato: (value: number) =>
		set((state) => ({
			inscripcion: {
				...state.inscripcion,
				formato: value,
			},
		})),

	setresettrabajo: () =>
		set((state) => ({
			inscripcion: {
				...state.inscripcion,
				id: 0,
				tipoTrabajo: 0,
				categoria: 0,
				formato: 0,
			},
		})),

	settrabajo: (value: number) =>
		set((state) => ({
			inscripcion: {
				...state.inscripcion,
				id: value,
			},
		})),
}));
