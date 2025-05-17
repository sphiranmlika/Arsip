import { Container, Row, Col, Card, Form, InputGroup } from "react-bootstrap";
import { FaSearch, FaCalendarAlt, FaEye } from "react-icons/fa";


import SPBEImage from "../assets/img/spbe.png";
import WalikotaImage from "../assets/img/walikota.png";
import IconKebijakan from "../assets/img/icon-kebijakan.png";
import IconManajemen from "../assets/img/icon-manajemen.png";
import IconTataKelola from "../assets/img/icon-tatakelola.png";
import IconLayanan from "../assets/img/icon-layanan.png";
import radarChartImage from "../assets/img/radar.png";
import Berita1 from "../assets/img/berita1.png";
import Berita2 from "../assets/img/berita2.png";
import Berita3 from "../assets/img/berita3.png";

const beritaData = [
  {
    title: "Menteri PANRB: Layanan SPBE di Indonesia Terus Tuai Capaian Positif",
    date: "April 21, 2025",
    views: 124,
    image: Berita1,
  },
  {
    title: "Diskominfo Parepare Terima Kunjungan PT Telkom, Siap Sinergi Implementasi Satu Data Indonesia",
    date: "April 21, 2025",
    views: 124,
    image: Berita2,
  },
  {
    title: "Pemkot Parepare Apresiasi Kerjasama Kemenkominfo Hasilkan Dokumen Masterplan Smart City",
    date: "April 21, 2025",
    views: 124,
    image: Berita3,
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center position-relative">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Sistem Informasi Manajemen <br /> Sistem Pemerintahan <br /> Berbasis Elektronik
              </h1>
              <p className="mb-4">
                Penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi (TIK) untuk memberikan layanan kepada masyarakat, pemerintah, dan pihak terkait lainnya.
              </p>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5 text-center">
              <img src={SPBEImage} alt="spbe-img" className="img-fluid" />
            </Col>
          </Row>
        </Container>
        <div className="custom-shape-divider-bottom">
          {/* Wave Shape SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="shape-layer shape-layer1">
            <polygon points="0,0 1200,30 1200,120 0,120" className="shape-fill shape-blue"></polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="shape-layer shape-layer2">
            <polygon points="0,0 1200,0 1200,50" className="shape-fill shape-yellow"></polygon>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="shape-layer shape-layer3">
            <polygon points="1200,0 1200,120 600,120" className="shape-fill shape-maroon"></polygon>
          </svg>
        </div>
      </header>

      {/* Search Section */}
      <section className="search-section py-5" style={{ marginTop: "-80px" }}>
        <Container className="d-flex justify-content-center">
          <Form className="d-flex shadow p-3 rounded-3 bg-white" style={{ width: "80%", maxWidth: "800px" }}>
            <InputGroup.Text className="bg-white border-0">
              <FaSearch className="text-muted" />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Cari informasi terkait SPBE"
              className="me-2 border-0"
              aria-label="Search"
            />
          </Form>
        </Container>
      </section>

      {/* Penjelasan SPBE dan 4 Pilar */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center-center">
            <Col lg={6} className="text-center mb-4 mb-lg-0">
              <img src={WalikotaImage} alt="Walikota" className="custom-image" />
            </Col>
            <Col lg={6} className="d-flex flex-column justify-content-center">
              <h2 className="fw-bold mb-3">
                Sistem Elektronik Pemerintah Berbasis Elektronik <span className="text-primary">- SPBE</span>
              </h2>
              <p className="text-muted mb-5">
                Dasar penyusunan SPBE dengan memperhatikan komparasi peraturan PermenPanRB Nomor 5 Tahun 2018
                dengan PermenPanRB Nomor 59 Tahun 2020.
              </p>
              <Row className="g-4">
                {[{
                  icon: IconKebijakan, title: "Kebijakan SPBE", desc: "Kerangka kerja yang mengatur bagaimana pemerintah memanfaatkan teknologi informasi dan komunikasi untuk memberikan layanan kepada pengguna."
                }, {
                  icon: IconManajemen, title: "Manajemen SPBE", desc: "Proses untuk memastikan penerapan SPBE yang efisien dan berkelanjutan."
                }, {
                  icon: IconTataKelola, title: "Tata Kelola SPBE", desc: "Kerangka kerja untuk memastikan unsur SPBE berjalan secara terpadu."
                }, {
                  icon: IconLayanan, title: "Layanan SPBE", desc: "Layanan digital yang disediakan pemerintah untuk masyarakat dan instansi."
                }].map((item, idx) => (
                  <Col md={6} key={idx}>
                    <Card className="h-100 shadow-sm card-hover spbe-card">
                      <Card.Body>
                        <div className="d-flex align-items-center mb-3">
                          <img src={item.icon} alt="Icon" style={{ width: "40px", marginRight: "12px" }} />
                          <Card.Title className="fw-bold mb-0">{item.title}</Card.Title>
                        </div>
                        <Card.Text className="text-muted">{item.desc}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Indikator SPBE Section */}
      <section className="py-5" style={{ backgroundColor: "#49A3F1" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} lg={6} className="mb-4 mb-lg-0 text-center">
              <img src={radarChartImage} alt="Radar Chart SPBE" className="img-fluid" style={{ maxWidth: "90%", height: "auto" }} />
            </Col>
            <Col xs={12} lg={6} className="text-white">
              <h2 className="fw-bold text-danger mb-4">INDIKATOR</h2>
              <Row className="mb-4 text-center">
                <Col xs={4}><h3 className="fw-bold">10.</h3><p>Kebijakan SPBE</p></Col>
                <Col xs={4}><h3 className="fw-bold">10.</h3><p>Kebijakan SPBE</p></Col>
                <Col xs={4}><h3 className="fw-bold">11.</h3><p>Manajemen SPBE</p></Col>
              </Row>
              <div className="text-center text-lg-start">
                <h4 className="fw-bold">Layanan SPBE</h4>
                <h1 className="fw-bold text-danger display-3">16.</h1>
                <p className="mb-0">Indikator Layanan</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Berita Terkait */}
      <section className="py-5 bg-light">
        <Container>
          <p className="text-primary mb-1">Berita Terkait</p>
          <h2 className="fw-bold mb-4">Informasi Terbaru</h2>
          <Row className="g-4 justify-content-center">
  {beritaData.map((item, index) => (
    <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={item.image} alt="Berita" />
                  <Card.Body className="text-center">
                    <div className="d-flex justify-content-center align-items-center mb-2 text-muted small">
                      <FaCalendarAlt className="me-1" />
                      <span className="me-3">{item.date}</span>
                      <FaEye className="me-1" />
                      <span>{item.views}</span>
                    </div>
                    <Card.Title className="fs-6">{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
