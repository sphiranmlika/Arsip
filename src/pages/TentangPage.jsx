import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TentangPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const SectionTitle = ({ title }) => (
    <h4 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#010101" }}>{title}</h4>
  );

  const sectionStyle = {
    textAlign: "justify",
    marginBottom: "40px",
  };

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#019EFD", color: "white" }} className="text-center py-5 mb-4">
        <h1 className="display-5 fw-bold">Sistem Pemerintahan Berbasis Elektronik (SPBE)</h1>
        <p className="lead">Menuju pemerintahan digital yang efisien, transparan, dan terintegrasi</p>
      </div>

      {/* Konten Full Lebar */}
      <div className="px-5" style={{ maxWidth: "100%" }}>
        {/* Definisi SPBE dengan layout 50:50 */}
        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Definisi SPBE" />
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {/* Logo Kominfo */}
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src="/logo-spbe.png"
                alt="Logo SPBE"
                style={{ maxWidth: "100%", maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Teks definisi */}
            <div style={{ flex: 1 }}>
              <p>
                SPBE merupakan singkatan dari Sistem Pemerintahan Berbasis Elektronik,
                Sistem Pemerintahan Berbasis Elektronik (SPBE) adalah penyelenggaraan
                pemerintahan yang memanfaatkan teknologi informasi dan komunikasi untuk
                memberikan layanan kepada Pengguna SPBE. Hal ini seperti yang tertuang
                pada Peraturan Presiden No. 95 Tahun 2018 tentang Sistem Pemerintahan
                Berbasis Elektronik. SPBE ditujukan untuk untuk mewujudkan tata kelola
                pemerintahan yang bersih, efektif, transparan, dan akuntabel serta
                pelayanan publik yang berkualitas dan terpercaya.
              </p>
              <p>
                Revolusi teknologi informasi dan komunikasi (TIK) memberikan peluang
                bagi pemerintah untuk melakukan inovasi pembangunan aparatur negara
                melalui penerapan Sistem Pemerintahan Berbasis Elektronik (SPBE) atau
                E-Government, yaitu penyelenggaraan pemerintahan yang memanfaatkan TIK
                untuk memberikan layanan kepada instansi pemerintah, aparatur sipil negara,
                pelaku bisnis, masyarakat dan pihak-pihak lainnya.
              </p>
              <p>
                Pemerintah menyadari pentingnya peran SPBE untuk mendukung semua sektor
                pembangunan. Upaya untuk mendorong penerapan SPBE telah dilakukan oleh
                pemerintah dengan menerbitkan peraturan perundang-undangan sektoral
                yang mengamanatkan perlunya penyelenggaraan sistem informasi atau SPBE.
              </p>
            </div>
          </div>
        </div>

        {/* Visi & Misi SPBE dalam kotak sejajar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "40px",
          }}
          data-aos="fade-up"
        >
          {/* Visi Box */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              minWidth: "280px",
            }}
          >
            <SectionTitle title="Visi SPBE" />
            <p>
              “Terwujudnya sistem pemerintahan berbasis elektronik yang terpadu dan
              menyeluruh untuk mencapai birokrasi dan pelayanan publik yang berkinerja
              tinggi.”
            </p>
            <em>— Peraturan Presiden No. 95 Tahun 2018 Tentang SPBE</em>
          </div>

          {/* Misi Box */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#f8f9fa",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              minWidth: "280px",
            }}
          >
            <SectionTitle title="Misi SPBE" />
            <ul>
              <li>Melakukan penataan dan penguatan organisasi dan tata kelola sistem pemerintahan berbasis elektronik yang terpadu.</li>
              <li>Mengembangkan pelayanan publik berbasis elektronik yang terpadu, menyeluruh, dan menjangkau masyarakat luas.</li>
              <li>Membangun fondasi teknologi informasi dan komunikasi yang terintegrasi, aman, dan andal.</li>
              <li>Membangun SDM yang kompeten dan inovatif berbasis teknologi informasi dan komunikasi.</li>
            </ul>
          </div>
        </div>

        {/* Tujuan SPBE */}
        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Tujuan SPBE" />
          <ul>
            <li>Mewujudkan tata kelola pemerintahan yang bersih, efektif, efisien, transparan, dan akuntabel.</li>
            <li>Mewujudkan pelayanan publik yang berkualitas dan terpercaya.</li>
            <li>Mewujudkan sistem pemerintahan berbasis elektronik yang terpadu.</li>
          </ul>
        </div>

        {/* Sasaran SPBE */}
        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Sasaran SPBE" />
          <ul>
            <li>Terwujudnya tata kelola dan manajemen SPBE yang efektif dan efisien.</li>
            <li>Terwujudnya layanan SPBE yang terpadu dan berorientasi kepada pengguna.</li>
            <li>Terselenggaranya infrastruktur SPBE yang terintegrasi.</li>
            <li>Meningkatnya kapasitas SDM SPBE.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TentangPage;
