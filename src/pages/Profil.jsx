import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import '../assets/style/ProfilAdmin.css';
import NavbarAll from '../components/NavbarAll';
import FooterAll from '../components/FooterAll';
import { Container } from 'react-bootstrap';

import Cookies from 'js-cookie'

function Profil() {
  const nama = Cookies.get('nama')
  const email = Cookies.get('email')
  const no_hp = Cookies.get('no_hp')
  const password = Cookies.get('password')

  if (!nama) {
      window.location.href = '/auth/login';
      return;
  }

  return (
    <>
      <NavbarAll />
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
        <Card className="d-flex" style={{ paddingTop: '50px', width: '900px' }}>
          <Card.Body className="d-flex">
            <div className="mx-4">
              <h4 className='text-center'>Foto Profil</h4>
              <img
                src="/images/avatar.png"
                alt="Avatar"
                style={{ width: '188px', borderRadius: '1%' }}
              />
              <p className='text-center'>Edit Profil</p>
            </div>
            <Form style={{ width: '100%' }}>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Nama
                </Form.Label>
                <Col sm="10">
                  <Form.Control value={nama} type="text" placeholder="Set nama" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" value={email} placeholder="Enter email" />
                </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  NO. telepon
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" value={no_hp} placeholder="Enter telepon" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Alamat
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="text" placeholder="Enter alamat" />
                </Col>
              </Form.Group>

              {/* Tambahkan tombol di sini */}
              <Container className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="mx-3 px-3 py-2 my-5 text-light text-center rounded-2 fw-bold"
                    style={{ backgroundColor: "#5B4533" }}
                  >
                    Simpan
                  </button>
                </Container>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
      <div class="card" style={{ width: '900px' }}>
        <h5 class="card-header">Status Jual Rumah</h5>
        <div class="card-body">
          <p class="card-text" style={{color:'brown'}}>verifikasi data</p>
        </div>
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
      <div class="card" style={{ width: '900px' }}>
        <h5 class="card-header">Status Daftar Notaris</h5>
        <div class="card-body">
          <p class="card-text" style={{color:'brown'}}>-</p>
        </div>
      </div>
      </div>
      <br /><br />

    <FooterAll/>
    </>
  );
}

export default Profil;
