import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarAll from '../components/NavbarAll';
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';


export default function Blog() {
  const nama = Cookies.get('nama')
  const email = Cookies.get('email')
  const no_hp = Cookies.get('no_hp')

  if (!nama) {
    window.location.href = '/auth/login';
    return;
}

  const [blog, setBlog] = useState([]);

  async function getBlog() {
      try {
          const response = await axios.get('http://localhost:3052/blog');
          setBlog(response.data);
      } catch (error) {
          console.error('Error fetching blog data:', error);
      }
  }

  useEffect(() => {
    getBlog();
}, []);

  

  return (
    <>
      {/* Mintaa gantiin navbar -> jadi navbarUser yaa bang */}
      <NavbarAll />
      <br />
      <div style={{ padding: "0 80px 0 80px" }}>
        Home-Blog <hr />
      </div><br /><br />
      <div style={{ textAlign: "center" }}>
        <h3>Blog Homeline</h3> <br /><br />
      </div>
      <div class="container d-flex justify-content-start">
        <div class="row">
          {blog.length == 0 ? (
            <h4>Blog Kosong</h4>
          ) : (blog.data.map((blog, index) => {
            return (
              <div class="col" key={index}>
                <Link to={`/detailblog/${blog.blog_id}`} className='text-decoration-none'>
                  <CardBlog tanggal={blog.tgl_publikasi} judul={blog.judul} foto={blog.foto}/>
                </Link>
              </div>
            )
          }))}
        </div>
      </div>
      <br />
      <br />

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