import { Table, Container, Button } from "react-bootstrap";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import { useState } from "react";

const LhePage = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const data = [
    { name: "LHE SPBE", year: 2024, link: "#" },
    // Tambah data lain jika perlu
  ];

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort />;
    return sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aVal = a[sortConfig.key];
    const bVal = b[sortConfig.key];
    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const emptyRows = 7 - sortedData.length;

  return (
    <div style={{ paddingTop: "150px" }}>
      <Container className="my-5">
        <h4 className="text-center fw-bold mb-5">Laporan Hasil Evaluasi</h4>

        <div className="table-responsive">
          <Table bordered hover>
            <thead>
              <tr style={{ backgroundColor: "#7C1C1C", color: "white" }} className="text-center align-middle">
                <th style={{ cursor: "pointer" }} onClick={() => handleSort("name")}>
                  Nama Dokumen {getSortIcon("name")}
                </th>
                <th style={{ cursor: "pointer" }} onClick={() => handleSort("year")}>
                  Tahun {getSortIcon("year")}
                </th>
                <th>Lihat</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.length > 0 ? (
                sortedData.map((item, index) => (
                  <tr key={index} className="text-center align-middle">
                    <td>{item.name}</td>
                    <td>{item.year}</td>
                    <td>
                      <Button variant="link" size="sm" href={item.link}>
                        Download
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="text-center align-middle">
                  <td colSpan="3">Data belum tersedia</td>
                </tr>
              )}

              {/* Baris kosong tambahan */}
              {Array.from({ length: Math.max(emptyRows, 0) }).map((_, idx) => (
                <tr key={`empty-${idx}`} className="text-center align-middle">
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default LhePage;
