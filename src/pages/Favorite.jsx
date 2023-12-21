import React from 'react'
import NavbarAll from '../components/NavbarAll'
import { Container, Nav } from 'react-bootstrap'
import CardHouse from '../components/CardHouse'
import CardHouseFavorite from '../components/CardHouseFavorite'
import FooterAll from '../components/FooterAll'
import Cookies from 'js-cookie'

export default function Favorite() {
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

            <Container className='mt-3'>
                <Nav className='mb-4 border-bottom'>Home - Favorite</Nav>
                <Nav className='fw-semibold justify-content-center'>Belum ada yang disimpan</Nav>
                <Nav className='mt-4 justify-content-between'>
                    {/* <CardHouseFavorite />
                    <CardHouseFavorite />
                    <CardHouseFavorite /> */}
                </Nav>
            </Container>

            <Nav className='mt-5 section-new'>
                <Container className='pt-5 pb-5'>
                    <Nav className='fs-4 fw-semibold justify-content-center'>Pilihan Terbaik Untukmu</Nav>
                    <Nav className='mt-4 justify-content-between'>
                        {/* <CardHouse />
                        <CardHouse />
                        <CardHouse /> */}
                    </Nav>
                </Container>
            </Nav>
            <FooterAll />
        </>
    )
}
