
function SliderPrevArrow(props) {
  console.log("props",props);
    const { className, style, onClick } = props;
    return (
      <div
        className={`  rounded-full` }
        // style={{  display: "block", background: "green" }}
        onClick={onClick}
     >ddd</div>
    );
  }
  
  export default SliderPrevArrow