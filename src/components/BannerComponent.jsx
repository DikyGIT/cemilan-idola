import { Container, Row, Col } from "react-bootstrap";

const BannerComponent = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">
              Macam - Macam <br /> Product Cemilan Idola
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerComponent;
