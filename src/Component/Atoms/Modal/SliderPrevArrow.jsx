
function SliderPrevArrow(props) {
  console.log("props",props);
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  rounded-full` }
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  export default SliderPrevArrow