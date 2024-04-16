
function SliderPrevArrow(props) {
  console.log("props",props);
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className}  rounded-full` }
        style={{  display: "block", background: "grey" }}
        onClick={onClick}
     />
    );
  }
  
  export default SliderPrevArrow