import { useState } from 'react';
import "./Carousel.css";

import NextButton from './NextButton';
import PrevButton from './PrevButton';

export default function Carousel({ images }) {
  const [value, setValue] = useState(0);

  return (
    <div className="CarouselMainWrapper">
      <div className="CarouselWrapper">
        {value !== 0 ?
          <PrevButton value={value} setValue={setValue} />
        :
          null
        }

        <div className="CarouselImageContainer">
          <img style={{width:450,height:450}} src={images[value]} />
        </div>

        <div className="CarouselImageContainer">
          <img style={{width:450,height:450}} src={images[value+1]} />
        </div>

        <div className="CarouselImageContainer">
          <img style={{width:450,height:450}} src={images[value+2]} />
        </div>

        {value + 2 <= value.length ?  
          <NextButton value={value} setValue={setValue} />
        : 
          null
        }
      </div>
    </div>
  );
}