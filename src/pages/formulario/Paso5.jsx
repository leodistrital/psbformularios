import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";

export const Paso5 = () => {
	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
				<HeaderPaso />
					{/*End Pasos*/}{" "}
					<div className='contSec'>
						<div className='contLAuthor'>
							{/*Listado autores*/}
							<div className='listAuthor'>
								<p>
									En los trabajos colectivos deben quedar
									inscritos todos sus participantes; en caso
									contrario, el trabajo no será considerado
									por el jurado.
									<br /> <br />
									Cada participante debe ser inscrito
									diligenciando sus datos personales en las
									plantillas diseñadas para ello en el
									formulario de inscripción. Los participantes
									inscritos serán contrastados con los
									registrados en el certificado de publicación
									o emisión y con el contenido del trabajo.
								</p>
								<article className='itemAuthor'>
									<h2>PARTICIPANTE: (Sin nombre) </h2>
									<ul>
										<li>
											<a
												href='paso-5-2.php?tautor=1$$-1$$-qm4nNEHfJnXedoXG3C6fwm&trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
												className='gBtn w100 edit'>
												<span>Editar</span>
											</a>
										</li>
										<li>
											<a
												href='#'
												data-pv='1$$-1$$-qm4nNEHfJnXedoXG3C6fwm'
												className='gBtn w100 delete btnEliAutor'>
												<span>Eliminar</span>
											</a>
										</li>
									</ul>
								</article>
							</div>
							{/*End Listado autores*/}
							<a
								href='paso-5-2.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
								className='gBtn w2 txtUp'>
								<span>Agregar participante</span>
							</a>
							<div className='termAuthor'>
								<a
									href='panel.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
									className='gBtn w2 txtUp '>
									<span>Continuar</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
