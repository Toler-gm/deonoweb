import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import proyect1 from "../assets/img/proyect1.png";
import proyect2 from "../assets/img/proyect2.png";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styled from "@emotion/styled";

const StyledSwiper = styled(Swiper)`
  
`;

export default function Slider() {

    return (
        <>

            <StyledSwiper
                effect={'coverflow'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}  
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[Autoplay, EffectCoverflow, Pagination]}
                className="mySwiper"
                breakpoints={{
                    
                    768: {
                        slidesPerView: 3,  
                    },
                }}
            >

                <SwiperSlide >
                    <div>
                        <div className="relative text-center flex flex-col">
                            <img style={{ width: 450, height: 286, objectFit: "cover", }} src={proyect2} alt="" className=" rounded-2xl" />
                            <div className="absolute bottom-0 " style={{ width: "100%", height: 100, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)", }}>  </div>
                        </div>
                        <div>
                            <h4 className=" text-4xl font-black">WORLD FIRST</h4>
                            <p className=" font-light">Diseño y desarrollo web para la <br /> empresa de bit informática</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div>
                        <div className="relative text-center flex flex-col">
                            <img style={{ width: 450, height: 286, objectFit: "cover", }} src={proyect1} alt="" className=" rounded-2xl" />
                            <div className="absolute bottom-0 " style={{ width: "100%", height: 100, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)", }}>  </div>
                        </div>
                        <div>
                            <h4 className=" text-4xl font-black">WORLD FIRST</h4>
                            <p className=" font-light">Diseño y desarrollo web para la <br /> empresa de bit informática</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div>
                        <div className="relative text-center flex flex-col">
                            <img style={{ width: 450, height: 286, objectFit: "cover", }} src={proyect1} alt="" className=" rounded-2xl" />
                            <div className="absolute bottom-0 " style={{ width: "100%", height: 100, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)", }}>  </div>
                        </div>
                        <div>
                            <h4 className=" text-4xl font-black">WORLD FIRST</h4>
                            <p className=" font-light">Diseño y desarrollo web para la <br /> empresa de bit informática</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div>
                        <div className="relative text-center flex flex-col">
                            <img style={{ width: 450, height: 286, objectFit: "cover", }} src={proyect1} alt="" className=" rounded-2xl" />
                            <div className="absolute bottom-0 " style={{ width: "100%", height: 100, background: "linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)", }}>  </div>
                        </div>
                        <div>
                            <h4 className=" text-4xl font-black">WORLD FIRST</h4>
                            <p className=" font-light">Diseño y desarrollo web para la <br /> empresa de bit informática</p>
                        </div>
                    </div>
                </SwiperSlide>







            </StyledSwiper>
        </>
    )
}