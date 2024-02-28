import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import { Personas } from "../pages/Personas";
// import { Eventos } from "../pages/Eventos";
// import { Empresas } from "../pages/Empresas";
// import { Reportes } from '../pages/Reportes';
// import { Segmentos } from "../pages/Segmentos";
// import { Sectores } from "../pages/Sectores";
// import { Cuenta } from "../pages/Cuenta";
// import { Titulos } from "../pages/Titulos";
import { Panel } from '../pages/formulario/Panel';
import { Paso1 } from '../pages/formulario/Paso1';
import { Paso2 } from '../pages/formulario/Paso2';
import { Paso3 } from '../pages/formulario/Paso3';
import { Paso4 } from '../pages/formulario/Paso4';
import { Paso5 } from '../pages/formulario/Paso5';
import { Autores } from '../pages/formulario/Autores';

export const RenderRoutes = () => {
	return (
		<>
			<Routes>
				<Route
					index
					element={
						<React.Suspense fallback={<>...</>}>
							<Panel />
						</React.Suspense>
					}
				/>
				<Route
					path='paso1'
					element={
						<React.Suspense fallback={<>...</>}>
							<Paso1 />
						</React.Suspense>
					}
				/>
				<Route
					path='paso2'
					element={
						<React.Suspense fallback={<>...</>}>
							<Paso2 />
						</React.Suspense>
					}
				/>
				<Route
					path='paso3'
					element={
						<React.Suspense fallback={<>...</>}>
							<Paso3 />
						</React.Suspense>
					}
				/>
				<Route
					path='paso4'
					element={
						<React.Suspense fallback={<>...</>}>
							<Paso4 />
						</React.Suspense>
					}
				/>
				<Route
					path='paso5'
					element={
						<React.Suspense fallback={<>...</>}>
							<Paso5 />
						</React.Suspense>
					}
				/>
				<Route
					path='autor'
					element={
						<React.Suspense fallback={<>...</>}>
							<Autores />
						</React.Suspense>
					}
				/>
				{/* <Route
					path='empresas'
					element={
						<React.Suspense fallback={<>...</>}>
							<Empresas />
						</React.Suspense>
					}
				/>
				<Route
					path='eventos'
					element={
						<React.Suspense fallback={<>...</>}>
							<Eventos />
						</React.Suspense>
					}
				/>
				<Route
					path='reportes'
					element={
						<React.Suspense fallback={<>...</>}>
							<Reportes />
						</React.Suspense>
					}
				/>
				<Route
					path='segmentos'
					element={
						<React.Suspense fallback={<>...</>}>
							<Segmentos />
						</React.Suspense>
					}
				/>
				<Route
					path='sectores'
					element={
						<React.Suspense fallback={<>...</>}>
							<Sectores />
						</React.Suspense>
					}
				/>
				<Route
					path='titulos'
					element={
						<React.Suspense fallback={<>...</>}>
							<Titulos />
						</React.Suspense>
					}
				/>
				<Route
					path='cuenta'
					element={
						<React.Suspense fallback={<>...</>}>
							<Cuenta />
						</React.Suspense>
					}
				/> */}
				
				<Route path='*' element={<Panel />} />
			</Routes>
		</>
	);
};
