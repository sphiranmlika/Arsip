import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TentangPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const SectionTitle = ({ title }) => (
    <h4 className="fw-bold border-bottom pb-2 mb-4 text-primary">{title}</h4>
  );

  const sectionStyle = {
    textAlign: "justify",
    marginBottom: "40px",
  };

  return (
    <div style={{ paddingTop: "90px" }}>
      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5 mb-4">
        <h1 className="display-5 fw-bold">Sistem Pemerintahan Berbasis Elektronik (SPBE)</h1>
        <p className="lead">Menuju pemerintahan digital yang efisien, transparan, dan terintegrasi</p>
      </div>

      {/* Konten Full Lebar */}
      <div className="px-5" style={{ maxWidth: "100%" }}>
        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Definisi SPBE" />
          <p>SPBE merupakan singkatan dari Sistem Pemerintahan Berbasis Elektronik, Sistem Pemerintahan Berbasis Elektronik (SPBE) adalah penyelenggaraan pemerintahan yang memanfaatkan teknologi informasi dan komunikasi untuk memberikan layanan kepada Pengguna SPBE. Hal ini seperti yang tertuang pada Peraturan Presiden No. 95 Tahun 2018 tentang Sistem Pemerintahan Berbasis Elektronik. SPBE ditujukan untuk untuk mewujudkan tata kelola pemerintahan yang bersih, efektif, transparan, dan akuntabel serta pelayanan publik yang berkualitas dan terpercaya. Tata kelola dan manajemen sistem pemerintahan berbasis elektronik secara nasional juga diperlukan untuk meningkatkan keterpaduan dan efisiensi sistem pemerintahan berbasis elektronik.</p>
          <p>Revolusi teknologi informasi dan komunikasi (TIK) memberikan peluang bagi pemerintah untuk melakukan inovasi pembangunan aparatur negara melalui penerapan Sistem Pemerintahan Berbasis Elektronik (SPBE) atau E-Government, yaitu penyelenggaraan pemerintahan yang memanfaatkan TIK untuk memberikan layanan kepada instansi pemerintah, aparatur sipil negara, pelaku bisnis, masyarakat dan pihak-pihak lainnya. SPBE memberi peluang untuk mendorong dan mewujudkan penyelenggaraan pemerintahan yang terbuka, partisipatif, inovatif, dan akuntabel, meningkatkan kolaborasi antar instansi pemerintah dalam melaksanakan urusan dan tugas pemerintahan untuk mencapai tujuan bersama, meningkatkan kualitas dan jangkauan pelayanan publik kepada masyarakat luas, dan menekan tingkat penyalahgunaan kewenangan dalam bentuk kolusi, korupsi, dan nepotisme melalui penerapan sistem pengawasan dan pengaduan masyarakat berbasis elektronik.</p>
          <p>Pemerintah menyadari pentingnya peran SPBE untuk mendukung semua sektor pembangunan. Upaya untuk mendorong penerapan SPBE telah dilakukan oleh pemerintah dengan menerbitkan peraturan perundang-undangan sektoral yang mengamanatkan perlunya penyelenggaraan sistem informasi atau SPBE. Sejauh ini kementerian, lembaga, dan pemerintah daerah telah melaksanakan SPBE secara sendiri-sendiri sesuai dengan kapasitasnya, dan mencapai tingkat kemajuan SPBE yang sangat bervariasi secara nasional. Untuk membangun sinergi penerapan SPBE yang berkekuatan hukum antara kementerian, lembaga, dan pemerintah daerah, diperlukan Rencana Induk SPBE Nasional yang digunakan sebagai pedoman bagi Instansi Pusat dan Pemerintah Daerah untuk mencapai SPBE yang terpadu. Rencana Induk SPBE Nasional disusun dengan memperhatikan arah kebijakan, strategi, dan inisiatif pada bidang tata kelola SPBE, layanan SPBE, TIK, dan SDM untuk mencapai tujuan strategis SPBE tahun 2018 - 2025 dan tujuan pembangunan aparatur negara sebagaimana ditetapkan dalam RPJP Nasional 2005 - 2025 dan Grand Design Reformasi Birokrasi 2010 - 2025.</p>
        </div>

        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Visi SPBE" />
          <p>
            “Terwujudnya sistem pemerintahan berbasis elektronik yang terpadu dan menyeluruh untuk mencapai birokrasi dan pelayanan publik yang berkinerja tinggi.”</p>
            <em>— Peraturan Presiden No. 95 Tahun 2018 Tentang SPBE</em>
        </div>

        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Misi SPBE" />
          <ul>
            <li>Melakukan penataan dan penguatan organisasi dan tata kelola sistem pemerintahan berbasis elektronik yang terpadu.</li>
            <li>Mengembangkan pelayanan publik berbasis elektronik yang terpadu, menyeluruh, dan menjangkau masyarakat luas.</li>
            <li>Membangun fondasi teknologi informasi dan komunikasi yang terintegrasi, aman, dan andal.</li>
            <li>Membangun SDM yang kompeten dan inovatif berbasis teknologi informasi dan komunikasi.</li>
          </ul>
        </div>

        <div style={sectionStyle} data-aos="fade-up">
          <SectionTitle title="Tujuan SPBE" />
          <ul>
            <li>Mewujudkan tata kelola pemerintahan yang bersih, efektif, efisien, transparan, dan akuntabel.</li>
            <li>Mewujudkan pelayanan publik yang berkualitas dan terpercaya.</li>
            <li>Mewujudkan sistem pemerintahan berbasis elektronik yang terpadu.</li>
          </ul>
        </div>

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
