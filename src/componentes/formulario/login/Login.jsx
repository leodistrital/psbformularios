import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Conexion } from "../../../service/conexion";
import { liginError } from "../../../service/alertas";
import { useAppStore } from "../../../stores/app.store";

export const Login = () => {
	const datatable = new Conexion();
	// const toogleLoading = useAppStore((state) => state.toogleLoading);
	const login = useAppStore((state) => state.iniciar);
	const estado = useAppStore((state) => state);

	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm();

	const onSubmit = handleSubmit((data) => {
		//    console.log(data);
		// toogleLoading(true);
		datatable.getlogin("", data).then((resp) => {
			// console.log(resp);
			if (resp == 0) {
				console.log("no puede seguir");
				liginError(Swal);
			} else {
				console.log("puede seguir");
				login(resp.usuario, resp.token, resp.perfil);
			}
			// toogleLoading(false);
		});
		// console.log("enviado");
		// console.log({ data });
		// toogleLoading(true);
		console.log(estado);
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
					<form id='formLogin' method='POST' noValidate='novalidate'>
						<p>
							<label htmlFor='lemail' className='gLabel'>
								Correo electrónico:
							</label>
							<input type='email' name='lemail' id='lemail' />
						</p>
						<p>
							<label htmlFor='lpass' className='gLabel'>
								Contraseña:
							</label>
							<input type='password' name='lpass' id='lpass' />
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
