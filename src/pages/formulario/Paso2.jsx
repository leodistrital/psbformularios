import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";
import { useAppStore } from "../../stores/app.store";
import { useNavigate } from "react-router-dom";
import { categoriasData } from "../../stores/categorias";
import { useEffect } from "react";

export const Paso2 = () => {
	const navigate = useNavigate();

	const setcategoria = useAppStore((state) => state.setcategoria);
	const tipoTrabajo = useAppStore((state) => state.inscripcion.tipoTrabajo);

	let datacategorias = [];

	if (tipoTrabajo === 1) {
		datacategorias = categoriasData;
	}
	if (tipoTrabajo === 2) {
		datacategorias = categoriasData.filter(
			(item) => item.relacion_cat === `1`
		);
	}

	const setTrabajo = (data) => {
		// console.log("llego", data);
		setcategoria(data);
		navigate("/paso3");
	};

	useEffect(() => {
		if (tipoTrabajo === 0) {
			console.log("error");
			navigate("/panel");
		}
	}, []);

	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
					<HeaderPaso />
					<div className='contSec'>
						<div className='titleIntro'>
							<div className='vAlign'>
								<p>
									<span className='advertencia2022'>
										<b>
											Elija la categoría del trabajo que
											quiere inscribir:
										</b>
									</span>
								</p>
							</div>
						</div>
						{/*Listado categorias*/}
						<div className='listCate'>
							<ul>
								{datacategorias.map((item, index) => {
									return (
										<li key={index} className='itemCate  '>
											<div className='cLeft'>
												<a
													onClick={() =>
														setTrabajo(item.cod_cat)
													}
													className='gBtn w100 txtUp btnStep '>
													<span
														dangerouslySetInnerHTML={{
															__html:
																item.nom_cat,
														}}
													/>
													<span>{item.cod_cat}</span>
												</a>
											</div>
											<div className='cRight'>
												{/* {item.desc_cat} */}
												<div
													dangerouslySetInnerHTML={{
														__html: item.desc_cat,
													}}
												/>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						{/*End Listado categorias*/}
					</div>
				</section>
			</div>
		</>
	);
};
