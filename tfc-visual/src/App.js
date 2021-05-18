//import ContainerFluid from "./components/containerFluid/ContainerFluid";
import NavBar from "./components/nav/NavBar";
import Route from "./components/Route";
import Home from "./components/paginas/Home";
import Configurador from "./components/paginas/Configurador";
import ConstrucComponente from "./components/paginas/ConstrucComponente";
//import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/configurador">
        <Configurador />
      </Route>
      <Route path="/procesadores">
        <ConstrucComponente componentType="procesador" title="Procesadores" />
      </Route>
      <Route path="/tarjetas_graficas">
        <ConstrucComponente componentType="tarjeta_grafica" title="Tarjetas gráficas" />
      </Route>
      <Route path="/placas_base">
        <ConstrucComponente componentType="placa_base" title="Placas base" />
      </Route>
      <Route path="/memorias_ram">
        <ConstrucComponente componentType="memoria_ram" title="Memoria ram" />
      </Route>
      <Route path="/discos_duros">
        <ConstrucComponente componentType="disco_duro" title="Discos duros" />
      </Route>
      <Route path="/fuentes_alimentacion">
        <ConstrucComponente componentType="fuente_alimentacion" title="Fuentes de alimentación" />
      </Route>
      <Route path="/cajas">
        <ConstrucComponente componentType="caja" title="Cajas / Torres" />
      </Route>
      <Route path="/componentes">
        <ConstrucComponente componentType="componentes" title="Componentes" />
      </Route>
    </div>
  );
};

export default App;
