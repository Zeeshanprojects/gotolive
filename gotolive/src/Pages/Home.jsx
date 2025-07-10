import React from "react";
import Images from "../assets/Images/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/CSS/Home.css";

export default function Home() {
  return (
    <>
      <div className="col-lg-12">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000, // 3 seconds between slides
            disableOnInteraction: false, // keeps autoplay after user interaction
          }}
          modules={[Autoplay, Navigation, Pagination]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Images.slider1} alt="slider1" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider2} alt="slider2" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider3} alt="slider3" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider4} alt="slider4" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider5} alt="slider5" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider6} alt="slider6" className="sliderdesign" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Images.slider7} alt="slider7" className="sliderdesign" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="background-section">
        <div className="container ">
          <h5 className="text-white mb-3">Upcoming events</h5>
          <div>
            <Swiper
              spaceBetween={0}
              slidesPerView={5}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              <SwiperSlide>
                <img src={Images.card1} alt="card1" className="cards" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Images.card2} alt="card2" className="cards" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Images.card3} alt="card3" className="cards" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="container mt-5">
          <h5 className="text-white mb-3 ">Past Events 2025</h5>
          <Swiper
            spaceBetween={3}
            slidesPerView={5}
            loop={true}
            navigation={true}
            // style={{ width: "1042.812px" }} // ✅ this is correct
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <img src={Images.card4} alt="card1" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card5} alt="card2" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card6} alt="card3" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card7} alt="card1" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card8} alt="card2" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card9} alt="card3" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card10} alt="card1" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card11} alt="card2" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card12} alt="card3" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card13} alt="card1" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card14} alt="card2" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card15} alt="card3" className="cards" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Images.card16} alt="card1" className="cards" />
            </SwiperSlide>
           
          </Swiper>
        </div>
          <div className="container">
        <h5 className="text-white mb-3 mt-5">Past Events 2024</h5>
      </div>
      </div>

    
    </>
  );
}
