import { Intro } from "../login/Intro";
import { useAppStore } from "../../../stores/app.store";

export const Header = () => {
	const { inscripcion: inscripcionData ,  } = useAppStore((state) => state);

	const logout = useAppStore((state) => state.logout);
	const session = useAppStore((state) => state.login);

	const { login ,mail , token, userid } = useAppStore((state) => state);

	const salir = () => {
		logout();
	};

	return (
		<>
			<header className='pageHeader'>
				<div className='maxW'>
					<h1 className='logoPage'>
						<a href='panel'>
							<span className='gHidden'>
								Premio Nacional de Periodismo Simón Bolívar
							</span>
							<img
								src='http://mottif.tv/psbformulario/images/site/logo-psb.svg'
								alt='Premio Nacional de Periodismo Simón Bolívar'
							/>
						</a>
					</h1>
					<button
						type='button'
						id='btnMMenu'
						className='rbtn btnMMenu'>
						<span className='box'>
							<span className='inner' />
						</span>
					</button>
					{/*Content Main menu*/}
					<div className='contMMenu'>
						{session && (
							<div className='vAlign'>
								{/* <h2>INSCRIPCIÓN DE TRABAJOS</h2> */}

								<pre>
									{JSON.stringify(inscripcionData, null, 2)}
								</pre>
								<pre>
									{JSON.stringify({
										login ,mail , token, userid
									}, null, 2)}
								</pre>
								<p className='user'>
									<strong className='des_login'>
										leonardo.cortes@mottif.com
									</strong>
									<a
										href='#'
										onClick={() => {
											salir();
										}}
										className='gBtn txtUp'>
										<span>Cerrar sesión</span>
									</a>
								</p>
							</div>
						)}
					</div>
					{/*End Content Main menu*/}
				</div>
			</header>
			<Intro />
		</>
	);
};
