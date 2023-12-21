import React from 'react'
import NavbarAll from '../components/NavbarAll'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import SearchBox from '../components/SearchBox'
import CardHouse from '../components/CardHouse'
import FooterAll from '../components/FooterAll'
import BeforeFooter from '../components/BeforeFooter'
import Cookies from 'js-cookie'

export default function SearchResult() {
    const nama = Cookies.get('nama')
    const email = Cookies.get('email')
    const no_hp = Cookies.get('no_hp')

    if (!nama) {
        window.location.href = '/auth/login';
        return;
    }
    return (
        <>
            <NavbarAll />
            <Row className='justify-content-center'>
                <Col xs={6}>
                    <SearchBox />
                </Col>
            </Row>
            <Container className='mt-4'>
                <Nav className='justify-content-center mb-4'>Menampilkan 5 hasil</Nav>

                <Row xs={6} md={3} className='g-5'>
                    <Col className='justify-content-center d-flex'>
                        <CardHouse />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <CardHouse />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <CardHouse />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <CardHouse />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <CardHouse />
                    </Col>
                </Row>
            </Container>
            <BeforeFooter />
            <FooterAll />
        </>
    )
}
