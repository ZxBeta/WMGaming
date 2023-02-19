import ImageSlider from "./ImageSlider";

const Slider = () => {
  const slides = [
    {
      url: "/playground_assets/home/b1.jpg",
      title: "1"
    },
    {
      url: "/playground_assets/home/b2.jpg",
      title: "2"
    },
    {
      url: "/playground_assets/home/b3.jpg",
      title: "3"
    }
  ];
  const containerStyles = {
    width: "100%",
    height: "100%",
    margin: '0 auto'
  };
  return (
    <div style={containerStyles}>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default Slider;
