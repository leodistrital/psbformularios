import { useEffect } from "react";
import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";
import { useAppStore } from "../../stores/app.store";
import { useNavigate } from "react-router-dom";

export const Paso3 = () => {
	const navigate = useNavigate();

	const setformato = useAppStore((state) => state.setformato);
	const categoria = useAppStore((state) => state.inscripcion.categoria);

	const setTrabajo = (data) => {
		// console.log("llego", data);
		setformato(data);
		navigate("/paso4");
	};

	useEffect(() => {
		if (categoria === 0) {
			console.log("error");
			// navigate("/panel");
		}
	}, []);

	useEffect(() => {
		if (categoria == 15) {
			setformato(15);
			console.log("entro");
			navigate("/paso4");
		}

		if (categoria == 6) {
			setformato(103);
			console.log("entro");
			navigate("/paso4");
		}
		console.log("por el efec");
	}, []);

	console.log(categoria);

	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
					<HeaderPaso />
					<div className='contSec'>
						<div className='titleIntro h2'>
							<div className='vAlign'>
								<p>
									<strong>
										EN TODOS LOS CASOS SE RECIBEN CONTENIDOS
										DE MEDIOS TRADICIONALES O DIGITALES
									</strong>
									<br />
									<br />
									<span className='advertencia2022'>
										<b>
											Seleccione el formato en el que fue
											publicado o emitido el trabajo:
										</b>
									</span>
								</p>
							</div>
						</div>
						{/*Listado soporte*/}
						<div className='listCate'>
							<ul>
								{(categoria == 1 ||
									categoria == 2 ||
									categoria == 3 ||
									categoria == 4 ||
									categoria == 6 ||
									categoria == 7 ||
									categoria == 8 ||
									categoria == 9 ||
									categoria == 14 ||
									categoria == 15 ||
									categoria == 21 ||
									categoria == 22 ||
									categoria == 23) && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(100)}
												className='gBtn w100 txtUp btnStep'>
												<span>TEXTO</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												En trabajos impresos debe
												presentarse, por cada entrega,
												la imagen del trabajo como fue
												publicado en formato JPG o PDF,
												en donde se reconozcan el medio,
												la fecha de publicación y el
												texto completo (en caso de no
												contar con el archivo digital se
												pueden escanear, en un solo
												archivo, las páginas que
												contienen el trabajo). En
												trabajos digitales, por cada
												entrega debe presentarse la
												dirección URL de la publicación,
												en la que se pueda identificar
												la fecha de publicación del
												trabajo.
											</p>
										</div>
									</li>
								)}

								{(categoria == 1 ||
									categoria == 2 ||
									categoria == 3 ||
									categoria == 4 ||
									categoria == 6 ||
									categoria == 7 ||
									categoria == 8 ||
									categoria == 9 ||
									categoria == 14 ||
									categoria == 15 ||
									categoria == 21 ||
									categoria == 22 ||
									categoria == 23) && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(1)}
												className='gBtn w100 txtUp btnStep'>
												<span>AUDIO</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												Por cada entrega debe
												presentarse la dirección URL del
												medio o un enlace de Soundcloud,
												u otras plataformas de audio,
												con el archivo que contenga el
												trabajo como fue emitido.{" "}
												<span
													style={{
														textDecoration:
															"underline",
													}}>
													Se debe eliminar todo
													contenido comercial y, en
													general, cualquier
													información que no
													corresponda al trabajo que
													concursa.
												</span>
											</p>
										</div>
									</li>
								)}

								{(categoria == 1 ||
									categoria == 2 ||
									categoria == 3 ||
									categoria == 4 ||
									categoria == 6 ||
									categoria == 7 ||
									categoria == 8 ||
									categoria == 9 ||
									categoria == 14 ||
									categoria == 15 ||
									categoria == 21 ||
									categoria == 22 ||
									categoria == 23) && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(2)}
												className='gBtn w100 txtUp btnStep'>
												<span>VIDEO</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												Por cada entrega debe
												presentarse la dirección URL del
												medio o un enlace de Youtube, u
												otras plataformas de video, con
												el archivo que contenga el
												trabajo como fue emitido.
												<span
													style={{
														textDecoration:
															"underline",
													}}>
													Se debe eliminar todo
													contenido comercial y, en
													general, cualquier
													información que no
													corresponda al trabajo que
													concursa.
												</span>
											</p>
										</div>
									</li>
								)}

								{(categoria == 18 || categoria == 5) && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(3)}
												className='gBtn w100 txtUp btnStep'>
												<span>IMPRESO</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												Debe presentarse el trabajo
												original en formato JPG, y la
												imagen de la publicación impresa
												en formato JPG o PDF; para el
												caso de publicación en medios
												digitales, la dirección URL de
												la publicación. En ambos casos
												debe poder identificarse la
												fecha de publicación del
												trabajo.
											</p>
										</div>
									</li>
								)}
								{(categoria == 18 || categoria == 5) && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(4)}
												className='gBtn w100 txtUp btnStep'>
												<span>DIGITAL</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												Debe presentarse el trabajo
												original en formato JPG, y la
												imagen de la publicación impresa
												en formato JPG o PDF; para el
												caso de publicación en medios
												digitales, la dirección URL de
												la publicación. En ambos casos
												debe poder identificarse la
												fecha de publicación del
												trabajo.
											</p>
										</div>
									</li>
								)}

								{categoria == 7 && (
									<li className='itemCate'>
										<div className='cLeft'>
											<a
												onClick={() => setTrabajo(15)}
												className='gBtn w100 txtUp btnStep'>
												<span>MULTIMEDIA</span>
											</a>
										</div>
										<div className='cRight'>
											<p>
												Debe presentarse la dirección
												URL de la pieza periodística en
												la que se encuentre todo el
												contenido del trabajo que
												concursa.
											</p>
										</div>
									</li>
								)}
							</ul>
						</div>
						{/*End Listado soporte*/}
					</div>
				</section>
			</div>
		</>
	);
};
