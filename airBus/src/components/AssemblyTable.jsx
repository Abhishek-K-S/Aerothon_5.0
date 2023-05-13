import React from "react";

const AssemblyTable = () => {
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
        Assembly Data
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
            <th>Process</th>
            <th>Process Id</th>
            <th>Machine Id</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ border: "1px solid #FFC06E" }}>
            <td>Tiger</td>
            <td>Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #FFC06E" }}>
            <td>Tiger</td>
            <td>Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #FFC06E" }}>
            <td>Tiger</td>
            <td>Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssemblyTable;
