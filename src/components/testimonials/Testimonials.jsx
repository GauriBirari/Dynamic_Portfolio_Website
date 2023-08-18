import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/google.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt  accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    avatar: AVTR1,
    name: "Shata Wale",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
  },
  {
    avatar: AVTR1,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    avatar: AVTR1,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
  },
];

const Testimonials = () => {
  return (
    <section id="certifications">
      <h2>Certificates</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div>
                <img className="client__avatar" src={avatar} alt={name} />
              </div>
              {/* <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
