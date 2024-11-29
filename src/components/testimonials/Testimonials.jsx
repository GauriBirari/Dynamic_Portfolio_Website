import React, { useEffect, useState } from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/google.png";
import AVTR2 from "../../assets/c1.png";
import AVTR3 from "../../assets/c2.png";
import AVTR4 from "../../assets/c3.png";
import AVTR5 from "../../assets/c4.png";
import AVTR6 from "../../assets/postmancertificate.png";
import AVTR7 from "../../assets/bighost.png";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { server } from "../../common";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

// const data = [
//   {
//     id: 7,
//     avatar: AVTR7,
//     name: "Shata Wale",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
//   },
//   {
//     id: 1,
//     avatar: AVTR6,
//     name: "Shata Wale",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
//   },
//   {
//     id: 6,
//     avatar: AVTR2,
//     name: "Shata Wale",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.  non.",
//   },
//   {
//     id: 2,
//     avatar: AVTR3,
//     name: "Kwame Despite",
//     review:
//       "Lorem ipsum, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
//   },
//   {
//     id: 3,
//     avatar: AVTR4,
//     name: "Nana Ama McBrown",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
//   },
//   {
//     id: 4,
//     avatar: AVTR5,
//     name: "Nana Ama McBrown",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt quibusdam laudantium accusamus quasi, aut reiciendis eum dolore eaque optio nemo.",
//   },
//   {
//     id: 5,
//     avatar: AVTR1,
//     name: "Tina Snow",
//     review:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi quidem nobis omnis beatae incidunt  accusamus quasi, aut reiciendis eum dolore eaque optio nemo. Modi porro facere atque non.",
//   },
// ];

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  // Get
  const getData = () => {
    setLoading(true);

    server
      .get("/certification/getcertificates", {
        headers: {
          "Content-Type": "application/json",
          // "auth-token": user.authToken,
        },
      })
      .then(function (response) {
        console.log("api response", response.data);
        if (response.status === 200 || response.status === 201) {
          setData(response.data);
        }
        setLoading(false);
      })
      .catch(function (error) {
        if (error instanceof AxiosError && error.response?.data?.message)
          toast.error(error.response.data.message);
        else if (error.response?.data?.error) {
          toast.error(error.response.data.error);
        } else console.log("Failed to connect to server");
      });
  };

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
        {data.map(({ image, title }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div>
                <img className="client__avatar" src={image} alt={title} />
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
