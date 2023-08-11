import React from "react";
import image1 from "../../assets/Images/c1.jpg";
import image2 from "../../assets/Images/c2.jpg";
import image3 from "../../assets/Images/c3.jpg";
import image4 from "../../assets/Images/c4.jpg";
import image5 from "../../assets/Images/c5.jpg";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto flex flex-wrap ">
          <div className="flex flex-wrap md:-m-2 -m-1s">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 duration-300"
                  src={image1}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 duration-300"
                  src={image2}
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-105 duration-300"
                  src={image3}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block hover:scale-105 duration-300"
                  src={image4}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 duration-300"
                  src={image5}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block hover:scale-105 duration-300"
                  src={image2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
