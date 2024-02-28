import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";

export const Paso4 = () => {
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
							id='formTrabajo'
							method='POST'
							className='gForm'
							noValidate='novalidate'>
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									1. Título del trabajo
								</h3>
								<p>
									{/* <label for="tit" class="gLabel">Nombre del trabajo</label> */}
									<input
										type='text'
										name='tit'
										id='tit'
										defaultValue=''
									/>
								</p>
							</fieldset>
							<hr className='gLine' />
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									2. Medio de publicación o emisión
								</h3>
								<p>
									{" "}
									Registrar únicamente el nombre del medio de
									comunicación colombiano o del proyecto
									periodístico de iniciativa colombiana al que
									pertenece el trabajo.
								</p>
								<p>
									<input
										type='text'
										name='med'
										id='med'
										defaultValue=''
									/>
								</p>
							</fieldset>
							<hr className='gLine' />
							<fieldset className='gDiv max770'>
								<h3 className='titSectF'>
									3. Certificado de publicación o emisión{" "}
								</h3>
								<p>
									Debe adjuntarse un certificado en formato
									JPG o PDF en el que se verifiquen estos
									datos. Este certificado es válido para
									cualquier tipo de medio en el que se haya
									publicado o emitido el trabajo. En el
									certificado debe constar que el trabajo fue
									publicado o emitido entre el 1 de mayo del
									2022 y el 30 de abril de 2023.{" "}
									<a
										href='docs/Formato_Certificado_publicacion2023.docx'
										className='txtLora color2'>
										<strong>(Descargar modelo)</strong>
									</a>
								</p>
								<div className='gCol col2'>
									<div>
										<input
											type='hidden'
											defaultValue={2}
											name='joven'
											id='joven'
										/>
										<input
											type='hidden'
											defaultValue={100}
											name='medio'
											id='medio'
										/>
										<p>
											<input
												type='text'
												name='cert'
												id='cert'
												defaultValue=''
												readOnly=''
												className='textFile'
											/>
										</p>
										<div className='jFiler'>
											<input
												type='file'
												name='files[]'
												id='files-cert'
												multiple='multiple'
												className='simpleFile'
												data-itext='#cert'
												data-append='#cont1'
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
											Archivo en formato JPG o PDF (Peso
											máximo de 2 MB)
										</span>
										<p />
									</div>
								</div>
								<div id='cont1' className='gCDocs' />
							</fieldset>
							<hr className='gLine' />
							<h3 className='titSectF'>4. Entregas</h3>
							{/*Dinamic fields*/}
							<fieldset className='gDiv max770'>
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
							</fieldset>
							<div className='contEntrega'>
								{/*Listado entregas*/}
								<div
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
													{/*<label for="files-publ1" class="gLabel">Subir archivo de publicación</label>*/}
													{/* <label for="files-publ1" class="gLabel">Subir imagen del trabajo como fue publicado <br><br>En caso de no contar con el archivo digital se pueden escanear, en un solo archivo, las páginas que contienen el trabajo.</label> */}
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
											{/* DIGITAL O IMPRESO */}
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
								</div>
								{/*End Listado entregas*/}
								{/* 
                  <div class="gCol col2">
                      <div>
                          
                     



                                                              <button class="gBtn w100 txtUp btnAddEnt" type="button" data-maxent="3" data-type="" data-text="entrega">Agregar entrega</button>


                                                          <span id='leyEntr' class="noteFile"></span>

                           <button class="gBtn w100 txtUp btnAddEnt" type="button" data-maxent="3" data-type="" data-text="entrega">Agregar entrega</button>

                      </div>

                  </div>
 */}
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
							{/*End Dinamic fields*/}
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
										name='sinop'
										id='sinop'
										maxLength={1200}
										data-max={1200}
										className='countL'
										defaultValue={""}
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
