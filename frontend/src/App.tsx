import Formulario from "./components/form";
import Spoilers from "./components/spoilers";

import logo_tiki from "./assets/SVG/logo-tiki.svg";
import tittle2 from "./assets/SVG/tittle2.svg";
import icon_yellow from "./assets/SVG/icon-yellow.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-56 my-10" src={`${logo_tiki}`} alt="Tiki" />
      <Spoilers />
      <div className="flex flex-col items-center gap-7 my-8">
        <img className="w-52" src={`${tittle2}`} alt="Quero fazer parte!" />
        <img className="w-3" src={`${icon_yellow}`} alt="icon_yellow" />
      </div>

      <Formulario />
      
    </div>
  );
}

export default App;
