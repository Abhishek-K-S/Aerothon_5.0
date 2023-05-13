import React from "react";


const AddFrabircation = () => {
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
            <label htmlFor="item">Raw Material : </label>
          </div>

          <input
            placeholder={"Raw Material"}
            style={{ marginBottom: "10px", width: "450px" }}
            id={"raw_material"}
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
            Add Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFrabircation;
