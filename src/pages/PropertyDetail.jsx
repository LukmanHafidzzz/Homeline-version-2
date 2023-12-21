import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Image, Nav, Row } from "react-bootstrap";
import NavbarAll from "../components/NavbarAll";
import FooterAll from "../components/FooterAll";
import { Link, useParams } from "react-router-dom";

function PropertyDetail() {
    const params = useParams()
    const [detail, setDetail] = useState([])
    const [foto, setFoto] = useState([])

    if (!nama) {
      window.location.href = '/auth/login';
      return;
  }

    async function getDetail(rumah_id) {
    const result = await axios.get(`http://localhost:3052/properti/detail/${rumah_id}`)
    setDetail(result.data)
  }

    async function getFoto(rumah_id) {
    const result = await axios.get(`http://localhost:3052/properti/detail-foto/${rumah_id}}`)
    setFoto(result.data)
  }

  useEffect(() => {
      getDetail(params.rumah_id)
    }, [params.rumah_id]);

  useEffect(() => {
      getFoto(params.rumah_id)
    }, [params.rumah_id]);
  return (
    <>
      <NavbarAll />
      {detail.length == 0 ? (
        <h3>Data Rumah</h3>
      ) : (
        <Container className="p-3 container-lg">
          <Row className="justify-content-between">
            <Col className="col-4">
              <h3>{detail.data[0].nama_properti}</h3>
            </Col>
            <Col className="col-4">
              <div className="d-flex justify-content-between">
                <p>Tambahkan ke favorit</p>
                <p>Bagikan</p>
              </div>
            </Col>
          </Row>
          <Container className="my-5">
            <Row>
              <Col className="col-6">
                <Image
                  src={`/img_data/thumbnail/${detail.data[0].foto_thumbnail}`}
                  style={{ width: "100%" }}
                  alt="landing"
                />
              </Col>
            </Row>
          </Container>
          <Row className="justify-content-between">
            <Col className="col-8">
              <p>
                <b>5</b> kamar tidur | <b>3</b> kamar mandi | <b>200</b> m2
              </p>
              <p>
                Deskripsi: {detail.data[0].deskripsi}
              </p>
              <p>Keterangan:</p>
              <Row>
                <Col>
                  <p className="m-0 text-secondary">Luas Tanah</p>
                  <p>{detail.data[0].luas_tanah} m2</p>
                  <p className="m-0 text-secondary">Harga per m2</p>
                  <p>Rp 10.000.000</p>
                  <p className="m-0 text-secondary">Listrik</p>
                  <p>{detail.data[0].listrik} watt</p>
                  <p className="m-0 text-secondary">Luas Bangunan</p>
                  <p>{detail.data[0].luar_bangunan}</p>
                </Col>
                <Col>
                  <p className="m-0 text-secondary">Interior</p>
                  <p>Full</p>
                  <p className="m-0 text-secondary">Sertifikat</p>
                  <p>SHM</p>
                  <p className="m-0 text-secondary">Terdaftar Pada</p>
                  <p>12/11/2023</p>
                </Col>
              </Row>
            </Col>
            <Col className="col-4">
              <div
                className="mx-3 px-3 py-2 mb-5 text-light text-center rounded-2 fw-bold"
                style={{ backgroundColor: "#5B4533" }}
              >
                Lihat 3D
              </div>
              <Card className="p-3 rounded-4 text-center d-flex flex-column gap-3">
                <b>Anda berminat?</b>
                <div
                  className="px-3 py-1 text-light rounded-2 fw-bold"
                  style={{ backgroundColor: "#5B4533" }}
                >
                  Hubungi
                </div>
                <div
                  className="px-3 py-1 text-light rounded-2 fw-bold"
                  style={{ backgroundColor: "#5B4533" }}
                >
                  Kirim Pesan
                </div>
                <p className="mt-3 text-secondary">Butuh bantuan?</p>
              </Card>
            </Col>
          </Row>
          <Container className="my-5 d-flex justify-content-center flex-column">
            <h4>Lokasi</h4>
            <Link target="__blank" to={detail.data[0].link_maps} className = "text-decoration-none">
              <div
                  className="px-3 py-2 mb-5 text-light text-center rounded-2 fw-bold w-25"
                  style={{ backgroundColor: "#5B4533" }}
                  >
                  Lihat Lokasi
              </div>
            </Link>
          </Container>
        </Container>
      )}
      <Nav className="exp-section-2">
        <Container className="d-flex flex-column text-center align-items-center justify-content-center">
          <Nav className="fs-2 fw-bold">Pilih Rumah Ternyamanmu</Nav>
          <Nav className="mt-3">
            Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.
          </Nav>
          <Button
            variant="outline-light"
            className="mt-3 ps-4 pt-2 pe-4 pb-2 rounded-5"
          >
            Hubungi Kami
          </Button>
        </Container>
      </Nav>
      <FooterAll />
    </>
  );
}

export default PropertyDetail;
