import React from "react";

export default function Btn({ style, color, onClick }) {
  return <div className={`btn`} style={{ ...style, backgroundColor: color }} />;
}
