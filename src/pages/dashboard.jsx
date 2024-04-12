import { useGlobalContext } from "../context/globalContext";
import { useState } from "react";
import DashLayOut from "../components/DashLayOut";

const Dashboard = () => {
  const { sideBarSelected } = useGlobalContext();

  const finanzaDash = () => {
    return (
      <div className="w-full max-w-full py-10 bg-white">
        <h1>Finanzas</h1>
      </div>
    );
  };

  const tagsDash = () => {
    return (
      <div>
        <h1>Etiquetas</h1>
      </div>
    );
  };

  return (
    <>
      <div className="pt-24 min-h-screen h-screen bg-slate-100">
        <DashLayOut>
          {sideBarSelected === "finanzas" ? finanzaDash() : tagsDash()}
        </DashLayOut>
      </div>
    </>
  );
};

export default Dashboard;
