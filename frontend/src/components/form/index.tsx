import { useState } from "react";

export default function Formulario() {
  const [botao, setBotao] = useState("ENVIAR");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [aceito, setAceito] = useState(false);

  function enviaForm(e: React.FormEvent) {
    e.preventDefault(); // impede o recarregamento da página
    setBotao("Enviando...");

    setTimeout(() => {
      setNome("");
      setEmail("");
      setAceito(false);
      setBotao("ENVIAR");
    }, 3000);
  }

  return (
    <div className="bg-palette-shade w-[528px] flex flex-col justify-center items-center p-14 rounded-[80px]">
      <p className="flex text-center text-xs font-bold text-white mb-10">
        CADASTRE-SE E FIQUE POR DENTRO <br /> DAS NOVIDADES
      </p>

      <form className="flex flex-col gap-5 " onSubmit={enviaForm}>
        <input
          className="bg-palette-shade pl-7 h-[70px] w-96 rounded-[40px] border border-white text-[14px] text-white placeholder:text-white focus:placeholder:text-palette-pink focus:text-palette-pink focus:border-palette-pink focus:outline-none"
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="bg-palette-shade pl-7 h-[70px] w-96 rounded-[40px] border border-white text-[14px] text-white placeholder:text-white focus:placeholder:text-palette-pink focus:text-palette-pink focus:border-palette-pink focus:outline-none"
          placeholder="meuemail@gmail.com"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex flex-row gap-1">
          <input
            type="checkbox"
            name="inputradio"
            id="inputradio"
            checked={aceito}
            onChange={(e) => setAceito(e.target.checked)}
          />
          <label className="text-white text-xs" htmlFor="inputradio">
            Declaro que li e aceito a politica de privacidade
          </label>
        </div>

        <button
          type="submit"
          className="bg-palette-white my-5  max-w-96 rounded-[40px] shadow-[3px_5px_0px_rgba(252,43,238,100)] text-[24px] font-bold px-36 py-2"
        >
          {botao}
        </button>
      </form>
    </div>
  );
}
