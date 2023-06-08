import './App.css';
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen los gatos mas emprendedores de nuestros productos</h1>
      <Testimonio 
      nombre="Gatoncio"
      pais="Suecia"
      imagen="1"
      cargo="Testeador profesional"
      empresa="Whiskas"
      testimonio="Siempre que me han dado otra cosa la he rechazado con descaro pero cuando comence a probar Whiskas me encanto, cada vez que veo 1 caja de Whiskas me vuelvo loco"
      />
      <Testimonio
      nombre="Gatco"
      pais="España"
      imagen="2"
      cargo="Orientador profesional"
      empresa="Pimec"
      testimonio="Desde que consumo Whiskas mi rendimiento en el trabajo se a visto aumentado un 100% y ahora ronroneo mas"
      />
      <Testimonio
      nombre="Fernando"
      pais="Mar del norte"
      imagen="3"
      cargo="Pirata"
      empresa="Thousand Sunny"
      testimonio="Hace poco descubrimos que el verdadero gran tesoro son los productos de Whiskas, tambien el poder de la amistad pero sobretodo Whiskas"
      />
    </div>

  );
}

export default App;
