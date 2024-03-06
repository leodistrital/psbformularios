import { useNavigate } from "react-router-dom";

export const HeaderPaso = () => {

	const navigate = useNavigate();
	const encabezados = [
		{
			paso: 1,
			titulo: "Tipo de trabajo",
			path: "/paso1",
		},

		{
			paso: 2,
			titulo: "CATEGORÍA",
			path: "/paso2",
		},
		{
			paso: 3,
			titulo: "FORMATO",
			path: "/paso3",
		},
		{
			paso: 4,
			titulo: "INFORMACIÓN SOBRE EL TRABAJO",
			path: "/paso4",
		},
		{
			paso: 5,
			titulo: "INFORMACIÓN SOBRE EL / LOS PARTICIPANTE(S)",
			path: "/paso5",
		},
		{
			paso: 5,
			titulo: "INFORMACIÓN SOBRE EL / LOS PARTICIPANTE(S",
			path: "/autor",
		},
	];

	return (
		<>
			<div className='titleSec'>
				{encabezados.map((encabezado, index) => {
					if (location.pathname === encabezado.path) {
						return (
							<h2 className='title' key={index}>
								{encabezado.titulo}
							</h2>
						);
					}
				})}
				{/*Btns direction*/}
				<ul className='contBtnDir'>
					<li>
						<a href='#' onClick={()=> navigate("/panel")} className='gBtn w100'>
							<span>RESUMEN INSCRIPCIÓN DE TRABAJOS</span>
						</a>
					</li>
				</ul>
				{/*End Btns direction*/}
			</div>
			{/*Pasos*/}
			<div className='contSteps'>
				<ul>
					<li>
						<strong>PASOS:</strong>
					</li>
					{encabezados.map((encabezado, index) => {
						return (
							<li key={index}>
								<span
									className={`icoStep ${
										location.pathname === encabezado.path
											? "active"
											: ""
									}`}>
									{encabezado.paso}
								</span>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
