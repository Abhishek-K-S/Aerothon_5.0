import React, {useEffect, useState} from "react";
import { getQuery } from "../axiosService";

const FabricTable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getQuery('get/faborder').then(res=>{
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
        className="table nowrap"
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
                  <td>{ele.itemName}</td>
                  <td>{ele._id}</td>
                  <td>{ele.materialsRequired}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.inDate}</td>
                  <td>{ele.outDate}</td>
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
