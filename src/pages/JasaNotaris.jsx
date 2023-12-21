import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarAll from '../components/NavbarAll'
import FooterAll from '../components/FooterAll'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import SearchBox2 from '../components/SearchBox2'
import CardNotaris from '../components/CardNotaris'
import { Link } from 'react-router-dom'

import '../assets/style/JasaNotaris.css'
import Cookies from 'js-cookie'

function JasaNotaris() {

    const [notaris, setNotaris] = useState([]);

    async function getNotaris() {
        const response = await axios.get('http://localhost:3052/jasa-notaris');

        // console.log(response.data);

        setNotaris(response.data);
    }

    useEffect(() => {
        getNotaris();
    }, []);

    return (
        <>
            <NavbarAll />
            <Container className='mt-5'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col>
                        <Nav className='fs-2 fw-bold'>Temukan Notaris Terdekat dan  Berkompeten </Nav>
                    </Col>
                    <Col>
                        <SearchBox2 />
                    </Col>
                </Row>
            </Container>
            <Container className='mt-4'>
                <Row xs={6} md={3} className='mt-4 g-5'>
                    { notaris.length == 0 ? (
                        <Col>Data Kosong</Col>

                    ) : (notaris.data.map((notaris, index) =>{
                        return (
                            <Col key={index} className='justify-content-center d-flex'>
                                <CardNotaris foto={notaris.foto} nama={notaris.nama} alamat={notaris.alamat} />
                            </Col>
                        );
                    }))};
                </Row>
            </Container>
            <Container className="mt-5 mb-5 section-daftar pt-3 pb-3 ps-5 pe-5">
                <Row className='justify-content-center align-items-center d-flex'>
                    <Col xs={8}>
                        <Nav className='fs-3 fw-bold'>Anda Seorang Notaris? <br /> Jangkau Lebih Banyak Klien di Homeline</Nav>
                    </Col>
                    <Col className=''>
                        <Nav className='justify-content-center'>Daftar Disini</Nav>
                        <Nav className='justify-content-center'>
                            <Link to={"/pendaftaran-notaris"} className='text-decoration-none fs-5 fw-semibold justify-content-center text-center align-items-center d-flex btn-daftar'>
                                Daftar
                            </Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
            <FooterAll />
        </>
    )
}

export default JasaNotaris;
