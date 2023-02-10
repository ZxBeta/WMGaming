import { useCallback, useEffect, useRef, useState } from "react";

import "./slider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const timerRef = useRef(null);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext()
    }, 10000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext])

  const sliderStyles = {
    height: "100%",
    position: "realtive"
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: '1s ease-out'
  };
  return (
    <div style={sliderStyles}>
      <div className='leftArrow' onClick={goToPrev}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="40" height="40"><g id="_01_align_center" data-name="01 align center"><path d="M16.752,23.994,6.879,14.121a3,3,0,0,1,0-4.242L16.746.012,18.16,1.426,8.293,11.293a1,1,0,0,0,0,1.414l9.873,9.873Z" /></g></svg>
      </div>
      <div className='rightArrow' onClick={goToNext}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="40" height="40"><g id="_01_align_center" data-name="01 align center"><path d="M7.412,24,6,22.588l9.881-9.881a1,1,0,0,0,0-1.414L6.017,1.431,7.431.017l9.862,9.862a3,3,0,0,1,0,4.242Z" /></g></svg>
      </div>
      <div style={slideStyles}></div>
    </div>
  );
};
export default ImageSlider;
