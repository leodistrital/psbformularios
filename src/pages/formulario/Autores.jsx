import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";

export const Autores = () => {
	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
					<HeaderPaso />
					<div className='contSec'>
						<div className='gDiv max770'>
							{/*Form autor*/}
							<form
								id='formAutor'
								method='POST'
								className='gForm'
								noValidate='novalidate'>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='nom'
												className='gLabel'>
												* Nombres
											</label>
											<input
												type='text'
												name='nom'
												id='nom'
												defaultValue=''
											/>
										</p>
									</div>
									<div>
										<p>
											<label
												htmlFor='ape'
												className='gLabel'>
												* Apellidos
											</label>
											<input
												type='text'
												name='ape'
												id='ape'
												defaultValue=''
											/>
										</p>
									</div>
								</div>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='email'
												className='gLabel'>
												* Correo electrónico
											</label>
											<input
												type='email'
												name='email'
												id='email'
												defaultValue=''
											/>
										</p>
									</div>
									<div>
										<label htmlFor='doc' className='gLabel'>
											* Documento de identidad
										</label>
										<div className='gCol col2'>
											<div>
												<label className='gRC sm'>
													CC
													<input
														type='radio'
														name='tipdoc'
														id='cc'
														onclick="recargar_extrangeria('cc')"
														defaultChecked=''
														defaultValue={1}
													/>
													<span className='icoR' />
												</label>
												<label className='gRC sm'>
													CE
													<input
														type='radio'
														name='tipdoc'
														id='ce'
														onclick="recargar_extrangeria('ce')"
														defaultValue={3}
													/>
													<span className='icoR' />
												</label>
											</div>
											<div>
												<p>
													<input
														type='number'
														name='doc'
														id='doc'
														className=''
														defaultValue=''
													/>
													<input
														type='hidden'
														name='estimulo'
														id='estimulo'
														defaultValue={15}
													/>
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className='gCol col2'>
									<div
										id='contenedor_estran'
										className='ocultar_adjunto'>
										<p id='caja_estran'>
											<label
												htmlFor='doc_ide'
												className='gLabel'>
												* Adjuntar Cédula de Extranjería
											</label>
										</p>
										<div className='jFiler'>
											<input
												type='file'
												name='files[]'
												id='files-doc_ide'
												multiple='multiple'
												className='simpleFile'
												data-itext='#doc_ide'
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
											Imagen en formato JPG o PDF de las
											dos caras del documento de identidad
											(Peso máximo de 2 MB)
										</span>
										<p />
										<div id='cont1' className='gCDocs' />
										<p />
									</div>
								</div>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='telf'
												className='gLabel'>
												* Teléfono celular
											</label>
											<input
												type='text'
												name='telf'
												id='telf'
												className='entero'
												defaultValue=''
											/>
										</p>
									</div>
									<div>
										<p>
											<label
												htmlFor='tel'
												className='gLabel'>
												* Teléfono de contacto
											</label>
											<input
												type='text'
												name='tel'
												id='tel'
												defaultValue=''
											/>
										</p>
									</div>
								</div>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='ciud'
												className='gLabel'>
												* Ciudad de correspondencia
											</label>
											<label className='cField gSelect'>
												<label className='cField gSelect'>
													<select
														name='ciud'
														id='ciud'>
														<option
															value=''
															selected='selected'>
															Seleccione..
														</option>{" "}
														<option value={100}>
															BOGOTÁ
														</option>{" "}
														<option value={515}>
															MEDELLÍN
														</option>{" "}
														<option value={133}>
															CALI
														</option>{" "}
														<option value={156}>
															CARTAGENA DE INDIAS
														</option>{" "}
														<option value={1024}>
															YONDÓ
														</option>{" "}
														<option value={1025}>
															YOPAL
														</option>{" "}
														<option value={1026}>
															YOTOCO
														</option>{" "}
														<option value={1027}>
															YUMBO
														</option>{" "}
														<option value={1028}>
															ZAMBRANO
														</option>{" "}
														<option value={1029}>
															ZAPATOCA
														</option>{" "}
														<option value={1030}>
															ZAPAYÁN
														</option>{" "}
														<option value={1031}>
															ZARAGOZA
														</option>{" "}
														<option value={1032}>
															ZARZAL
														</option>{" "}
														<option value={1033}>
															ZETAQUIRA
														</option>{" "}
														<option value={1035}>
															ZIPAQUIRA
														</option>
													</select>
												</label>{" "}
											</label>
										</p>
									</div>
									<div>
										<p>
											<label
												htmlFor='dirc'
												className='gLabel'>
												* Dirección de correspondencia
											</label>
											<input
												type='text'
												name='dirc'
												id='dirc'
												defaultValue=''
											/>
										</p>
									</div>
								</div>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='emp'
												className='gLabel'>
												* Empresa
											</label>
											<input
												type='text'
												name='emp'
												id='emp'
												defaultValue=''
											/>
										</p>
									</div>
									<div>
										<p>
											<label
												htmlFor='cargo'
												className='gLabel'>
												* Cargo
											</label>
											<input
												type='text'
												name='cargo'
												id='cargo'
												defaultValue=''
											/>
										</p>
									</div>
								</div>
								<div className='gCol col2'>
									<div>
										<p>
											<label
												htmlFor='twt'
												className='gLabel'>
												Twitter (opcional)
											</label>
											<input
												type='text'
												name='twt'
												id='twt'
												defaultValue=''
											/>
										</p>
									</div>
									<div>
										<p>
											<label
												htmlFor='insta'
												className='gLabel'>
												Instagram (opcional)
											</label>
											<input
												type='text'
												name='insta'
												id='insta'
												defaultValue=''
											/>
										</p>
									</div>
								</div>
								<p>
									<label htmlFor='reshoj' className='gLabel'>
										* Resumen hoja de vida
									</label>
									<textarea
										name='reshoj'
										id='reshoj'
										maxLength={500}
										data-max={500}
										className='countL'
										defaultValue={""}
									/>
									<span className='noteInput txtC'>
										<strong>
											<em>500</em> caracteres
										</strong>
									</span>
								</p>
								<p>
									<label className='gRC'>
										* Declaro que, en caso de inscribir a un
										tercero, he obtenido su permiso expreso
										para registrar sus datos personales de
										acuerdo con las condiciones de uso de
										datos de esta convocatoria.
										<input
											type='checkbox'
											name='terceros'
											id='terceros'
											defaultValue={1}
										/>
										<span className='icoC' />
									</label>
								</p>
								<div className='contGBtn'>
									<button
										className='gBtn w2 txtUp'
										type='submit'>
										Guardar participante
									</button>
									<a
										href='paso-5.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
										className='gBtn w2 txtUp'>
										<span>Cancelar</span>
									</a>
								</div>
								<input
									type='hidden'
									name='tTrab'
									id='tTrab'
									defaultValue='1$$-1$$-qm4nNEHfJmXG3C6fwm'
								/>
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
									defaultValue='1$$-1$$-qm4nNEHfZnXedoXG3C6fwm'
								/>
								<input
									type='hidden'
									name='codigo_seguridad1'
									id='codigo_seguridad1'
									defaultValue='1$$-edEZPxyXGZnWaJnXG3C6fwm'
								/>
								<input
									type='hidden'
									name='codigo_trabajoes'
									id='codigo_trabajoes'
									defaultValue='1$$-edEZPxyXGZnWaJnXG3C6fwm'
								/>
							</form>
							{/*End form autor*/}
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
