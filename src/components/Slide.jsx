import { Swiper, SwiperSlide } from "swiper/react";import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.jpg"
import "swiper/css";
import "swiper/css/effect-fade";

const slide = () => {
    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                rewind={true}
                modules={[Autoplay, EffectFade]}>
                <SwiperSlide><img className="mx-auto" src={slide1} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={slide2} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={slide3} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={slide4} alt=""/></SwiperSlide>
            </Swiper>
        </>
    )
}

export default slide