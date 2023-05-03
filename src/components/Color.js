import React from "react";

const Color = (props) => {
  const { colorData, setColor } = props;
  return (
    <>
      <ul className="colors ps-0">
        {colorData &&
          colorData.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color?.title }}
                onClick={() => setColor(color._id)}
              ></li>
            );
          })}
      </ul>
    </> 
  );
};

export default Color;