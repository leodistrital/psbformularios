import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Conexion } from "../../../service/conexion";
import { liginError } from "../../../service/alertas";
import { useAppStore } from "../../../stores/app.store";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const datatable = new Conexion();
	const navigate = useNavigate();
	const login = useAppStore((state) => state.iniciar);
	// const estado = useAppStore((state) => state);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		console.log(data);
		// toogleLoading(true);
		datatable.getlogin("", data).then((resp) => {
			console.log(resp);
			if (resp == 0) {
				console.log("no puede seguir");
				liginError(Swal);
			} else {
				console.log("puede seguir");
				login(resp.mail , resp.token, resp.codigo);
				navigate("/panel");
			}
			// toogleLoading(false);
		});
	});

	return (
		<>
			<div className='cForm cRight'>
				<h2
					className='cTitle'
					style={{ color: "rgba(250, 220, 0, 1)" }}>
					<span>
						Soy usuario registrado <br /> Edición 49
					</span>
				</h2>
				<div className='cDesc'>
					<form onSubmit={onSubmit}>
						<p>
							<label htmlFor='remail' className='gLabel'>
								Correo electrónico:
							</label>
							<input
							value="leo@leo.com"
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
							<label htmlFor='lpass' className='gLabel'>
								Contraseña:
							</label>
							<input
							value="123456"
								type='password'
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
		</>
	);
};
