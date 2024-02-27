import { create } from "zustand";

interface AppState {
	login: boolean;
	mail: string;
	token: string;
	perfil: number;
	isloading: boolean;
	logout: () => void;
	iniciar: (mail: string, token: string) => void;
	toogleLoading: (estado: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
	login: false,
	mail: "leo@leo",
	token: "",
	perfil: 0,
	isloading: false,
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
}));
