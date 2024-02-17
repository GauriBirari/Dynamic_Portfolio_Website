import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/google.png";
import AVTR2 from "../../assets/c1.png";
import AVTR3 from "../../assets/c2.png";
import AVTR4 from "../../assets/c3.png";
import AVTR5 from "../../assets/c4.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: AVTR2,
    name: "Shata Wale",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
  },
  {
    id: 2,
    avatar: AVTR3,
    name: "Kwame Despite",
    review:
      "Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
  },
  {
    id: 3,
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
  },
  {
    id: 4,
    avatar: AVTR5,
    name: "Nana Ama McBrown",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
  },
  {
    id: 5,
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt  accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
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
