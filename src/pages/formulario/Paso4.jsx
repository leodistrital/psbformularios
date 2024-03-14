import { useEffect, useState } from "react";
import { HeaderPaso } from "../../componentes/formulario/global/HeaderPaso";
import { useAppStore } from "../../stores/app.store";
import { Conexion } from "../../service/conexion";
import { useForm, useFieldArray } from "react-hook-form";
import { Navigate, json } from "react-router-dom";
import { UploadFile } from "../../componentes/global/UploadFile";
import { ListaEntregas } from "../../componentes/formulario/trabajos/ListaEntregas";

export const Paso4 = () => {
	const { id } = useAppStore((state) => state.inscripcion);
	const [dataEntreegas, setdataEntreegas] = useState([]);
	const datatable = new Conexion();
	const Tabla = "trabajos";

	const defaultValues = {
		id: "0",
		sinopsis_tra: "",
		titulo_tra: "",
		medios_tra: "",
		doc1_tra: "",
		entregas: [],
		preguntas: [],
		respuestas: [],
	};

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		getValues,
		control,
	} = useForm({ defaultValues });

	const { fields, append, remove } = useFieldArray({
		name: "entregas",
		control: control,
	});

	// console.log(id);

	//CARGA INICIAL
	useEffect(() => {
		if (id === 0) {
			console.log("error");
			Navigate("/panel");
		}
		// console.log(id);

		if (id > 0) {
			// toogleLoading(true);
			datatable.getItem(Tabla, id).then(({ data }) => {
				// console.log({data});
				reset(data);
				// setdataEntreegas(data.entregas)
				// console.log(getValues("preguntas"));

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
		// datatable.getEditarItem(Tabla, data, id).then(({ resp }) => {
		// 	console.log(resp);
		// 	// alertaGuardado(resp.status, Swal, setOpen);
		// 	// toogleLoading(false);
		// });
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
						<form onSubmit={onSubmitpost} className='gForm'>
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
									<a href='#' className='txtLora color2'>
										<strong>(Descargar modelo)</strong>
									</a>
								</p>
								<div className='gCol col2'>
									<div>
										<UploadFile
											register={register}
											setValue={setValue}
											getValues={getValues}
											camponombre='doc1_tra'
										/>
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
							<ListaEntregas register={register} agregarEntrega={append} removerEntrega={remove}   entregas={fields} categpria={getValues('categoria_tra')} tipoEntrega={getValues('cod_medio_tra')}  />
							{console.log(fields)}

							{/* {fields.map((item, index) => {
								
									return (<div key={index}>
									<h1 >hola</h1>
									<input
										type='text'
										{...register(
											`entregas.${index}.cod_seg_dse`
										)}
									/>
									</div>)
								
							})} */}

							{/* <div>
								<button
									className='gBtn w100 txtUp btnAddEnt imp'
									type='button'
									data-text='entrega impresa'
									onClick={() => {
										append({
											cod_seg_dse: 15,
											archivo: "",
										});
									}}>
									AGREGAR OTRA entrega impresa
								</button>
							</div> */}

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

								{getValues("preguntas").map((item, index) => (
									<p key={index}>
										<label htmlFor='prim'>
											{item.pregunta}
											<em className='txtLora color2'></em>
										</label>
										<br />
										<br />
										<textarea
											{...register(
												`preguntas.${index}.respuesta`,
												{
													required: parseInt(
														item.obligatorio
													),
												}
											)}
											maxLength={350}
											className='countL required'
										/>
										<input
											type='hidden'
											{...register(
												`preguntas.${index}.idpregunta`
											)}
											value={item.idpregunta}
										/>
										<span className='noteInput txtC'>
											<strong>
												<em>350</em> caracteres
											</strong>
										</span>
									</p>
								))}
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
									<div className=''>
										<pre>
											{" "}
											{JSON.stringify(
												getValues(),
												null,
												2
											)}
										</pre>
									</div>
								</div>
							</div>
						</form>
						{/*End Form trabajo*/}
					</div>
				</section>
			</div>
		</>
	);
};
