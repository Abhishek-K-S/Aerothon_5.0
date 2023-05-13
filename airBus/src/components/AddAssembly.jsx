import React from "react";


const AddAssembly = () => {
  return (
    //assembly
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          // className="inpContainer"
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <div
            // className="inputHold"
            style={{ width: "100%", display: "flex" }}
          >
            <label htmlFor="sub_assembly">Sub Assembly : </label>
          </div>
          <select
            name="sub_assembly"
            id="sub_assembly"
            placeholder="Roles"
            style={{ width: "450px" }}
          >
            <option value="sub_1">sub_1</option>
          </select>
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <div
            // className="inputHold"
            style={{ width: "50%", display: "flex" }}
          >
            <label htmlFor="item">Process Name : </label>
          </div>

          <input
            placeholder={"process_name"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"process_name"}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <div
            // className="inputHold"
            style={{ width: "50%", display: "flex" }}
          >
            <label htmlFor="in_date">In Date : </label>
          </div>

          <input
            placeholder={"In Date"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"in_date"}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <div
            // className="inputHold"
            style={{ width: "50%", display: "flex" }}
          >
            <label htmlFor="out_date">Out date : </label>
          </div>

          <input
            placeholder={"Out date"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"out_date"}
          />
        </div>
        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <button type="submit" className="btn" style={{ width: "450px" }}>
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAssembly;
