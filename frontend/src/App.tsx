import Formulario from "./components/form";
import Spoilers from "./components/spoilers";

import logo_tiki from "./assets/SVG/logo-tiki.svg";
import tittle2 from "./assets/SVG/tittle2.svg";
import icon_yellow from "./assets/SVG/icon-yellow.svg";

function App() {
  return (
    <div className="flex flex-col justify-center items-center select-none py-20">
      <img className="w-56 mb-16" src={`${logo_tiki}`} alt="Tiki" />
      <Spoilers />
      <div className="flex flex-col items-center gap-16 mb-20">
        <img
          className="w-[550px] mt-20"
          src={`${tittle2}`}
          alt="Quero fazer parte!"
        />
        <img className="w-3" src={`${icon_yellow}`} alt="icon_yellow" />
      </div>

      <Formulario />

      <div className="flex flex-col items-center max-w-[970px] text-center mt-28">
        <h2 className="text-[18px] font-bold text-palette-white mb-1">
          TEXTO LEGAL
        </h2>
        <p className="text-[10px] text-palette-white mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui
          odio, ullamcorper vel leo sed, lacinia aliquam tortor. Donec in nulla
          nisi. Integer imperdiet vulputate elit, sed varius sem commodo vel.
          Vestibulum ac lacus eros. Nulla facilisi. Morbi omare, erat lobortis
          semper aliquet, ligula neque pulvinar tellus, a eleifend est ligula a
          nulla. Ut ut sapien lacinia odio ullamcorper aliquet. Nullam ac neque
          lorem. Nulla id erat in massa hendrerit consequat.{" "}
        </p>
        <p className="text-[10px] text-palette-white">
          Nulla fringilla pretium pharetra. In lacinia vulputate lectus, ut
          commodo neque aliquam nec. Vestibulum vitae ante turpis. Donec quis
          aliquet elit, non dictum neque. Vivamus tempor neque sit amet ante
          auctor, et rhoncus leo vehicula. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Cras ac metus augue. Curabitur eget
          tincidunt erat. Integer vitae feugiat dul, nec auctor nunc.
          Suspendisse interdum augue et ipsum pharetra, vitae cursus erat
          tincidunt.
        </p>
      </div>
    </div>
  );
}

export default App;
