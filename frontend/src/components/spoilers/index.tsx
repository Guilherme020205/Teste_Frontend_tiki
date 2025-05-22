import { useState } from "react";

import icon_yellow from "../../assets/SVG/icon-yellow.svg";
import tittle1 from "../../assets/SVG/tittle1.svg";
import arrow_down from "../../assets/SVG/arrow down.svg";

import aa from "../../assets/Images/imagem.jpg";

export default function Spoilers() {
  const [banner, setBanner] = useState(aa);

  return (
    <div className="bg-palette-shade rounded-[80px] py-12 px-36 flex flex-col items-center gap-10">
      <p className="text-palette-shade font-bold text-4xl stroke">
        CUIDADO, AO ROLAR PODE CONTER...
      </p>
      <div className="flex flex-col items-center">
        <img className="w-3 " src={`${icon_yellow}`} alt="icon_yellow" />
        <img className="mb-20 mt-14" src={`${tittle1}`} alt="~SPOILERS~" />
        <img className="w-5" src={`${arrow_down}`} alt="arrow_down" />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-xl mt-5 mb-3">
          <strong>VOCÊ JÁ ESTAVA SABENDO?</strong>
        </p>
        <img className="rounded-[40px]" src={`${banner}`} alt="banner" />
        <p className="text-white font-bold text-xl mt-5 mb-3">
          CONFIRA O QUE JÁ SAIU O QUE ESTÁ POR VIR!
        </p>
        
      </div>
    </div>
  );
}
