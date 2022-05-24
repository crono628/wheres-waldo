import { ClickAwayListener } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useRef } from 'react';

const Test = () => {
  const [popup, setPopup] = useState(false);
  const [coord, setCoord] = useState([0, 0]);
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
    console.log(popup);
  };

  const imgClick = (e) => {
    setPopup(!popup);
    setCoord([e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  };

  return (
    <div>
      <ClickAwayListener onClickAway={() => setPopup(false)}>
        <div>
          <img
            src="https://3hwuuuxcz5o651g144s0kw10-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/G3M_Wheres_Waldo.jpg"
            className="waldo1"
            ref={imageRef}
            onClick={imgClick}
          />

          {popup ? (
            <Box
              sx={{
                position: 'absolute',
                left: coord[0],
                top: coord[1],
                backgroundColor: 'white',
              }}
            >
              Click me, I will stay visible until you click outside.
            </Box>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Test;
