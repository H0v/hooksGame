import React from "react";

export default function SelectedBtn({ selectedColor, undo }) {
  return (
    <div
      style={{ backgroundColor: selectedColor }}
      className="btn btn-selected"
      onClick={() => undo()}
    ></div>
  );
}
