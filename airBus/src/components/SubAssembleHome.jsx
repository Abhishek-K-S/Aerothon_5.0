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
      <header className="header">
        <div className="container">
          <div className="header__logo">
            <h1 className="header__logo__name">InnovateX</h1>
          </div>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__item">
                <a
                  className="header__link"
                  onClick={() => handleOptionClick("SubAssemblyTable")}
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
              <li className="header__item">
                <span className="header__link"  onClick={handleLogout}>
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
