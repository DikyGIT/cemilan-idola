import { Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import ReactPlayer from "react-player";

import ProductImage1 from "../assets/products/Basreng Asin Balado/foto-product-1.jpg";
import ProductImage2 from "../assets/products/Basreng Asin Balado/foto-product-2.jpg";
import ProductImage3 from "../assets/products/Basreng Asin Balado/foto-product-3.jpg";
import ProductImage4 from "../assets/products/Basreng Asin Balado/foto-product-4.jpg";
import ProductImage5 from "../assets/products/Basreng Asin Balado/foto-product-5.jpg";

const BasrengAsinBalado = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-product position-relative">
      <div className="button">
        <button className="btn btn-primary btn-lg rounded-1 shadow" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house me-1"></i> Home
        </button>
      </div>

      <div className="banner-product">
        <Container fluid>
          <Row>
            <Col>
              <h1>Basreng Asin Balado</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="product w-100 min-vh-100 pb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold mb-5 pt-5 text-center">Foto Product</h1>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  type: "fraction",
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={ProductImage1} alt="" className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImage2} alt="" className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImage3} alt="" className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImage4} alt="" className="rounded" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={ProductImage5} alt="" className="rounded" />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-center fw-bold mb-5">Video Product</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <ReactPlayer url="https://www.youtube.com/watch?v=tq0dGywO_YE" width="100%" height="100%" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BasrengAsinBalado;
