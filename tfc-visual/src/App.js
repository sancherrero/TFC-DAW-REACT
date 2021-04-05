//import ContainerFluid from "./components/containerFluid/ContainerFluid";
import NavBar from "./components/nav/NavBar";
import Route from "./components/Route";
import Home from "./components/paginas/Home";
import Configurador from "./components/paginas/Configurador";
import Procesadores from "./components/paginas/Procesadores";
const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/configurador">
        <Configurador />
      </Route>
      <Route path="/procesadores">
        <Procesadores />
      </Route>
    </div>
  );
};

export default App;
