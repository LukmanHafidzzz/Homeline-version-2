import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

import { Card, Col, Container, FormSelect, Row } from "react-bootstrap";
import FooterAll from "../components/FooterAll";
import NavbarAll from "../components/NavbarAll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faUserCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";


function PendaftaranNotaris() {
  const [nama, setNama] = useState('')
  const [alamat, setAlamat] = useState('')
  const [email, setEmail] = useState('')
  const [no_hp, setNomor] = useState('')
  const [deskripsi_notaris, setDeskripsiNotaris] = useState('')
  const [notaris_sertifikat, setNotarisSertifikat] = useState(null)
  const [foto, setFoto] = useState(null)

  const handleNamaChange = (e) => {
    setNama(e.target.value);
  };

  const handleAlamatChange = (e) => {
    setAlamat(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNoChange = (e) => {
    setNomor(e.target.value);
  };

  const handleDeskripsiChange = (e) => {
    setDeskripsiNotaris(e.target.value);
  };

  const handleSertifUpload = (e) => {
    setNotarisSertifikat(e.target.files[0])
  }

  const handleFotoUpload = (e) => {
    setFoto(e.target.files[0])
  }

  async function handleUpload() {
    try {
      const formData = new FormData();
      formData.append('nama', nama);
      formData.append('alamat', alamat);
      formData.append('email', email);
      formData.append('no_hp', no_hp);
      formData.append('deskripsi_notaris', deskripsi_notaris);
      formData.append('notaris_sertifikat', notaris_sertifikat);
      formData.append('foto', foto);

      const result = await axios.post('http://localhost:3052/post-notaris', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Server response:', result.data);
      window.location.href = '/jasa-notaris'
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <>
      <NavbarAll />
      <Container className="p-3">
        <p>Home - Daftar Notaris</p>
        <hr />
        <h1 className="text-center my-5 fw-bold" style={{ width: "100%" }}>
          Daftar Sekarang dan Jangkau
          Lebih Banyak Klien!
        </h1>
        <Row>
          <Col className="col-8">
            <Card className="p-3 rounded-4 d-flex flex-column gap-3">
              <h3 className="fw-bold">Isi Formulir</h3>
              <form>

                <Container>
                  <div className="mt-3">
                    <label htmlFor="rumah" className="form-label fw-bold">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rumah"
                      value={nama}
                      onChange={handleNamaChange}
                      placeholder="Tuliskan Disini"
                    />
                    <div className="mt-3">
                      <label htmlFor="alamat" className="form-label fw-bold">
                        Domisili
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="alamat"
                        value={alamat}
                        onChange={handleAlamatChange}
                        placeholder="Pilih Alamat"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="luas_bangunan"
                      className="form-label fw-bold"
                    >
                      No telepon
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="luas_bangunan"
                      value={no_hp}
                      onChange={handleNoChange}
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="listrik" className="form-label fw-bold">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="listrik"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Tuliskan disini"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="notaris_sertivikat" className="form-label fw-bold">
                      Portofolio
                    </label>
                    <input className="form-control" type="file" onChange={handleSertifUpload}/>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="deskripsi" className="form-label fw-bold">
                      Deskripsikan Dirimu
                    </label>
                    <textarea
                      className="form-control"
                      id="deskripsi"
                      value={deskripsi_notaris}
                      onChange={handleDeskripsiChange}
                      placeholder="Tuliskan detailnya disini"
                    ></textarea>
                  </div>
                  <div className="mt-3">
                    <label htmlFor="foto" className="form-label fw-bold">
                      Tambah Foto
                    </label>
                    <input className="form-control" type="file" onChange={handleFotoUpload}/>
                  </div>
                </Container>
                <Container className="d-flex justify-content-end">
                </Container>
              </form>
              <button
                onClick={handleUpload}
                className="mx-3 px-3 py-2 my-5 text-light text-center rounded-2 fw-bold"
                style={{ backgroundColor: "#5B4533" }}
              >
                Kirim
              </button>
            </Card>
          </Col>
          <Col className="col-4">
            <Card className="p-3 rounded-4 d-flex flex-column gap-3">
              <div
                className="mx-3 px-3 py-2 mb-3 text-light text-center rounded-5 fw-bold"
                style={{ backgroundColor: "#5B4533" }}
              >
                Pantau Pendaftaran
              </div>
              <Container className="d-flex flex-column gap-3 align-items-center fw-bold">
                <p>
                  <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                  Kirim Formulir
                </p>
                <p>
                  <FontAwesomeIcon icon={faUserCheck} className="me-2" />
                  Verifikasi Data
                </p>
                <p>
                  <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                  Selesai
                </p>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <FooterAll />
    </>

  );
}
export default PendaftaranNotaris;
