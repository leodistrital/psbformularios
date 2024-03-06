import { useState } from "react";
import { useForm } from "react-hook-form";

export const UploadFile = ({ register }) => {
	const [file, setFile] = useState(null);
	const [isError, setIsError] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");
	const [isSuccess, setIsSuccess] = useState(false);

	// const { register:register1 , handleSubmit , reset, getValues } = useForm ({});

	const handleFileChange = (event) => {
		const selectedFile = event.target.files[0];
        console.log(selectedFile);
		// setIsSuccess(false);

		// Checking if the file type is allowed or not
		const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
		if (!allowedTypes.includes(selectedFile?.type)) {
			console.log("File type not supported");
		} else {
            console.log("todo bien");
        }

        const lengthFile  = Math.trunc((selectedFile?.size/1024)) /1000
        // const lengthFile  = parseInt(Math.floor( selectedFile?.size  / 1024))

        console.log(lengthFile);

		// setIsError(false);
		// setFile(selectedFile);
	};

	return (
		<>
			<input
				type='file'
				{...register("doc1_tra", {
					required: true,
				})}
				 onChange={handleFileChange}
			/>
			<div className='jFiler'>
				<input
					type='file'
					className='simpleFile'
					// 	{...register1("archivo", {
					// 	required: true,
					// })}
					style={{
						position: "absolute",
						left: "-9999px",
						top: "-9999px",
						zIndex: -9999,
					}}
					onChange={(e) => {
						// const file = e.target.files[0];
						console.log(e);
					}}
				/>
				<div className='jFiler-input'>
					<div className='jFiler-input-caption'>
						<span>Explorar</span>
					</div>
					<div className='jFiler-input-button'>Subir archivo</div>
				</div>
			</div>
		</>
	);
};
