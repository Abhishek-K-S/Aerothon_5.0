import React from "react";

import FabricTable from "./FabricTable";
import { useState } from "react";
import AssemblyTable from "./AssemblyTable";
import SubAssemblyTable from "./SubAssemblyTable";
import { Link, useNavigate } from "react-router-dom";
import { getQuery } from "../axiosService";


const AdminHome = () => {
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
    case "FabricTable":
      componentToRender = <FabricTable />;
      break;

    case "SubAssemblyTable":
      componentToRender = <SubAssemblyTable />;
      break;
    case "AssemblyTable":
      componentToRender = <AssemblyTable />;
      break;

    default:
      componentToRender = <FabricTable />;
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <h1 className="header__logo__name">Logo</h1>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("FabricTable")}
                >
                  Fabrication
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("SubAssemblyTable")}
                >
                  Sub Assembly
                </a>
              </li>
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("AssemblyTable")}
                >
                  Assembly
                </a>
              </li>
              <li className="header__item">
                <span className="header__link" onClick={handleLogout}>
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

export default AdminHome;
