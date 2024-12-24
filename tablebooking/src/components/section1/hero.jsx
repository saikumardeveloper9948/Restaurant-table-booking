import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import image1 from "../../assets/112.jpg";
import image2 from "../../assets/112.jpg";
import image3 from "../../assets/112.jpg";
// import image4 from "./";
// import image5 from "./";
// import image6 from "./";

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */}
        <div className="flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-semibold">
            Delicious Food Is Waiting For You
          </h1>
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum beatae exercitationem soluta suscipit neque dolor, expedita earum dolore similique!
            </p>
            <div className="flex gap-4 justify-center ">
              <button className="primary-btn">Food Menu</button>
              <button className="secondary-btn">Book Table </button>
            </div>
          {/* <div className="booking">
          <Button type="submit">Button</Button>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2">BOOK TABLE</button>
          </div> */}

        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
        <img src={image1} alt="food"/>
          {/* <Carousel>
            <Carousel.Item>
              <img src={image1} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={image3} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
