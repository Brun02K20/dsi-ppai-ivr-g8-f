import logo from './logo.svg';
import './App.css';
import { RegistrarRespuestaDeOperador } from './components/RegistrarRespuestaDeOperador/RegistrarRespuestaDeOperador.jsx';
import { Validacion } from './components/Validacion/Validacion.jsx';
function App() {
  return (
    <>
      <RegistrarRespuestaDeOperador></RegistrarRespuestaDeOperador>
      <Validacion></Validacion>
    </>
  );
}

export default App;
