function SliderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} rounded-full `}
        style={{ display: "block", background: "grey" }}
        onClick={onClick}
      >right</div>
    );
  }
  export default SliderNextArrow