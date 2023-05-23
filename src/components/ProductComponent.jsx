import { Container, Row, Col } from "react-bootstrap";

import Product1 from "../assets/products/product-1.jpg";
import Product2 from "../assets/products/product-2.jpg";
import Product3 from "../assets/products/product-3.jpg";
import Product4 from "../assets/products/product-4.jpg";
import Product5 from "../assets/products/product-5.jpg";
import Product6 from "../assets/products/product-6.jpg";

import { useNavigate } from "react-router-dom";

const BasrengAsinBalado = () => {
  let navigate = useNavigate();

  return (
    <div className="products">
      <Container>
        <Row className="row-cols-lg-2 row-cols-1 g-5">
          <Col className="product">
            <h2>1. Basreng Asin Balado</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product1} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("basreng-asin-balado")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
          <Col className="product">
            <h2>2. Basreng Jagung Bakar</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product2} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("/basreng-jagung-bakar")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
          <Col className="product">
            <h2>3. Basreng Asin Pedas</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product3} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("/basreng-asin-pedas")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
          <Col className="product">
            <h2>4. Basreng Balado Jeruk</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product4} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("/basreng-balado-jeruk")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
          <Col className="product">
            <h2>5. Basreng Asin Jeruk</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product5} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("/basreng-asin-jeruk")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
          <Col className="product">
            <h2>6. Basreng Keju Balado</h2>
            <p>Basreng Asin Balado adalah Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta modi quae quidem commodi ipsam eum animi, velit explicabo iste incidunt.</p>
            <img src={Product6} alt="" className="w-100" />
            <button className="btn btn-success btn-lg rounded-1 mt-4" onClick={() => navigate("/basreng-keju-balado")}>
              Detail Product
            </button>
            <button className="btn btn-primary btn-lg rounded-1 mt-4 ms-2">Pesan</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasrengAsinBalado;
