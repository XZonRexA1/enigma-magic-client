import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import magicianImage1 from "../../../public/images/magician1.avif";
import magicianImage2 from "../../../public/images/magician2.avif";
import magicianImage3 from "../../../public/images/magician3.avif";
import "./banner.css";
import {  Slide } from "react-awesome-reveal";

const Banner = () => {
  return (
    <>
      
     <Slide>
     <Swiper navigation modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-black py-8">
            <img
              src={magicianImage1}
              alt="Magician 1"
            />
            <h1 className="mt-4 text-3xl font-bold mb-2 ml-4">Learn the Art of Magic</h1>
            <p className="ml-4">
              Join our Magic and Illusion School to master the secrets of
              astonishing performances. Discover the wonders of misdirection,
              sleight of hand, and mind-bending illusions.
            </p>
            <button className="btn mt-4 ml-4">Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black py-8">
            <img
              src={magicianImage3}
              alt="Magician 2"
            />
            <h1 className="mt-4 text-3xl font-bold mb-2 ml-4">Unleash Your Inner Magician</h1>
            <p className="ml-4">
              Experience the thrill of captivating audiences with your
              enchanting performances. Our expert instructors will guide you in
              mastering advanced tricks and creating mesmerizing acts.
            </p>
            <button className="btn mt-4 ml-4">Enroll Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-black py-8">
            <img
              src={magicianImage2}
              alt="Magician 3"
            />
            <h1 className="mt-4 text-3xl font-bold mb-2 ml-4">Enter the World of Illusion</h1>
            <p className="ml-4">
              Immerse yourself in the fascinating realm of illusions and
              discover how to defy logic and perception. Unlock the secrets
              behind grand stage illusions and create breathtaking spectacles.
            </p>
            <button className="btn mt-4 ml-4">Enroll Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
     </Slide>
   
    </>
  );
};

export default Banner;
