import { Footer } from '../../componentes/global/Footer';
import { Formularios } from '../../componentes/formulario/login/Formularios';
import { Header } from '../../componentes/formulario/global/Header';



export const Login = () => {
	return (
		<>
			<div id='mainWrapper' className=''>
				<Header />
				<Formularios />
			</div>
			<Footer />
		</>
	);
};
