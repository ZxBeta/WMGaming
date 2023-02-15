import ImageSlider from "./ImageSlider";

const Slider = () => {
  const slides = [
    {
      url:
        "https://iili.io/HEpqnIt.jpg",
      title: "1"
    },
    {
      url:
        "https://iili.io/HEpqohX.jpg",
      title: "2"
    },
    {
      url:
        "https://iili.io/HEpqBpI.jpg",
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
