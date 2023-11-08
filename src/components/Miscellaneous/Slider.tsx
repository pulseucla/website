import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Image_slider } from "../St-Baldricks/constants"

const CenterMode: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  // const play = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPlay();
  //   }
  // };

  // const pause = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPause();
  //   }
  // };

  const settings = {
    className: 'center',
    // centerMode: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    // variableWidth: true,
    // adaptiveHeight: true,
    focusOnSelect: true,
  };

  const imageSettings = {
    margin: '0 10px', // Add margin to create a gap between images
  };

  return (
    <div className="p-[40px] bg-gradient-radial from-[#94ACE0]/100 to-white w-[80vw]">
      <Slider {...settings} ref={sliderRef}>
        {Image_slider.map((image, index) => (
          <div style={imageSettings} key={index}>
            <img src={image.image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterMode;