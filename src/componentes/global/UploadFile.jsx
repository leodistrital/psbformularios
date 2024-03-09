import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import { Conexion } from "../../service/conexion";
// import axios from "axios";
import { useRef } from "react";
import { BarLoader, FadeLoader } from "react-spinners";

export const UploadFile = ({ register, camponombre, setValue, getValues }) => {
	const [file, setFile] = useState();
	const datatable = new Conexion();
	const subir = useRef();

	const handleFileChange = (e) => {
		// console.log(e.target.files[0]);
		if (e.target.files) {
			setFile(e.target.files[0]);
			// console.log(file, "en seteo");
		}
	};

	const override = {
		top: "35%",
		left: "45%",
	};

	const handleEnvio = () => {
		if (file?.name) {
			const formData = new FormData();
			formData.append("archivo", file);
			console.log(file);
			datatable
				.getArchivo("upload/archivos", formData)
				.then(({ resp }) => {
					// console.log(resp);
					setValue(camponombre, resp.file);
					setFile(resp);
				});
		}
	};

	console.log(getValues(camponombre, 'xxxx'));
	useEffect(() => {
		if (getValues(camponombre)) {
			// console.log(getValues(camponombre), "en el efec  ");
			setFile(getValues(camponombre));

			// setFile(getValues(camponombre));
		}
	}, [getValues(camponombre)]);

	useEffect(() => {
		if (file) {
			handleEnvio();
		}
	}, [file]);

	return (
		<>
			<div style={{ display: "none" }}>
			<input type='file' ref={subir} onChange={handleFileChange} />
			<input
				type='text'
				{...register(camponombre, {
					required: true,
				})}
				value={getValues(camponombre)}
			/>
			</div>

			{getValues(camponombre) == null && (
				<div className='jFiler'>
					<div className='jFiler-input'>
						<div className='jFiler-input-caption'>
							<span>Explorar</span>
						</div>
						<div
							onClick={() => {
								subir.current.click();
							}}
							className='jFiler-input-button'>
							Subir archivo
						</div>
					</div>
				</div>
			)}
			{file && (
				<div className='jFiler-items jFiler-row'>
					<div className='listIDoc'>
						<div className='itemIDoc'>
							<div className='cThumb'>
								<div className='jFiler-item-thumb-image'>
									<FadeLoader
										color='#8fa09d'
										cssOverride={override}
										loading={false}
									/>
									{ (file  &&  getValues(camponombre)) &&
										(
											getValues(camponombre).slice(
											((getValues(
												camponombre
											).lastIndexOf(".") -
												1) >>>
												0) +
												2
										) == "pdf" ? (
											<span
												className='jFiler-icon-file f-file f-file-ext-pdf'
												style={{
													backgroundColor:
														"rgb(242, 60, 15)",
												}}>
												PDF
											</span>
										) : (
											<img src={getValues(camponombre)} />
										)
										)
										}
								</div>
							</div>

							<div className='cOptions'>
								<div className='textCO'>
									<div
										className='jFiler-jProgressBar'
										style={{ display: "none" }}>
										<div
											className='bar'
											style={{ width: "100%" }}
										/>
									</div>
									<BarLoader
										color='#69a06a'
										height={5}
										loading={false}
										width={150}
									/>

									{file && (
										<span className='text-success'>
											Carga completa
										</span>
									)}
								</div>

								<button
									type='button'
									className='btnEliIDoc'
									onClick={() => {
										// console.log("eliminando");
										setFile(null);
										setValue(camponombre, "");
									}}>
									<i
										className='icon-jfi-trash'
										aria-hidden='true'
									/>
									<svg
										fill='currentColor'
										viewBox='0 0 16 16'
										height='1em'
										width='1em'>
										<path d='M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z' />
										<path
											fillRule='evenodd'
											d='M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
