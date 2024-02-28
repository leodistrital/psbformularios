
import { Intro } from '../login/Intro';
import { useAppStore } from '../../../stores/app.store';

export const Header = () => {


	const {inscripcion:inscripcionData} = useAppStore((state) => state);
  
return (
    <>
    <header className="pageHeader">
  <div className="maxW">
    <h1 className="logoPage">
      <a href="panel">
        <span className="gHidden">
          Premio Nacional de Periodismo Simón Bolívar
        </span>
        <img
          src="images/site/logo-psb.svg"
          alt="Premio Nacional de Periodismo Simón Bolívar"
        />
      </a>
    </h1>
    <button type="button" id="btnMMenu" className="rbtn btnMMenu">
      <span className="box">
        <span className="inner" />
      </span>
    </button>
    {/*Content Main menu*/}
    <div className="contMMenu">
      <div className="vAlign">
       
        {/* <h2>INSCRIPCIÓN DE TRABAJOS</h2> */}
       
        <br />
        <br />
        <br />
         <pre>{JSON.stringify(inscripcionData, null, 2)}</pre>
        <p className="user">
          <strong className="des_login"> leonardo.cortes@mottif.com</strong>
          <a href="index.php?c=0" className="gBtn txtUp">
            <span>Cerrar sesión</span>
          </a>
        </p>
        {/* <p class="title rec_destacar">La convocatoria se cierra el jueves 9 de mayo de 2019</p>    */}
        {/* <p class="title rec_destacar">La convocatoria se cierra el miércoles 11 de mayo a las 6:00 p.m.</p> */}
      </div>
    </div>
    
    {/*End Content Main menu*/}
  </div>
</header>
    <Intro />
    </>
  )
}
