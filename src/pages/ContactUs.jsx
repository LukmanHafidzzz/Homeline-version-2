import React from 'react'

//Bootstrap
import { Col, Container, Form, FormControl, Image, InputGroup, Nav, Row } from 'react-bootstrap'

//Component
import ContactUsForm from '../components/ContactUsForm'
import AuthButton from '../components/AuthButton'

//Style
import '../assets/style/ContactUs.css'

//Icon
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";

//Route
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ContactUs() {
    const nama = Cookies.get('nama')
    const email = Cookies.get('email')
    const no_hp = Cookies.get('no_hp')

    if (!nama) {
        window.location.href = '/auth/login';
        return;
    }
    return (
        <>
            <Container className='p-5'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={5} classname='border'>
                        <Image src='/images/Pic.png' className='w-100 img-contact' />
                    </Col>
                    <Col xs={4} className='ms-3 me-3'>
                        <Nav className='fs-3 fw-bold mb-3'>Contact Us</Nav>
                        <ContactUsForm label='Nama' type='text' />
                        <ContactUsForm label='Email' type='email' />
                        <ContactUsForm label='Pesan' type='text' />
                        <Nav className='d-flex justify-content-center'>
                            <AuthButton namaBtn='Kirim' />
                        </Nav>
                        <Link className='d-flex justify-content-center text-decoration-none text-home fw-medium'>Back to Home</Link>
                    </Col>
                    <Col xs={2}>
                        <Nav className='fs-5 fw-bold'>Kontak</Nav>
                        homeline@gmail.com
                        +0123456789
                        <Nav className='mt-5 fs-5 fw-bold'>Alamat</Nav>
                        Indonesia
                        <Row className='icon'>
                            <Col className=''>
                                <FaFacebookF className='me-3' />
                                <FaTwitter className='me-3' />
                                <AiFillInstagram />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
