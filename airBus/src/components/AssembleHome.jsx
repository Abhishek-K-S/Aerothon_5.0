import React from "react";
import AddAssembly from "./AddAssembly";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";
import AssemblyTable from "./AssemblyTable";
import { getQuery } from "../axiosService";

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

    default:
      componentToRender = <AssemblyTable />;
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

export default AssembleHome;
