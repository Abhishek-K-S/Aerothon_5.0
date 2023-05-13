import React from "react";

const ScheduleProcess = () => {
  return (
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
            <label htmlFor="item">Item : </label>
          </div>
          <select
            name="item"
            id="item"
            placeholder="item"
            style={{ width: "450px" }}
          >
            <option value="tub">tub</option>
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
            <label htmlFor="item">Quantity : </label>
          </div>

          <input
            placeholder={"Quantity"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"quantity"}
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
            <label htmlFor="indate">In date : </label>
          </div>

          <input
            placeholder={"In date"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"indate"}
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
            <label htmlFor="outdate">Out date : </label>
          </div>

          <input
            placeholder={"Out date : "}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"outdate"}
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
            Schedule 
          </button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleProcess;
