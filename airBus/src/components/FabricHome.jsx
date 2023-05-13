import React from 'react'
import AddFrabircation from './AddFrabircation';
import FabricTable from './FabricTable';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/header.css';
import { getQuery } from '../axiosService';

const FabricHome = () => {
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

      case "addnewdata":
        componentToRender = <AddFrabircation />;
        break;
      case "schedule":
        componentToRender = <ScheduleProcess />;
        break;

      default:
        componentToRender = <FabricTable />;
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
                  onClick={() => handleOptionClick("FabricTable")}
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
                <a
                  class="header__link"
                  onClick={() => handleOptionClick("schedule")}
                >
                  Schedule New Process
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
}

export default FabricHome