function SliderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} rounded-full`}
        style={{ ...style, display: "block", background: "pink" }}
        onClick={onClick}
      />
    );
  }
  export default SliderNextArrow