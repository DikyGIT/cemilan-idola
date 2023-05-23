import { Container, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const BasrengAsinJeruk = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-product position-relative">
      <div className="button">
        <button className="btn btn-primary btn-lg rounded-1" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house me-1"></i> Home
        </button>
      </div>

      <div className="banner-product">
        <Container fluid>
          <Row>
            <Col>
              <h1>Basreng Asin Jeruk</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BasrengAsinJeruk;
