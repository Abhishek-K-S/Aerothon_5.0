import React from "react";
import AddAssembly from "./AddAssembly";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import AssemblyTable from "./AssemblyTable";
import { getQuery } from "../axiosService";
import ScheduleSubAssemble from "./ScheduleSubAssemble";

const AssembleHome = () => {
  let componentToRender;
  const [selectedComponent, setSelectedComponent] = useState("FabricTable");
  function handleOptionClick(option) {
    setSelectedComponent(option);
  }

  const navigation = useNavigate()

  const handleLogout = () =>{
    getQuery('logout').then(res=>{
      if(!res.error && res.data.logout) navigation('/')
    })
  }

  switch (selectedComponent) {
    case "AssemblyTable":
      componentToRender = <AssemblyTable />;
      break;

    case "addnewdata":
      componentToRender = <AddAssembly />;
      break;
    case "schedule":
      componentToRender = <ScheduleSubAssemble />;
      break;

    default:
      componentToRender = <AssemblyTable />;
  }
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header__logo">
            <h1 class="header__logo__name">InnovateX</h1>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("AssemblyTable")}
                >
                  Data
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("addnewdata")}
                >
                  Add New Data
                </a>
              </li>
<<<<<<< HEAD
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("schedule")}
                >
                  Scehdule Sub Assemble
                </a>
              </li>
              <li class="header__item">
                <span class="header__link" onClick={handleLogout}>
=======
              <li className="header__item">
                <span className="header__link" onClick={handleLogout}>
>>>>>>> main
                  Logout
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {componentToRender}
    </>
  );
};

export default AssembleHome;
