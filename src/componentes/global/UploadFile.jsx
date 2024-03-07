import { useState } from "react";
import { useForm } from "react-hook-form";
import { Conexion } from "../../service/conexion";
import axios from "axios";

export const UploadFile = ({ register , camponombre }) => {


	const [file, setFile] = useState();
	const [infofile, setinfofile] = useState();
	const datatable = new Conexion ();

	const handleFileChange = (e) => {
		// console.log(e.target.files[0]);
		if (e.target.files) {
			setFile(e.target.files[0]);
			// console.log(file);


				// event.preventDefault();
		const formData = new FormData();
		formData.append("archivo", file);
		

		console.log(formData);

		datatable.getArchivo("upload/archivos", formData).then(({resp}) => {
			console.log(resp);
			setinfofile(resp.file);
			// if (resp.codigo != 0) {
			// 	settrabajo(resp.codigo);
			// 	navigate("/paso4");
			// } 
		});

		}
	};





	return (
		<>

		{/* <form id='enviofile' onSubmit={handleUploadClick}> */}
				<input type='file' onChange={handleFileChange} />
				<input type='text' {...register(camponombre, {
												required: true,
											})}  value={infofile}  />
				{/* <button type='submit'>Upload</button> */}
			{/* </form> */}


			{/* <form id='enviofile' enctype='multipart/form-data'>
				<input type='file' onChange={handleFileChange} />
				<button onClick={handleUploadClick}>Upload</button> */}

				{/* <div className='jFiler'>
					<input
					
					
						type='file'
						className='simpleFile'
					
						style={{
							position: "absolute",
							left: "-9999px",
							top: "-9999px",
							zIndex: -9999,
						}}
						onChange={(e) => {
							setFile(e.target.files[0]);
							console.log(file);
						}}
					/> */}
				{/* <div className='jFiler-input'>
						<div className='jFiler-input-caption'>
							<span>Explorar</span>
						</div>
						<div className='jFiler-input-button'>Subir archivo</div>
					</div> */}
				{/* </div> */}

				
			{/* </form> */}
		</>
	);
};
