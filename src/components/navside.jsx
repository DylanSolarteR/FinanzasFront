import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

function NavButton({ text, imgsrc, handler }) {
  return (
    <Link
      className="py-4 text-slate-700 hover:bg-slate-800 group rounded transition-colors duration-300 flex justify-center items-center"
      onClick={handler}
    >
      <img
        alt="icon"
        src={imgsrc}
        className={"mx-1 p-2 rounded-full bg-slate-200"}
      />
      <div className="text-slate-700 group-hover:text-slate-200 text-center mx-auto text-xl">
        {text}
      </div>
    </Link>
  );
}

export default function NavSide() {
  const { setSideBarSelected } = useGlobalContext();
  let [state, setstate] = useState(0);
  const cambiar_estado = (state) => {
    setstate(state == 0 ? 1 : 0);
  };

  let navigation = [
    [
      "/dollar-sign.svg",
      "Finanzas",
      () => {
        setSideBarSelected("finanzas");
      },
    ],
    [
      "/tag.svg",
      "Etiquetas",
      () => {
        setSideBarSelected("tags");
      },
    ],
  ];

  return (
    <>
      <div
        className={
          "bg-slate-200 duration-100 transition-all " +
          (state == 1 ? "animation-expand w-64" : "w-12")
        }
      >
        <button
          className="bg-slate-300 transition-colors duration-300 inline-flex w-full h-10 hover:bg-slate-400 items-center "
          onClick={() => {
            cambiar_estado(state);
          }}
        >
          <img
            alt="menu"
            src={state == 1 ? "/x.svg" : "/menu.svg"}
            className="fill-slate-100 text-slate-100 px-2 h-full"
          />
          <div className={"text-slate-700 text-center mx-auto text-xl"}>
            {state == 1 ? "Menu" : ""}
          </div>
        </button>
        {navigation.map((dato) => (
          <NavButton
            text={state == 1 ? dato[1] : ""}
            imgsrc={dato[0]}
            handler={dato[2]}
          />
        ))}
      </div>
    </>
  );
}
