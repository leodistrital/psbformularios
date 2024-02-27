export const Formularios = () => {
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
								Número de documento de identidad y datos de
								contacto de los participantes
							</li>
							<li>
								Certificado de publicación / emisión del trabajo{" "}
								<a href='docs/Formato_Certificado_publicacion2023.docx'>
									<strong>
										<em className='txtLora'>
											(Descargar modelo)
										</em>
									</strong>
								</a>
							</li>
							<li>
								Trabajo que concursa{" "}
								<a
									href='docs/PNPSB_Especificaciones_2023.pdf'
									target='_blank'>
									{" "}
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
								ES NECESARIO REGISTRARSE PARA LA EDICIÓN 48 DEL
								PREMIO, AUNQUE
								<br /> HAYA POSTULADO TRABAJOS EN AÑOS
								ANTERIORES O ESTA SEA SU PRIMERA POSTULACIÓN
							</strong>
							<br />
							<br />
							<strong
								style={{ color: "#331839", fontWeight: 900 }}>
								Con un usuario usted puede inscribir la cantidad
								de trabajos que requiera. Debe tener en cuenta
								que cada participante sólo puede estar inscrito
								en un trabajo individual y uno colectivo
							</strong>
						</p>
					</div>
					<div className='contFLogin'>
						{/*Registro*/}
						<div className='cForm cRight'>
							<h2
								className='cTitle'
								style={{ color: "rgba(250, 220, 0, 1)" }}>
								<span>
									Soy usuario registrado <br /> Edición 48
								</span>
							</h2>
							<div className='cDesc'>
								<form
									id='formLogin'
									method='POST'
									noValidate='novalidate'>
									<p>
										<label
											htmlFor='lemail'
											className='gLabel'>
											Correo electrónico:
										</label>
										<input
											type='email'
											name='lemail'
											id='lemail'
										/>
									</p>
									<p>
										<label
											htmlFor='lpass'
											className='gLabel'>
											Contraseña:
										</label>
										<input
											type='password'
											name='lpass'
											id='lpass'
										/>
									</p>
									<p>
										<a href='olvido-clave.php'>
											¿Olvidó su contraseña?
										</a>
									</p>
									<div className='gCol col2'>
										<div>
											<button
												className='gBtn w100 txtUp'
												type='submit'>
												Entrar
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						{/*End Registro*/}
						{/*Login*/}
						<div className='cForm cLeft'>
							<h2
								className='cTitle'
								style={{ color: "rgba(250, 220, 0, 1)" }}>
								<span>
									Quiero registrarme <br /> Edición 48
								</span>{" "}
							</h2>
							<div className='cDesc'>
								<form
									id='formRegistro'
									method='POST'
									noValidate='novalidate'>
									<p>
										<label
											htmlFor='remail'
											className='gLabel'>
											Correo electrónico:
										</label>
										<input
											type='email'
											name='remail'
											id='remail'
										/>
									</p>
									<p>
										<label
											htmlFor='rpass'
											className='gLabel'>
											Contraseña:
										</label>
										<input
											type='password'
											name='rpass'
											id='rpass'
										/>
									</p>
									<p>
										<label
											htmlFor='rpass2'
											className='gLabel'>
											Confirmar contraseña:
										</label>
										<input
											type='password'
											name='rpass2'
											id='rpass2'
										/>
									</p>
									<p className='small'>
										<label className='gRC'>
											He leído y acepto los{" "}
											<a
												href='https://www.premiosimonbolivar.com/premio.php?cod=XG3C6fwm00tyUjxz05wAXG3C6fwm&sel=1$$-1$$-qm4nNEHftm9uNBL12CXG3C6fwm'
												target='_blank'>
												términos y condiciones
											</a>
											.
											<input
												type='checkbox'
												name='term'
												id='term'
											/>
											<span className='icoC' />
										</label>
									</p>
									<p className='small'>
										<label className='gRC'>
											Autorizo el{" "}
											<a
												href='datos-personales.php'
												className='openFancy cboxElement'>
												uso de mis datos personales
											</a>
											.
											<input
												type='checkbox'
												name='autorizo'
												id='autorizo'
											/>
											<span className='icoC' />
										</label>
									</p>
									<br />
									{/*  <div id="recaptcha-div" class="gCaptcha"></div>
              <p><input type="hidden" name="recaptcha" id="recaptcha" required></p> */}
									<div className='gCol col2'>
										<div>
											<button
												className='gBtn w100 txtUp'
												type='submit'>
												Registrar
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						{/*End Login*/}
					</div>
				</div>
    </>
  )
}
