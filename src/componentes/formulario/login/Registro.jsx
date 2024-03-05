import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Conexion } from "../../../service/conexion";
// import { liginError } from "../../../service/alertas";
import { useAppStore } from "../../../stores/app.store";
import { useRef } from "react";
import { liginErrorCorreo } from "../../../service/alertas";

export const Registro = ({ Tabla }) => {
	const datatable = new Conexion();
	const login = useAppStore((state) => state.iniciar);
	// const toogleLoading = useAppStore((state) => state.toogleLoading);
	// const login = useAppStore((state) => state.iniciar);
	// const estado = useAppStore((state) => state);

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			rpass: "",
			remail: "",
			rpass2: "",
			term: false,
			autorizo: false,
			login: true,
		},
	});

	const password = useRef(null);
	password.current = watch("rpass", "");

	const onSubmit = handleSubmit((data) => {
		// console.log(data);
		datatable.getCrearItem(Tabla, data).then(({ resp }) => {
			// console.log(resp.codigo);
			if (resp.error == 1) {
				liginErrorCorreo(Swal, resp.errormensaje);
			} else {
				console.log(resp.codigo);
				login(resp.info.mail, resp.info.token, resp.codigo);
			}
		});
	});

	return (
		<>
			<div className='cForm cLeft'>
				<h2
					className='cTitle'
					style={{ color: "rgba(250, 220, 0, 1)" }}>
					<span>
						Quiero registrarme <br /> Edición 49
					</span>
				</h2>
				<div className='cDesc'>
					<form onSubmit={onSubmit}>
						<p>
							<label htmlFor='remail' className='gLabel'>
								Correo electrónico:
							</label>
							<input
								{...register("remail", {
									required: {
										value: true,
										message: "Correo es requerido",
									},
									pattern: {
										value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
										message: "Correo no válido",
									},
								})}
							/>
							{errors.remail && (
								<span className='error'>
									{errors.remail.message}
								</span>
							)}
						</p>
						<p>
							<label htmlFor='rpass' className='gLabel'>
								Contraseña:
							</label>
							<input
								// type='password'
								{...register("rpass", {
									required: {
										value: true,
										message: "Contraseña es requerida",
									},
									minLength: {
										value: 6,
										message:
											"Contraseña debe ser mayor a 6 caracteres",
									},
								})}
							/>
							{errors.rpass && (
								<span className='error'>
									{errors.rpass.message}
								</span>
							)}
						</p>
						<p>
							<label htmlFor='rpass2' className='gLabel'>
								Confirmar contraseña:
							</label>
							<input
								// type='password'
								{...register("rpass2", {
									required: {
										value: true,
										message:
											"Confirmar contraseña es requerida",
									},
									minLength: {
										value: 6,
										message:
											"Confirmar contraseña debe ser mayor a 6 caracteres",
									},
									validate: (value) =>
										value === password.current ||
										"Las contraseñas no coinciden",
								})}
							/>
							{errors.rpass2 && (
								<span className='error'>
									{errors.rpass2.message}
								</span>
							)}
						</p>
						<p className='small'>
							<label className='gRC'>
								He leído y acepto los
								<a
									href='https://www.premiosimonbolivar.com/elpremio/terminos-y-condiciones'
									target='_blank'>
									términos y condiciones
								</a>
								.
								<input
									type='checkbox'
									{...register("term", {
										required: true,
									})}
								/>
								<span className='icoC' />
							</label>
						</p>
						<p className='small'>
							<label className='gRC'>
								Autorizo el
								<a
									target='_blank'
									href='https://www.premiosimonbolivar.com/elpremio/consentimiento-para-el-tratamiento-de-datos-personales'
									// className='openFancy cboxElement'
								>
									uso de mis datos personales
								</a>
								.
								<input
									type='checkbox'
									{...register("autorizo", {
										required: true,
									})}
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
		</>
	);
};
