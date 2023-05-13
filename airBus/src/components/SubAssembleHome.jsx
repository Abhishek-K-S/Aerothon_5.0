import React from "react";
import AddSubAssebmly from "./AddSubAssebmly";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../styles/header.css";
import SubAssemblyTable from "./SubAssemblyTable";
import { getQuery } from "../axiosService";



const SubAssembleHome = () => {

  const navigation = useNavigate()

  const handleLogout = () =>{
    getQuery('logout').then(res=>{
      if(!res.error && res.data.logout) navigation('/')
    })
  }

    let componentToRender;
    const [selectedComponent, setSelectedComponent] = useState("FabricTable");
    function handleOptionClick(option) {
      setSelectedComponent(option);
    }

    switch (selectedComponent) {
      case "SubAssemblyTable":
        componentToRender = <SubAssemblyTable />;
        break;

      case "addnewdata":
        componentToRender = <AddSubAssebmly />;
        break;

      default:
        componentToRender = <SubAssemblyTable />;
    }
  return (
    <>
      <header class="header">
        <div class="container">
          <div class="header__logo">
            <h1 class="header__logo__name">InnovateX</h1>
          </div>
          <nav class="header__nav">
            <ul class="header__menu">
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("SubAssemblyTable")}
                >
                  Data
                </a>
              </li>
              <li class="header__item">
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("addnewdata")}
                >
                  Add New Data
                </a>
              </li>
              <li class="header__item">
                <span class="header__link"  onClick={handleLogout}>
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

export default SubAssembleHome;
