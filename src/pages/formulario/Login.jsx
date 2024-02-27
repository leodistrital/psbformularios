
import { Intro } from '../../componentes/formulario/login/Intro';
import { Footer } from '../../componentes/global/Footer';
import { Formularios } from '../../componentes/formulario/login/Formularios';
import { Header } from '../../componentes/formulario/global/Header';


export const Login = () => {
	return (
		<>
			<div id='mainWrapper' className=''>
				<Header />
				<Intro />
				<Formularios />
			</div>
			<Footer />
		</>
	);
};
