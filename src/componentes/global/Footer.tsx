// import Modal from "react-responsive-modal";
// import { useAppStore } from "../../stores/app.store";

export const Footer = () => {
	// let posicion = "none";
	// const isloading = useAppStore((state) => state.isloading);

	// posicion = isloading ? "block" : "none";
	// posicion = "block";

	return (
		<>
			<footer className='pageFooter'>
				<div className='maxW'>
					<div className='logoFoot'>
						<img
							src='images/site/logo-psb-2.svg'
							alt='Premio Nacional de Periodismo Simón Bolívar'
						/>
					</div>
					<div className='contFoot'>
						<p>
							<a
								href='https://www.premiosimonbolivar.com/premio.php?cod=XG3C6fwm00tyUjxz05wAXG3C6fwm&sel=1$$-1$$-qm4nNEHftm9uNBL12CXG3C6fwm'
								target='_blank'
								className='txtBig'>
								<strong>
									Términos y condiciones del Premio
								</strong>
							</a>
							<br />
							<br />
							<br />
							{/*  Av. El Dorado # 68 B-31 piso 9<br> */}
							Bogotá, Colombia
							<br />
							<a
								href='mailto:info@premiosimonbolivar.com'
								style={{ fontWeight: "bold" }}>
								info@premiosimonbolivar.com
							</a>
						</p>
						{/*Social networks*/}
						<div className='gSocialNet'>
							<ul>
								<li>
									<a
										href='https://www.youtube.com/channel/UC73WkD_t4kAQ_0ImIUdjfXA'
										target='_blank'
										className='icoSocial youtube'>
										youtube
									</a>
								</li>
								<li>
									<a
										href='https://twitter.com/PNPSimonBolivar'
										target='_blank'
										className='icoSocial twitter'>
										twitter
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com/PremioPeriodismoSimonBolivar'
										target='_blank'
										className='icoSocial facebook'>
										facebook
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com/pnpsimonbolivar/'
										target='_blank'
										className='icoSocial instagram'>
										instagram
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>

			{/* <Modal  open={isloading} 
		
					center
					showCloseIcon={false}
					classNames={{
          modal: 'customModal',
        }}
		>
			<div
				className='gLoading'
				style={{ display: posicion, marginTop: "0px" }}></div>
		</Modal> */}
		</>
	);
};
