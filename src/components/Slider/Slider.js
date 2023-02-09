import ImageSlider from "./ImageSlider";

const Slider = () => {
  const slides = [
    {
      url:
        "https://iili.io/HERQ0W7.png",
      title: "1"
    },
    {
      url:
        "https://iili.io/HERQ1s9.png",
      title: "2"
    },
    {
      url:
        "https://iili.io/HERQlxS.png",
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
