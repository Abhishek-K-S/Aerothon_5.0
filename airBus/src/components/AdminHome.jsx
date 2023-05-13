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
      <header class="header">
        <div class="container">
          <div class="header__logo">
            <h1 class="header__logo__name">Logo</h1>
          </div>
          <nav class="header__nav">
            <ul class="header__menu">
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("FabricTable")}
                >
                  Fabrication
                </a>
              </li>
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("SubAssemblyTable")}
                >
                  Sub Assembly
                </a>
              </li>
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("AssemblyTable")}
                >
                  Assembly
                </a>
              </li>
              <li class="header__item">
                <span class="header__link" onClick={handleLogout}>
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
