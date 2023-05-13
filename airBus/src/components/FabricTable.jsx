import React, {useEffect, useState} from "react";
import { getQuery } from "../axiosService";

const FabricTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getQuery('getview/FABRICATION').then(res=>{
      if(!res.error) setData(res.data.list)
    })
  }, [])
  

  return (
    <div style={{ marginTop: "5%" }}>
      <h2
        style={{
          position: "relative",
          left: "-40%",
          marginBottom: "2%",
          color: "#20ab6c",
        }}
      >
        Fabrication Data
      </h2>
      <table
        id="basic-data-table"
        class="table nowrap"
        style={{ width: "100%" }}
      >
        <thead>
          <tr
            style={{
              paddings: "10px",
              height: "40px",
            }}
          >
            <th>Item</th>
            <th>Item id</th>
            <th>Raw Material</th>
            <th>Quantity</th>
            <th>In Date</th>
            <th>Out Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(ele=>{
              return (
                <tr style={{ border: "1px solid #FFC06E" }}>
                  <td>Tiger</td>
                  <td>Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default FabricTable;
