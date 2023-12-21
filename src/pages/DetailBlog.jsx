import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Col, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarAll from '../components/NavbarAll';
import CardAbout from '../components/CardAbout';
import CardHouse from '../components/CardHouse';
import FooterAll from '../components/FooterAll';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function DetailBlog() {

    const params = useParams()
    const [edit, setEdit] = useState([])
    const [foto, setFoto] = useState([])

    async function getEdit(blog_id) {
        const result = await axios.get(`http://localhost:3052/blog/detail/${blog_id}`)
        setEdit(result.data)
    }

    async function getFoto(blog_id) {
        const result = await axios.get(`http://localhost:3052/blog/detail-foto/${blog_id}`)
        setFoto(result.data)
    }

    useEffect(() => {
        getEdit(params.blog_id)
    }, [params.blog_id]);

    useEffect(() => {
        getFoto(params.blog_id)
    }, [params.blog_id]);

    return (
        <>
            {/* Mintaa gantiin navbar -> jadi navbarUser yaa bang */}
            <NavbarAll />
            <br />
            <div style={{ padding: "0 80px 0 80px" }}>
                Home-Blog <hr />
            </div><br /><br />
            {edit.length == 0 ? (
                <h4>Blog Kosong</h4>
            ) : (
                <div>
                    <div style={{ textAlign: "center" }}>
                        <h3>{edit.data[0].judul}</h3>
                    </div>
                    <div className='d-flex justify-content-around '>
                        <div>
                            Admin
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>
                            {edit.data[0].tgl_publikasi}
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className='text-center mt-5 mb-5'>
                        {foto.length == 0 ? (
                            <h3>Foto Kosong</h3>
                        ) : (foto.data.map((fotoItem, index) => {
                            return (
                                <Col key={index} className='jus'>
                                    <Image src={`/img_data/blog/${fotoItem.foto_blog}`} className='w-50' />
                                </Col>
                            )
                        })

                        )}
                    </div>
                    <div style={{ padding: "0 80px 0 80px", textAlign: "justify" }}>
                        {edit.data[0].isi_blog}
                    </div>
                </div>

            )}
            <br /><br /><br />

            <Nav className='exp-section-2'>
                <Container className='d-flex flex-column text-center align-items-center justify-content-center'>
                    <Nav className='fs-2 fw-bold'>Pilih Rumah Ternyamanmu</Nav>
                    <Nav className='mt-3'>Jadikan setiap detik dan sudut rumahmu berharga dan mengesankan.</Nav>
                    <Button variant="outline-light" className='mt-3 ps-4 pt-2 pe-4 pb-2 rounded-5'>Hubungi Kami</Button>
                </Container>
            </Nav>
            <FooterAll />
        </>

    );
}