import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

import { useState } from "react";

// import arrow_left from "../../../assets/SVG/arrow-left.svg";
// import arrow_right from "../../../assets/SVG/arrow-right.svg";

import lock from "../../../assets/SVG/lock.svg";
import banner1 from "../../../assets/Images/imagem.jpg";

const list_banner = [
  { id: "1", titulo: "16 DE MARÇO", url_banner: banner1 },
  { id: "2", titulo: "17 DE MARÇO", url_banner: "" },
  { id: "3", titulo: "18 DE MARÇO", url_banner: "" },
  { id: "4", titulo: "21 DE MARÇO", url_banner: "" },
  { id: "5", titulo: "22 DE MARÇO", url_banner: "" },
  { id: "6", titulo: "23 DE MARÇO", url_banner: "" },
  { id: "7", titulo: "24 DE MARÇO", url_banner: "" },
  { id: "8", titulo: "30 DE MARÇO", url_banner: "" },
  { id: "9", titulo: "30 DE MARÇO", url_banner: "" },
];

import facebook from "../../../assets/SVG/facebook.svg";
import linkedin from "../../../assets/SVG/linkedin.svg";
import twitter from "../../../assets/SVG/twitter.svg";
import whatsapp from "../../../assets/SVG/whatsapp.svg";

export default function Carrossel() {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [mainBanner, setMainBanner] = useState(
    list_banner[0].url_banner || lock
  );
  
  const groupSize = 4;
  const totalGroups = Math.ceil(list_banner.length / groupSize);

  const startIndex = currentGroup * groupSize;
  const visibleBanners = list_banner.slice(startIndex, startIndex + groupSize);

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % totalGroups);
  };

  const goToGroup = (index: number) => {
    setCurrentGroup(index);
  };

  const newBanner = (url_banner: string) => {
    setMainBanner(url_banner !== "" ? url_banner : lock);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="bg-palette-base rounded-[40px] w-[1000px] h-[523px] flex justify-center items-end shadow-[-10px_20px_50px_rgba(142,13,255,20)] group">
        <img
          className={
            mainBanner === lock ? "w-20 absolute mb-[212px]" : "w-[1000px] rounded-[40px] absolute"
          }
          src={mainBanner}
          alt="banner principal"
        />
        <div className="z-10 bg-black/90 flex flex-row justify-center items-center h-[70px] w-full invisible group-hover:visible rounded-bl-[40px] rounded-br-[40px] transition duration-1000 gap-2">
          <p className="text-palette-white text-xs font-bold">Espalhe este SPOILER:</p> 
          <i><img src={facebook} alt="facebook"/></i>
          <i><img src={linkedin} alt="linkedin"/></i>
          <i><img src={whatsapp} alt="whatsapp"/></i>
          <i><img src={twitter} alt="twitter"/></i>
        </div>
      </div>

      <p className="text-white font-bold text-xl mt-8 mb-5">
        CONFIRA O QUE JÁ SAIU O QUE ESTÁ POR VIR!
      </p>

      <div className="flex flex-row items-center space-x-4">
        <button
          onClick={prevGroup}
          className="bg-palette-white rounded-full p-1 shadow-[3px_5px_0px_rgba(252,43,238,100)]"
        >
          <RiArrowLeftSFill className="text-4xl" />
        </button>

        <ul className="flex flex-row justify-center items-center space-x-6">
          {visibleBanners.map((list) => (
            <li key={list.id}>
              <button
                className="group"
                onClick={() => newBanner(list.url_banner)}
              >
                <div className="w-52 flex flex-col gap-2">
                  <div
                    className="bg-palette-base w-52 h-28 rounded-[20px] flex justify-center items-center
                  shadow-[-10px_20px_50px_rgba(143,13,255,0.2)]
                  group-hover:border-white 
                  group-hover:border
                  transition
                  duration-300
                   "
                  >
                    {list.url_banner === "" ? (
                      <img
                        className="w-10 "
                        src={lock}
                        alt={`banner de ${list.titulo}`}
                      />
                    ) : (
                      <img
                        className="w-52 rounded-2xl"
                        src={list.url_banner}
                        alt={`banner de ${list.titulo}`}
                      />
                    )}
                  </div>
                  <p className="text-[14px] font-bold text-palette-pink group-hover:text-palette-white transition duration-300">
                    {list.titulo}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={nextGroup}
          className="bg-palette-white rounded-full p-1 shadow-[3px_5px_0px_rgba(252,43,238,100)]"
        >
          <RiArrowRightSFill className="text-4xl" />
        </button>
      </div>

      <div className="flex mt-4 space-x-2">
        {Array.from({ length: totalGroups }).map((_, index) => (
          <span
            key={index}
            onClick={() => goToGroup(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === currentGroup ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
