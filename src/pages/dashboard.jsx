import { useGlobalContext } from "../context/globalContext";
import { useState } from "react";
import DashLayOut from "../components/DashLayOut";
import Finance from "./dashboardPages/finance";
import Tags from "./dashboardPages/tags"

const Dashboard = () => {
  const { sideBarSelected } = useGlobalContext();

  return (
    <>
      <div className="pt-24 min-h-screen h-full bg-slate-100">
        <DashLayOut>
          {sideBarSelected === "finanzas" ? <Finance></Finance> : <Tags></Tags>}
        </DashLayOut>
      </div>
    </>
  );
};

export default Dashboard;
