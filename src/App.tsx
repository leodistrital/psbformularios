import { RenderRoutes } from "./router";
import { Footer } from "./componentes/global/Footer";
import { useAppStore } from "./stores/app.store";
import { Login } from './pages/formulario/Login';
import { Header } from './componentes/formulario/global/Header';


function App() {
	const session = useAppStore((state) => state.login);
	// console.log(session);
	return (
		<>
			{session ? (
				<>  
					<Header />
					<RenderRoutes />
					<Footer />
				</>
			) : (
				<Login />
			)}
		</>
	);
}

export default App;
