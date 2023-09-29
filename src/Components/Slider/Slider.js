import ImageOne from "../../Images/guns.jpg";
import ImageTwo from "../../Images/oldGuns.jpg";
import ImageThree from "../../Images/slash.jpg";

const Slider = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        

        <div className="carousel-inner">
          <div className="carousel-item active w-100  align-items-center ">
            <img
              src={ImageOne}
              alt="Los Angeles"
              className="w-100"
              
            />
          </div>
          <div className="carousel-item w-100  align-items-center">
            <img
              src={ImageTwo}
              alt="Chicago"
              className="w-100"
            />
          </div>
          <div className="carousel-item w-100  align-items-center ">
            <img
              src={ImageThree}
              alt="New York"
              className="w-100"
              
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Slider;
