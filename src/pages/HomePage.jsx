import {Container, Row, Col} from "react-bootstrap";
import SPBEImage from "../assets/img/spbe.png";

const HomePage = () => {
  return (
<div className="homepage">
  <header className="w-100 min-vh-100 d-flex align-items-center">
    <Container>
      <Row className="header-box d-flex align-items-center">
        <Col lg="6">
          <h1 className="mb-4">
            Sistem Informasi Manajemen <br /> Sistem Pemerintahan <br /> Berbasis Elektronik</h1>
          <p className="mb-4">
            Penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi (TIK) untuk memberikan layanan kepada masyarakat, pemerintah, dan pihak terkait lainnya. Tujuannya adalah meningkatkan efisiensi, transparansi, akuntabilitas, dan kualitas pelayanan publik.</p>
          <button className="btn btn-lg rounded-1 me-2 btn-custom ">Lihat Manfaat</button>
        </Col>
        <Col lg="6" className="pt-lg-0 pt-5">
          <img src={SPBEImage} alt="spbe-img" />
        </Col>
      </Row>
    </Container>
    <div className="custom-shape-divider-bottom">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="shape-layer shape-layer1">
      <polygon points="0,0 1200,30 1200,120 0,120" className="shape-fill shape-blue"></polygon>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="shape-layer shape-layer2">
      <polygon points="0,0 1200,0 1200,50" className="shape-fill shape-yellow"></polygon>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="shape-layer shape-layer3">
      <polygon points="1200,0 1200,120 600,120" className="shape-fill shape-maroon"></polygon>
    </svg>
    </div>
  </header>
  <div className="kelas w-100 min-vh-100">
    <Container>
      <Row>
        <Col>
          <h1 className="text-center fw-bold">Sistem Elektronik Pemerintah Berbasis Elektronik - SPBE</h1>
          <p className="text-center">Dasar penyusunan SPBE dengan memperhatikan komparasi peraturan PermenPanRB Nomor 5 Tahun 2018 dengan PermenPanRB Nomor 59 Tahun 2020</p>
        </Col>
      </Row>
    </Container>
  </div>
</div>

  );
};

export default HomePage;