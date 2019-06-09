import React from "react";
import fidget from "./fidget.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={fidget}
        alt="Loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
}
