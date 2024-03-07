import { useEffect } from "react";
import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";
import { useAppStore } from "../../stores/app.store";
import { Conexion } from "../../service/conexion";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { UploadFile } from "../../componentes/global/UploadFile";

export const Paso4 = () => {

	const {id} = useAppStore((state) => state.inscripcion);
	const datatable = new Conexion ();
	const Tabla = "trabajos";

	const defaultValues = {
		id: "0",
		sinopsis_tra: "",
		titulo_tra: "",
		medios_tra: "",
		doc1_tra: "",
		entregas: [],
	};


	const { register , handleSubmit , reset, getValues } = useForm({defaultValues});
	
// console.log(id);

	//CARGA INICIAL
	useEffect (() => {

		if (id === 0) {
			console.log("error");
			Navigate ("/panel");
		}
		console.log(id);

		if (id > 0) {
			// toogleLoading(true);
			datatable.getItem(Tabla,id).then(({ data }) => {
				console.log(data);
				reset(data);

				// reset1(data);
				// console.log(getValues("sucursales").length);
				// toogleLoading(false);
			});
		} 
	}, []);

	//CREAR Y EDITAR
	const onSubmitpost = handleSubmit((data) => {
		console.log(data);
		// toogleLoading(true);
			// datatable
			// 	.getEditarItem(Tabla, data, id)
			// 	.then(({ resp }) => {
			// 		console.log(resp);
			// 		// alertaGuardado(resp.status, Swal, setOpen);
			// 		// toogleLoading(false);
			// 	});
		
	});


	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
					<HeaderPaso />
					<div className='contSec'>
						<div className='titleIntro txtCenter'>
							<div className='vAlign'>
								<p>
									<strong>
										ESTÁ INSCRIBIENDO UN TRABAJO
										COLECTIVO&nbsp;/&nbsp;ENTREVISTA&nbsp;/&nbsp;TEXTO&nbsp;
									</strong>
								</p>
							</div>
						</div>
						<hr className='gLine noM' />
						{/*Form trabajo*/}
						<form
							onSubmit={onSubmitpost}
							className='gForm'
							>
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									1. Título del trabajo
								</h3>
								<p>
									{/* <label for="tit" class="gLabel">Nombre del trabajo</label> */}
									<input
										type='text'
										{...register("titulo_tra", {
												required: true,
											})}
										
									/>
								</p>
							</fieldset>
							<hr className='gLine' />
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									2. Medio de publicación o emisión
								</h3>
								<p>
									Registrar únicamente el nombre del medio de
									comunicación colombiano o del proyecto
									periodístico de iniciativa colombiana al que
									pertenece el trabajo.
								</p>
								<p>
									<input
										type='text'
										{...register("medio_tra", {
												required: true,
											})}
									/>
								</p>
							</fieldset>
							<hr className='gLine' />
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									3. Certificado de publicación o emisión
								</h3>
								<p>
									Debe adjuntarse un certificado en formato
									JPG o PDF en el que se verifiquen estos
									datos. Este certificado es válido para
									cualquier tipo de medio en el que se haya
									publicado o emitido el trabajo. En el
									certificado debe constar que el trabajo fue
									publicado o emitido entre el 1 de mayo del
									2023 y el 30 de abril de 2024.
									<a
										href='#'
										className='txtLora color2'>
										<strong>(Descargar modelo)</strong>
									</a>
								</p>b
								<div className='gCol col2'>
									<div>
										<UploadFile  register= {register}  camponombre = "doc1_tra" />
										<span className='noteFile'>
											Archivo en formato JPG o PDF (Peso
											máximo de 2 MB)
										</span>
										<p />
									</div>
								</div>
								{/* <div id='cont1' className='gCDocs' /> */}
							</fieldset>

							<hr className='gLine' />
							<h3 className='titSectF'>4. Entregas</h3>
						
							{/* <fieldset className='gDiv max770'>
								<p>
									<label className='gLabel featured'>
										En texto (impreso y digital) pueden
										presentarse máximo tres (3) entregas
										sobre el mismo hecho.
									</label>
									<input
										type='text'
										name='nument'
										id='nument'
										defaultValue=''
										className='numEntregas inputHidden valid'
										aria-required='true'
										aria-invalid='false'
									/>
								</p>
							</fieldset> */}
							<div className='contEntrega'>
								
								{/* <div
									id='listEntregas'
									className='listEntre'
									data-nextitem={4}>
									<div id='itemEntre1' className='itemEntre'>
										<button
											className='rbtn btnRemove btnRemoveEnt'
											type='button'>
											Quitar
										</button>
										<div className='gCol col2'>
											<div>
												<p>
													<label
														htmlFor='titent1'
														className='gLabel'>
														Título de la entrega{" "}
													</label>
													<input
														type='text'
														name='titent1'
														id='titent1'
														required=''
													/>
												</p>
											</div>
											<div>
												<p>
													<label
														htmlFor='fecent1'
														className='gLabel'>
														Fecha de emisión /
														publicación
													</label>
													<label className='iCalendar'>
														<input
															type='text'
															name='fecent1'
															id='fecent1'
															data-range='2022:2023'
															required=''
															className='hasDatepicker'
														/>
													</label>
													<span className='noteFile'>
														Solo podrán inscribirse
														trabajos cuya fecha de
														publicación o emisión
														esté comprendida entre
														el 1 de mayo de 2022 y
														el 30 de abril de 2023
													</span>
												</p>
											</div>
										</div>
										<div className='gCol col2'>
											<div>
												<p>
													
													<label
														htmlFor='files-publ1'
														className='gLabel'>
														Subir imagen del trabajo
														como fue publicado{" "}
													</label>
													<input
														type='text'
														name='publ1'
														id='publ1'
														defaultValue=''
														readOnly=''
														className='textFile'
														required=''
													/>
												</p>
												<div className='jFiler'>
													<input
														type='file'
														name='files[]'
														id='files-publ1'
														multiple='multiple'
														className='simpleFile'
														data-itext='#publ1'
														data-append='#contPub1'
														data-jfiler-files=''
														style={{
															position:
																"absolute",
															left: "-9999px",
															top: "-9999px",
															zIndex: -9999,
														}}
													/>
													<div className='jFiler-input'>
														<div className='jFiler-input-caption'>
															<span>
																Explorar
															</span>
														</div>
														<div className='jFiler-input-button'>
															Subir archivo
														</div>
													</div>
												</div>{" "}
												<span className='noteFile'>
													Archivo en formato JPG o PDF
													en donde se reconozca el
													medio, la fecha de
													publicación y el texto
													completo. <br /> (Peso
													máximo de 10 MB) <br />
													<br />
													En caso de no contar con el
													archivo digital se pueden
													escanear, en un solo
													archivo, las páginas que
													contienen el trabajo.
												</span>
												<p />
												<div
													id='contPub1'
													className='gCDocs'
												/>
											</div>
										</div>
									</div>
									<div id='itemEntre2' className='itemEntre'>
										<button
											className='rbtn btnRemove btnRemoveEnt'
											type='button'>
											Quitar
										</button>
										<div className='gCol col2'>
											<div>
												<p>
													<label
														htmlFor='titent2'
														className='gLabel'>
														Título de la entrega
													</label>
													<input
														type='text'
														name='titent2'
														id='titent2'
														required=''
													/>
												</p>
											</div>
											<div>
												<p>
													<label
														htmlFor='fecent2'
														className='gLabel'>
														Fecha de emisión /
														publicación
													</label>
													<label className='iCalendar'>
														<input
															type='text'
															name='fecent2'
															id='fecent2'
															data-range='2022:2023'
															required=''
															className='hasDatepicker'
														/>
													</label>
													<span className='noteFile'>
														Solo podrán inscribirse
														trabajos cuya fecha de
														publicación o emisión
														esté comprendida entre
														el 1 de mayo de 2022 y
														el 30 de abril de 2023
													</span>
												</p>
											</div>
											2
										</div>
										<div className='gCol col2'>
										
											<div>
												<p>
													<label
														htmlFor='urlent2'
														className='gLabel'>
														URL de publicación{" "}
													</label>
													<input
														type='url'
														name='urlent2'
														id='urlent2'
														required=''
													/>
													<span className='noteFile'>
														Debe presentarse solo
														una URL. Copie y pegue
														la URL en este campo.{" "}
														<br />
														<br />
														El contenido de este
														trabajo debe estar
														vigente hasta la
														ceremonia de entrega del
														Premio.
													</span>
												</p>
											</div>
										</div>
									</div>
								</div> */}
								{/*End Listado entregas*/}
								
								<div className='gCol col2'>
									<div>
										<button
											className='gBtn w100 txtUp btnAddEnt imp'
											type='button'
											data-maxent={3}
											data-type={1}
											data-text='entrega impresa'
											style={{ display: "inline-block" }}>
											AGREGAR OTRA entrega impresa
										</button>
									</div>
									<div>
										<button
											className='gBtn w100 txtUp btnAddEnt dig'
											type='button'
											data-maxent={3}
											data-type={2}
											data-text='entrega digital'
											style={{ display: "inline-block" }}>
											AGREGAR OTRA entrega digital
										</button>
									</div>
								</div>
							</div>
							
							<hr className='gLine' />
							<div className='noteGreen'>
								La información registrada en los siguientes
								campos será tenida en cuenta por el jurado
								durante las deliberaciones; sus respuestas
								proporcionarán al jurado más elementos para
								valorar su trabajo.
							</div>


							
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>5. Sinopsis</h3>
								<p>
									{/* <label for="sinop" class="gLabel">Sinopsis</label> */}
									<label htmlFor='sinop'>
										La sinopsis debe describir brevemente el
										contenido de su trabajo
									</label>{" "}
									<br />
									<br />
									<textarea
									{...register("sinopsis_tra", {
												required: true,
											})}
										maxLength={1200}
										data-max={1200}
										className='countL'
										
									/>
									<span className='noteInput txtC'>
										<strong>
											<em>1200</em> caracteres
										</strong>
									</span>
								</p>
							</fieldset>
							<hr className='gLine' />
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>6. Preguntas</h3>
								<p>
									<label htmlFor='prim'>
										{" "}
										¿Qué aporte hizo su entrevista a lo que
										se conocía sobre su entrevistado o sobre
										el tema en cuestión?{" "}
										<em className='txtLora color2'></em>{" "}
									</label>
									<br />
									<br />
									<textarea
										name='prim_1'
										id='prim_1'
										maxLength={350}
										data-max={350}
										className='countL required'
										aria-required='true'
										defaultValue={""}
									/>
									<span className='noteInput txtC'>
										<strong>
											<em>350</em> caracteres
										</strong>
									</span>
									<input
										type='hidden'
										name='preg_1'
										id='preg_1'
										defaultValue='1$$-edEZPxyXmtmXG3C6fwm'
									/>
								</p>
								<p>
									<label htmlFor='prim'>
										{" "}
										¿Qué impacto tuvo este trabajo en la
										opinión pública?{" "}
										<em className='txtLora color2'>
											{" "}
											(opcional){" "}
										</em>{" "}
									</label>
									<br />
									<br />
									<textarea
										name='prim_2'
										id='prim_2'
										maxLength={350}
										data-max={350}
										className='countL '
										defaultValue={""}
									/>
									<span className='noteInput txtC'>
										<strong>
											<em>350</em> caracteres
										</strong>
									</span>
									<input
										type='hidden'
										name='preg_2'
										id='preg_2'
										defaultValue='1$$-edEZPxyXqtmXG3C6fwm'
									/>
								</p>
							</fieldset>
					
							<div className='contGBtn max770'>
								<div className='gCol col2'>
									<div>
										<button
											className='gBtn w100 txtUp'
											type='submit'>
											Guardar y continuar
										</button>
									</div>
								</div>
							</div>
							<input
								type='hidden'
								name='poslb'
								id='poslb'
								defaultValue='1$$-edEZPxyXGxmXG3C6fwm'
							/>
							<input
								type='hidden'
								name='codigo_seguridad'
								id='codigo_seguridad'
								defaultValue='1$$-edEZPxyXKZnWaJnXG3C6fwm'
							/>
						</form>
						{/*End Form trabajo*/}
					</div>
				</section>
			</div>
		</>
	);
};
