import { Container, Row, Col } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer style={{ backgroundColor: '#2f6dad', color: 'white', padding: '10px 0' }}>
      <Container>
        <Row>
          <Col className="text-start">
            <div className="d-flex align-items-start mb-1">
              <img
                src="/logo-parepare.png"
                alt="Logo Kota Parepare"
                style={{ width: '45px', height: 'auto', marginRight: '15px' }}
              />
              
              {/* Teks sejajar tapi diturunkan sedikit */}
              <div style={{ marginTop: '15px' }}>
                <h6 className="fw-bold mb-1">PEMERINTAH</h6>
                <h6 className="fw-bold">KOTA PAREPARE</h6>
              </div>
            </div>

            {/* Alamat */}
            <p className="mb-1 small">Jl. Jendral Sudirman No. 78</p>
            <p className="mb-1 small">Parepare 9122</p>
            <p className="small">Email: setdako@pareparekota.go.id</p>

            {/* Media Sosial */}
            <div className="mt-3">
              <a href="#" className="text-white me-3 fs-5"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-white me-3 fs-5"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white fs-5"><i className="fab fa-instagram"></i></a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 border-light" />

        <div className="text-center">
          <small>
            Copyright © 2025 Dinas Komunikasi, Informatika dan Statistik. Kota Parepare
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
