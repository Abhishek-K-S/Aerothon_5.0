import React from "react";


const AddSubAssebmly = () => {
  return (
    //subassembly
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          border: "2px solid red",
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
            style={{ width: "50%", display: "flex" }}
          >
            <label htmlFor="item">SubAssembly Name : </label>
          </div>
          <input
            placeholder={"Item"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"item"}
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
            <label htmlFor="item">Item : </label>
          </div>

          <select
            name="sub_assembly"
            id="sub_assembly"
            placeholder="Roles"
            style={{ width: "450px" }}
          >
            <option value="sub_1">tub</option>
          </select>
        </div>
        

        <div
          style={{
            // display: "flex",
            // flexDirection: "column",
            marginTop: "3%",
          }}
        >
          <button type="submit" className="btn" style={{ width: "450px" }}>
            Add SubAssembly
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSubAssebmly;
