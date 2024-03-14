import React from "react";

export const ListaEntregas = ({
	entregas,
	categpria,
	tipoEntrega,
	agregarEntrega,
	removerEntrega,
}) => {
	console.log({ entregas, categpria, tipoEntrega });

	return (
		<>
			<h3 className='titSectF'>4. Entregas</h3>
			<fieldset className='gDiv max770'>
				<p>
					<label className='gLabel featured'>
						En texto (impreso y digital) pueden presentarse
						<br />
						máximo tres (3) entregas sobre el mismo hecho.
					</label>
				</p>
			</fieldset>

			<div className='contEntrega'>
				{/*Listado entregas*/}
				{entregas.map((item, index) => {


return (


					<div id='listEntregas' className='listEntre' key={index}>
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
											Fecha de emisión / publicación
										</label>
										<label className='iCalendar'>
											<input
												type='text'
												name='fecent1'
												id='fecent1'
												data-range='2023:2024'
												required=''
												className='hasDatepicker'
											/>
										</label>
										<span className='noteFile'>
											Solo podrán inscribirse trabajos
											cuya fecha de publicación o emisión
											esté comprendida entre el 1 de mayo
											de 2023 y el 30 de abril de 2024
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
											Subir imagen del trabajo como fue
											publicado{" "}
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
												position: "absolute",
												left: "-9999px",
												top: "-9999px",
												zIndex: -9999,
											}}
										/>
										<div className='jFiler-input'>
											<div className='jFiler-input-caption'>
												<span>Explorar</span>
											</div>
											<div className='jFiler-input-button'>
												Subir archivo
											</div>
										</div>
									</div>{" "}
									<span className='noteFile'>
										Archivo en formato JPG o PDF en donde se
										reconozca el medio, la fecha de
										publicación y el texto completo. <br />{" "}
										(Peso máximo de 10 MB) <br />
										<br />
										En caso de no contar con el archivo
										digital se pueden escanear, en un solo
										archivo, las páginas que contienen el
										trabajo.
									</span>
									<p />
									<div id='contPub1' className='gCDocs' />
								</div>
							</div>
						</div>
					</div>)
				})}
				{/*End Listado entregas*/}
				<div className='gCol col2'>
					{(tipoEntrega == 100 || tipoEntrega == 15) && (
						<div>
							<button
								className='gBtn w100 txtUp btnAddEnt imp'
								type='button'
								data-text='entrega impresa'
								onClick={() => {
									agregarEntrega({});
								}}>
								AGREGAR OTRA entrega impresa
							</button>
						</div>
					)}

					{(tipoEntrega == 100 || tipoEntrega == 15) && (
						<div>
							<button
								className='gBtn w100 txtUp btnAddEnt dig'
								type='button'
								data-text='entrega digital'>
								AGREGAR OTRA entrega digital
							</button>
						</div>
					)}

					{/* <div>
						<button
							className='gBtn w100 txtUp btnAddEnt imp'
							type='button'
							data-text='entrega impresa'>
							AGREGAR OTRA entrega impresa
						</button>
					</div> */}
					{/* <div>
						<button
							className='gBtn w100 txtUp btnAddEnt dig'
							type='button'
							data-text='entrega digital'>
							AGREGAR OTRA entrega digital
						</button>
					</div> */}
				</div>
			</div>
		</>
	);
};
