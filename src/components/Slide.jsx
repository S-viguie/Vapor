import { Swiper, SwiperSlide } from "swiper/react";import "swiper/css";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

const slide = () => {
    return (
        <>
            <Swiper
                className="mb-14"
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={"fade"}
                rewind={true}
                modules={[Autoplay, EffectFade]}>
                <SwiperSlide><img className="mx-auto" src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/slide1.jpg?alt=media&token=85dbf0bc-8d30-4112-a1da-a714d813d156"} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/slide2.jpg?alt=media&token=5418843a-96e9-42a7-89db-d09d93e32f10"} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/slide3.jpg?alt=media&token=dbc69409-93fc-435c-a06f-1418cf4c3259"} alt=""/></SwiperSlide>
                <SwiperSlide><img className="mx-auto" src={"https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/slide4.jpg?alt=media&token=5e794fd2-11d6-4c27-975b-b50f436234c1"} alt=""/></SwiperSlide>
            </Swiper>
        </>
    )
}

export default slide