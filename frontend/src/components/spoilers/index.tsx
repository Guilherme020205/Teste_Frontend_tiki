import icon_yellow from "../../assets/SVG/icon-yellow.svg";
import tittle1 from "../../assets/SVG/tittle1.svg";
import arrow_down from "../../assets/SVG/arrow down.svg";
import Carrossel from "./carrossel";

export default function Spoilers() {
  return (
    <div
      className="bg-palette-shade rounded-[80px] flex flex-col items-center 
      gap-10 py-10 px-5 w-[400px] 
      sm:py-20 sm:px-20 sm:w-[640px]
      lg:py-20 lg:px-20 lg:w-[1184px] "
    >
      <p
        className="text-palette-shade font-bold stroke 
        text-[14px]
        sm:text-2xl
        lg:text-4xl
        "
      >
        CUIDADO, AO ROLAR PODE CONTER...
      </p>
      <div className="flex flex-col items-center">
        <img className="w-3 " src={`${icon_yellow}`} alt="icon_yellow" />
        <img
          className="mb-10 mt-10 sm:mb-12 sm:mt-12 lg:mb-20 lg:mt-14"
          src={`${tittle1}`}
          alt="~SPOILERS~"
        />
        <img className="w-5w" src={`${arrow_down}`} alt="arrow_down" />
      </div>

      <div className="flex flex-col items-center">
        <p className="text-white font-bold text-xl mt-5 mb-3">
          <strong>VOCÊ JÁ ESTAVA SABENDO?</strong>
        </p>

        <Carrossel />
      </div>
    </div>
  );
}
