import { Intro } from "../login/Intro";
import { useAppStore } from "../../../stores/app.store";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const logout = useAppStore((state) => state.logout);
	const { login: session, mail } = useAppStore((state) => state);
		const navigate = useNavigate();

	const salir = () => {
		logout();
	};

	return (
		<>
			<header className='pageHeader'>
				<div className='maxW'>
					<h1 className='logoPage'>
						<a href='#' onClick={()=> navigate("/panel")}>
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
								<p className='user'>
									<strong className='des_login'>
										{mail}
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
