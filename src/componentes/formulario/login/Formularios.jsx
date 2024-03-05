import { Registro } from "./Registro";
import { Login } from "./Login";

export const Formularios = () => {
	const Tabla = "registro_usuario";

	return (
		<>
			<div className='gContent maxW contLogin'>
				<div className='intro'>
					<p>
						<strong>
							ANTES DE INICIAR LA INSCRIPCIÓN DE TRABAJOS, LE
							RECOMENDAMOS TENER DISPONIBLE LA SIGUIENTE
							INFORMACIÓN:
						</strong>
					</p>
					<ul>
						<li>
							Número de documento de identidad y datos de contacto
							de los participantes
						</li>
						<li>
							Certificado de publicación / emisión del trabajo
							<a href='docs/Formato_Certificado_publicacion2023.docx'>
								<strong>
									<em className='txtLora'>
										(Descargar modelo)
									</em>
								</strong>
							</a>
						</li>
						<li>
							Trabajo que concursa
							<a
								href='docs/PNPSB_Especificaciones_2023.pdf'
								target='_blank'>
								<strong>
									<em className='txtLora'>
										(Consultar especificaciones)
									</em>
								</strong>
							</a>
						</li>
					</ul>
					<p className='infoLogin'>
						<strong>
							ES NECESARIO REGISTRARSE PARA LA EDICIÓN 49 DEL
							PREMIO, AUNQUE
							<br /> HAYA POSTULADO TRABAJOS EN AÑOS ANTERIORES O
							ESTA SEA SU PRIMERA POSTULACIÓN
						</strong>
						<br />
						<br />
						<strong style={{ color: "#331839", fontWeight: 900 }}>
							Con un usuario usted puede inscribir la cantidad de
							trabajos que requiera. Debe tener en cuenta que cada
							participante sólo puede estar inscrito en un trabajo
							individual y uno colectivo
						</strong>
					</p>
				</div>
				<div className='contFLogin'>
					{/*Registro*/}
					<Login Tabla={Tabla} />
					{/*End Registro*/}
					{/*Login*/}
					<Registro Tabla={Tabla} />
					{/*End Login*/}
				</div>
			</div>
		</>
	);
};
