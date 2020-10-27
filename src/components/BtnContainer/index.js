import React, { useState, useEffect } from "react";
import Btn from "../Btn";
import { copyArray, generateRenderData } from "../../helpers";
import Steps from "../Steps";
import SelectedBtn from "../selectedBtn";

export default function BtnContainer({ setFinished, steps, setSteps }) {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [MAX_COUNT, setMax] = useState(null);
  const [prevColors, setPrevColors] = useState(colors);
  const [prevSelected, setPrevSelected] = useState(selectedColor);
  useEffect(() => {
    const x = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setMax(data.maxCount);
      setColors(data.colors);
    };
    x();
  }, []);

  useEffect(() => {
    console.log("effect");
    console.log("PREV: ", prevSelected);
    console.log("COLOR: ", selectedColor);
    console.log(MAX_COUNT);

    if (prevSelected !== selectedColor) {
      let status = true;
      console.log("effect");
      colors.forEach((colors) => {
        if (colors.length) {
          if (colors.length === MAX_COUNT) {
            const uniqueObj = new Set();
            colors.forEach((color) => uniqueObj.add(color));
            if (uniqueObj.size !== 1) status = false;
            return;
          }

          status = false;
        }
      });

      if (status) {
        setFinished();
      }
    }
  }, [selectedColor, colors]);

  const handleClick = (index) => {
    const newColors = copyArray(colors);
    const clickedColorsArray = newColors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      clickedColorsArray.pop();

      setSelectedColor(clickedColor);
      setPrevColors(colors);
      setColors(newColors);
      setSteps();

      return;
    }

    if (
      clickedColorsArray.length < MAX_COUNT &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);
      setPrevSelected(selectedColor);

      setSelectedColor("");
      setPrevColors(colors);
      setColors(newColors);
    }
  };

  const undo = () => {
    if (selectedColor) {
      console.log("undo");
      setSelectedColor("");
      setColors(prevColors);
      setSteps();
    }
  };

  const printColors = generateRenderData(colors, MAX_COUNT);

  return (
    <>
      <Steps steps={steps} />

      <SelectedBtn undo={undo} selectedColor={selectedColor} />

      <div className="game-container">
        {printColors.map((col, i) => (
          <div key={i} className="btn-container" onClick={() => handleClick(i)}>
            {col.map((color, j) => (
              <Btn key={j} color={color} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
