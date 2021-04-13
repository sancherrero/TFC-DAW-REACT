//import ContainerFluid from "./components/containerFluid/ContainerFluid";
import NavBar from "./components/nav/NavBar";
import Route from "./components/Route";
import Home from "./components/paginas/Home";
import Configurador from "./components/paginas/Configurador";
import ConstrucComponente from "./components/paginas/ConstrucComponente";
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
      <Route path="/nombre">
        <ConstrucComponente componentType="procesador" title="Procesadores" />
      </Route>
      <Route path="/nombre">
        <ConstrucComponente componentType="procesador" title="Procesadores" />
      </Route>
    </div>
  );
};

export default App;
