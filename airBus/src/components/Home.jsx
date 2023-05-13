import React, {useState, useEffect} from "react";
import AdminHome from "./AdminHome";    
import FabricHome from "./FabricHome";
import AssembleHome from "./AssembleHome";
import SubAssembleHome from "./SubAssembleHome";
import { getQuery } from "../axiosService";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
  const [role, setRole] = useState("NOTHING")

  const navigation = useNavigate()


  useEffect(()=>{
    let res = localStorage.getItem('userID')
    if(res){
      getQuery('role/'+res).then(res=>{
        console.log(res)
        if(res.data) setRole(res.data.role);
      })
    }
    else{
      navigation('/')
    }
    
  }, [])

  if(role == 'ADMIN')
    return (
      <div>
        <AdminHome/>
      </div>
    );
  else if(role=="FABRICATION")
      return (
        <div>
          <FabricHome/>
        </div>
      );
  else if(role=="SUB-ASSEMBLY")
    return (
      <div>
        <SubAssembleHome/>
      </div>
    );
  else if(role=="ASSEMBLY")
    return (
      <div>
        <AssembleHome/>
      </div>
    );

  return (
    <div>
    </div>
  );
};

export default Home;
