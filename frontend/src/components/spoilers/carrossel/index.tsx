import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { useState, useEffect } from "react";

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
  const [groupSize, setGroupSize] = useState(4);

  useEffect(() => {
    const updateGroupSize = () => {
      if (window.innerWidth > 1024) {
        setGroupSize(4);
      } else {
        setGroupSize(1);
      }
    };

    // Define inicialmente
    updateGroupSize();

    // Escuta mudanças de tamanho
    window.addEventListener("resize", updateGroupSize);

    // Limpeza
    return () => window.removeEventListener("resize", updateGroupSize);
  }, []);

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
      <div
        className="bg-palette-base flex justify-center items-end shadow-[-10px_20px_50px_rgba(142,13,255,20)] group
        rounded-[40px] w-[380px] h-[200px]
        sm:w-[500px] sm:h-[261px]
        lg:w-[1000px] lg:h-[523px]
        "
      >
        <img
          className={
            mainBanner === lock
              ? "w-10 absolute mb-[80px] sm:mb-[100px] lg:w-20 lg:mb-[212px]"
              : "w-[380px] rounded-[40px] absolute sm:w-[500px] lg:w-[1000px]"
          }
          src={mainBanner}
          alt="banner principal"
        />
        <div className="z-10 bg-black/90 flex flex-row justify-center items-center w-full invisible rounded-bl-[40px] rounded-br-[40px] transition duration-1000 gap-2 h-[70px] group-hover:visible">
          <p className="text-palette-white text-xs font-bold ">
            Espalhe este SPOILER:
          </p>
          <button>
            <i>
              <img src={facebook} alt="facebook" />
            </i>
          </button>
          <button>
            <i>
              <img src={linkedin} alt="linkedin" />
            </i>
          </button>
          <button>
            <i>
              <img src={whatsapp} alt="whatsapp" />
            </i>
          </button>
          <button>
            <i>
              <img src={twitter} alt="twitter" />
            </i>
          </button>
        </div>
      </div>

      <p className="text-white font-bold text-[14px] mt-8 mb-5 sm:text-[24px]">
        CONFIRA O QUE JÁ SAIU O QUE ESTÁ POR VIR!
      </p>

      <div className="flex flex-row items-center space-x-4 sm:space-x-4 lg:space-x-4">
        <button
          onClick={prevGroup}
          className="bg-palette-white rounded-full p-1 shadow-[3px_5px_0px_rgba(252,43,238,100)]"
        >
          <RiArrowLeftSFill className="text-4xl" />
        </button>

        <ul className="flex flex-row justify-center items-center space-x-1 sm:space-x-6">
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
                  <p className="font-bold text-palette-pink group-hover:text-palette-white transition duration-300 text-[14px]">
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
