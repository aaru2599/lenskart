import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoReorderThreeOutline } from "react-icons/io5";
import { BottomNavData } from "../Data/BottomNavData";
import { Link } from "react-router-dom";

function HeaderOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = BottomNavData;

  const handleCategoryClose = () => {
    handleClose();
  };
  return (
    <>
      <Button
        className="bg-transparent text-black border-0"
        onClick={handleShow}
      >
        <IoReorderThreeOutline />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        className="w-screen md:w-[100px]"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Category</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {data.map((item, index) => {
            return (
              <div key={index} className="">
                {item.left.map((leftItem) => {
                  return (
                    <Offcanvas.Header onClick={handleCategoryClose} key={leftItem.key}>
                      <Link
                      onClick={handleCategoryClose}
                      to={leftItem.link}
                      className=" no-underline text-stone-400 p-2 w-[100%] bg-slate-100 border text-[20px] text-center rounded font-[500]"
                    >
                      {leftItem.name}
                    </Link>
                    </Offcanvas.Header>
                  );
                })}
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default HeaderOffCanvas;
