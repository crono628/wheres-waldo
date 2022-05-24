import React, { useState, useRef } from 'react';

const Test = () => {
  const imageRef = useRef();

  const winner = (e) => {
    const { pageX, pageY } = e;

    let theX = Number.parseFloat(imageRef.current.offsetWidth / pageX).toFixed(
      2
    );
    let theY = Number.parseFloat(imageRef.current.offsetWidth / pageY).toFixed(
      2
    );
    let winArr = [
      { topLeft: { x: 31.3, y: 2.35 }, bottomRight: { x: 17.56, y: 2.16 } },
    ];

    for (const key in winArr) {
      const element = winArr[key];

      let validX = theX <= element.topLeft.x && theX >= element.bottomRight.x;
      let validY = theY <= element.topLeft.y && theY >= element.bottomRight.y;

      if (validX && validY) {
        console.log('winner!');
      } else {
        console.log('try again');
      }
    }
  };

  return (
    <div>
      <img
        src="https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg"
        className="waldo1"
        ref={imageRef}
        onClick={winner}
      />
    </div>
  );
};

export default Test;
