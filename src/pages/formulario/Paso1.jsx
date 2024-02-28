import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";
import { useAppStore } from "../../stores/app.store";
import { useNavigate } from "react-router-dom";

export const Paso1 = () => {
	const navigate = useNavigate();

	const settipoTrabajo = useAppStore((state) => state.settipoTrabajo);

	const setTrabajo = (data) => {
		// console.log("llego", data);
		settipoTrabajo(data);
		navigate("/paso2");
	};

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
										CADA PARTICIPANTE SÓLO PUEDE ESTAR
										INSCRITO EN UN TRABAJO INDIVIDUAL Y UNO
										COLECTIVO
									</strong>{" "}
									<br />
									<br />
									<span className='advertencia2022'>
										<b>
											Elija el tipo de trabajo que quiere
											inscribir:
										</b>
									</span>
								</p>
							</div>
						</div>
						<div className='contTyW gCol col2'>
							<div>
								<p>
									<a
										onClick={() => setTrabajo(1)}
										className='gBtn w100 txtUp btnStep'>
										<span>Individual</span>
									</a>
								</p>
								<p>
									<strong>RECUERDE QUE:</strong> <br />
									Cada participante sólo puede hacer parte de
									un trabajo individual.
								</p>
							</div>
							<div>
								<p>
									<a
										onClick={() => setTrabajo(2)}
										className='gBtn w100 txtUp btnStep'>
										<span>Colectivo</span>
									</a>
								</p>
								<p>
									<strong>RECUERDE QUE:</strong> <br />
									Cada participante sólo puede hacer parte de
									un trabajo colectivo.
									<br />
									<span>
										Deben inscribirse mínimo dos (2)
										participantes. El monto del premio se
										repartirá en partes iguales entre todos
										los participantes inscritos.
									</span>
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
