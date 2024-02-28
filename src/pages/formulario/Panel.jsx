import { Reglas } from "../../componentes/formulario/panel/Reglas";

export const Panel = () => {
	return (
		<>
			<div className='gContent maxW'>
				<section className='gPanel'>
					<div className='titleSec'>
						<h2 className='title'>
							resumen de inscripción de trabajos
						</h2>
					</div>
					<div className='contSec'>
						{/*Resume works*/}
						<div className='resumeWorks'>
							<ul>
								<li>
									TRABAJOS <strong>INDIVIDUALES</strong>{" "}
									REGISTRADOS:{" "}
									<strong className='des_num_tra'>2</strong>
								</li>
								<li>
									TRABAJOS <strong>COLECTIVOS</strong>{" "}
									REGISTRADOS:{" "}
									<strong className='des_num_tra'>1</strong>
								</li>
							</ul>
							<a href='paso1' className='gBtn txtUp'>
								<span>Inscribir nuevo trabajo</span>
							</a>
						</div>
						{/*End Resume works*/}
						{/*Listado inscripciones*/}
						<div className='listPanel'>
							{/*Item panel*/}
							<article className='itemPanel incomplete'>
								<div className='info'>
									{/* <h2>11111111111 ++ 60078</h2> */}
									<h2>11111111111 </h2>
									<h3>
										Número de Entregas: <strong>1</strong>
									</h3>
									{/* <p class="txtUp">Colectivo / Multimedia / MULTIMEDIA</p> */}
									<p className='txtUp'>
										Colectivo / Multimedia{" "}
									</p>
									<p>
										<a href='paso-5-2.php?tautor=1$$-1$$-qm4nNEHfJnXedoXG3C6fwm&trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'>
											{/*<em class="autor_incompleto">*****  (incompleto)</em>*/}
											<em className='autor_incompleto'>
												Autor 1 (incompleta)
											</em>
										</a>
									</p>
								</div>
								<div className='resume'>
									<p className='status alterna-status'>
										Trabajo incompleto{" "}
									</p>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
												className='gBtn round w100 green icon'>
												<span>
													<i className='icoStatus s1' />
													Información sobre el trabajo
												</span>
											</a>
										</li>
										{/* <li>
                                      <a href="paso-5.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm" class="gBtn round w100 red icon"><i class="icoStatus s1"></i><span>Información sobre el / los participante(s)</span></a>
                                  </li> */}
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
												className='gBtn round w100 red icon'>
												<span>
													Información sobre el / los
													participante(s) incompleta
												</span>
											</a>
										</li>
										{/*  <li>
                                      <button type="button" class="gBtn round w100 inactive"><span>Enviar trabajo para finalizar inscripción</span></button>
                                  </li> */}
									</ul>
								</div>
								<div className='options'>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
												className='gBtn w100 round'>
												<span>Editar trabajo</span>
											</a>
										</li>
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXGZnWaJnXG3C6fwm'
												className='gBtn w100 round btnEAutor'>
												<span>
													Editar participante(s)
												</span>
											</a>
										</li>
										<li>
											<a
												href='#'
												className='gBtn w100 round red btnEliTrab'
												data-pv='1$$-edEZPxyXGZnWaJnXG3C6fwm'>
												<span>Eliminar</span>
											</a>
										</li>
									</ul>
								</div>
							</article>
							{/*End Item panel*/}
							<article className='itemPanel completed'>
								<div className='info'>
									{/* <h2>214313123 ++ 48626</h2> */}
									<h2>214313123 </h2>
									<h3>
										Número de Entregas: <strong>1</strong>
									</h3>
									{/* <p class="txtUp">Individual / Noticia / </p> */}
									<p className='txtUp'>
										Individual / Noticia{" "}
									</p>
									<p>
										<a href='paso-5-2.php?tautor=1$$-1$$-qm4nNEHftnWuJnXG3C6fwm&trab=1$$-edEZPxyXyJm2GdnXG3C6fwm'>
											{/*<em class="autor_incompleto">*****  (incompleto)</em>*/}
											<em className='autor_incompleto'>
												Autor 1 (incompleta)
											</em>
										</a>
									</p>
								</div>
								<div className='resume'>
									<p className='status alterna-status'>
										Trabajo incompleto{" "}
									</p>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXyJm2GdnXG3C6fwm'
												className='gBtn round w100 green icon'>
												<span>
													<i className='icoStatus s1' />
													Información sobre el trabajo
												</span>
											</a>
										</li>
										{/* <li>
                                      <a href="paso-5.php?trab=1$$-edEZPxyXyJm2GdnXG3C6fwm" class="gBtn round w100 red icon"><i class="icoStatus s1"></i><span>Información sobre el / los participante(s)</span></a>
                                  </li> */}
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXyJm2GdnXG3C6fwm'
												className='gBtn round w100 red icon'>
												<span>
													Información sobre el / los
													participante(s) incompleta
												</span>
											</a>
										</li>
										{/*  <li>
                                      <button type="button" class="gBtn round w100 inactive"><span>Enviar trabajo para finalizar inscripción</span></button>
                                  </li> */}
									</ul>
								</div>
								<div className='options'>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXyJm2GdnXG3C6fwm'
												className='gBtn w100 round'>
												<span>Editar trabajo</span>
											</a>
										</li>
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXyJm2GdnXG3C6fwm'
												className='gBtn w100 round btnEAutor'>
												<span>
													Editar participante(s)
												</span>
											</a>
										</li>
										<li>
											<a
												href='#'
												className='gBtn w100 round red btnEliTrab'
												data-pv='1$$-edEZPxyXyJm2GdnXG3C6fwm'>
												<span>Eliminar</span>
											</a>
										</li>
									</ul>
								</div>
							</article>
							{/*End Item panel*/}
							<article className='itemPanel incomplete'>
								<div className='info'>
									{/* <h2>111111, 2222 ++ 47668</h2> */}
									<h2>111111, 2222 </h2>
									<h3>
										Número de Entregas: <strong>2</strong>
									</h3>
									{/* <p class="txtUp">Individual / Caricatura / </p> */}
									<p className='txtUp'>
										Individual / Caricatura{" "}
									</p>
								</div>
								<div className='resume'>
									<p className='status '>
										Trabajo incompleto
									</p>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXGJn2CdnXG3C6fwm'
												className='gBtn round w100 green icon'>
												<span>
													<i className='icoStatus s1' />
													Información sobre el trabajo
												</span>
											</a>
										</li>
										{/* <li>
                                      <a href="paso-5.php?trab=1$$-edEZPxyXGJn2CdnXG3C6fwm" class="gBtn round w100 red icon"><i class="icoStatus s1"></i><span>Información sobre el / los participante(s)</span></a>
                                  </li> */}
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXGJn2CdnXG3C6fwm'
												className='gBtn round w100 red icon'>
												<span>
													Información sobre el / los
													participante(s) incompleta
												</span>
											</a>
										</li>
										{/*  <li>
                                      <button type="button" class="gBtn round w100 inactive"><span>Enviar trabajo para finalizar inscripción</span></button>
                                  </li> */}
									</ul>
								</div>
								<div className='options'>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXGJn2CdnXG3C6fwm'
												className='gBtn w100 round'>
												<span>Editar trabajo</span>
											</a>
										</li>
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXGJn2CdnXG3C6fwm'
												className='gBtn w100 round btnEAutor'>
												<span>
													Editar participante(s)
												</span>
											</a>
										</li>
										<li>
											<a
												href='#'
												className='gBtn w100 round red btnEliTrab'
												data-pv='1$$-edEZPxyXGJn2CdnXG3C6fwm'>
												<span>Eliminar</span>
											</a>
										</li>
									</ul>
								</div>
							</article>
							{/*End Item panel*/}
							<article className='itemPanel completed'>
								<div className='info'>
									{/* <h2>Nuevo titulo del trabajo para pruebas ++ 45001</h2> */}
									<h2>
										Nuevo titulo del trabajo para pruebas{" "}
									</h2>
									<h3>
										Número de Entregas: <strong>1</strong>
									</h3>
									{/* <p class="txtUp">Individual / Est&iacute;mulos al Periodismo Universitario / TEXTO</p> */}
									<p className='txtUp'>
										Individual / Estímulos al Periodismo
										Universitario{" "}
									</p>
								</div>
								<div className='resume'>
									<p className='status '>
										Trabajo sin enviar
									</p>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXedmWudnXG3C6fwm'
												className='gBtn round w100 green icon'>
												<span>
													<i className='icoStatus s1' />
													Información sobre el trabajo
												</span>
											</a>
										</li>
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXedmWudnXG3C6fwm'
												className='gBtn round w100 green icon'>
												<i className='icoStatus s1' />
												<span>
													Información sobre el / los
													participante(s)
												</span>
											</a>
										</li>
										<li>
											<span className='qf'>
												¿Qué falta?
											</span>
										</li>
										<li>
											<button
												type='button'
												className='gBtn round w100 orange btnFinTrab'
												data-pv='1$$-edEZPxyXedmWudnXG3C6fwm'>
												<span>
													Enviar trabajo para
													finalizar inscripción
												</span>
											</button>
										</li>
									</ul>
								</div>
								<div className='options'>
									<ul>
										<li>
											<a
												href='epaso-4.php?trab=1$$-edEZPxyXedmWudnXG3C6fwm'
												className='gBtn w100 round'>
												<span>Editar trabajo</span>
											</a>
										</li>
										<li>
											<a
												href='paso-5.php?trab=1$$-edEZPxyXedmWudnXG3C6fwm'
												className='gBtn w100 round btnEAutor'>
												<span>
													Editar participante(s)
												</span>
											</a>
										</li>
										<li>
											<a
												href='#'
												className='gBtn w100 round red btnEliTrab'
												data-pv='1$$-edEZPxyXedmWudnXG3C6fwm'>
												<span>Eliminar</span>
											</a>
										</li>
									</ul>
								</div>
							</article>
							{/*End Item panel*/}
						</div>
						{/*End Listado inscripciones*/}
						<Reglas />
					</div>
				</section>
			</div>
		</>
	);
};
