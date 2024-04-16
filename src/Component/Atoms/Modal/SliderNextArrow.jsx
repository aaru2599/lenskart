function SliderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={` rounded-full`}
        style={{ display: "block", background: "pink" }}
        onClick={onClick}
      >right</div>
    );
  }
  export default SliderNextArrow