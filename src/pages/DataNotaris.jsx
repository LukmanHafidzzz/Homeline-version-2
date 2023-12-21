import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Container, Row, Button } from 'react-bootstrap';
import NavbarAll from '../components/NavbarAll';
import FooterAll from '../components/FooterAll';
import PhotoDetailBox from '../components/PhotoDetailBox';

function DataNotaris() {
  const [notaris, setNotaris] = useState([]);

  async function getNotaris() {
    try {
      const response = await axios.get('http://localhost:3052/DataNotaris');
      setNotaris(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getNotaris();
  }, []);

  return (
    <>
      <NavbarAll />
      <Container className="mt-4">
        <Row className="d-flex align-items-center">
          <Col md={6} className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Foto"
              className="img-fluid rounded-2"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-between ml-5">
            <div>
              <h2>Agus Setiawan, SH., M.Kn. Rungkut, Surabaya</h2>
              <p>Deskripsi:</p>
              <p>
                Saya seorang profesional hukum dengan latar belakang pendidikan dan pengalaman sebagai notaris. Pemahaman mendalam saya dalam menyusun dan memverifikasi dokumen hukum, seperti akta otentik dan perjanjian bisnis, telah teruji dalam menangani transaksi dengan teliti. Saya mengutamakan kejujuran, kecermatan, dan komunikasi efektif untuk memberikan layanan berkualitas kepada klien. Dengan izin praktik sah dari Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia, saya siap memberikan kontribusi positif untuk memenuhi kebutuhan hukum dan bisnis klien.
              </p>
              
              <div className="d-flex">
  <div>
    <p style={{ color: '#888', marginBottom: '8px' }}>link Linkdn</p>
    <p>linkedin.com/AgusSetiawan</p>
    <p style={{ color: '#888', marginBottom: '8px' }}>link Portofolio</p>
    <p>agussetiawan.com</p>
    <p style={{ color: '#888', marginTop: '10px' }}>Dokumen Pendukung</p>
    <p>agussetiawan.com</p>
  </div>

  <div className="d-flex flex-column my-3 ml-[300px]  justify-content-end">
    <Button variant="outline-secondary" className="rounded-pill mb-2" style={{ width: '150px', backgroundColor: '#8B4513', borderColor: '#8B4513' }}>
      Hubungi
    </Button>

    <Button variant="outline-secondary" className="rounded-pill" style={{ width: '150px', backgroundColor: '#8B4513', borderColor: '#8B4513' }}>
      Kirim Pesan
    </Button>
  </div>
</div>
            </div>
          </Col>
          <div className="display-5 font-weight-bolder">Rekomendasi Notaris</div>
<PhotoDetailBox/>

        </Row>
      </Container>
      <FooterAll />
    </>
  );
}

export default DataNotaris;
