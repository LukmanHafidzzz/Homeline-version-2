import React, { useState } from 'react'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { Button, Card, Col, Container, FormSelect, Row, } from "react-bootstrap";
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';

function Admin_tambahblog() {
  const [judul, setJudul] = useState('');
  const [isi_blog, setIsiBlog] = useState('');
  const navigate = useNavigate();

  async function handleAddBlog() {
    const result = await axios.post('http://localhost:3052/post-blog', {
      judul,
      isi_blog
    });
    alert(result.data.message);
    window.location.href = '/admin_listpesanan';
  }

  const saveBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3052/post-blog', {
        judul,
        isi_blog
      });
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavbarallAdmin />

      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: "30px" }}>
        <div>
          <Sidebar />
        </div>
        <div style={{ width: "900px" }}>
          <Col className="col-12">
            <Card className="p-3 d-flex flex-column gap-3">
              <h3 className="fw-bold">Tambah Blog</h3>
              <form action="" encType='multipart/form' onSubmit={saveBlog}>
                <div className="mt-3">
                  <label htmlFor="nama" className="form-label fw-bold">
                    Judul
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="judul"
                    placeholder="Tuliskan Disini"
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="gambar" className="form-label fw-bold">
                    Pilih Gambar
                  </label>
                  <input className="form-control" type="file" id="file" onChange={(e) => setFotoBlog(e.target.files[0])}/>
                </div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                  < Form.Label className='fw-bold pt-3'>Isi Blog</Form.Label>
                  < Form.Control as="textarea" rows={8} placeholder="Tuliskan disini" onChange={(e) => setIsiBlog(e.target.value)}/>
                </Form.Group>
                {/* <div className="mt-3">
  <label htmlFor="jenisBlog" className="form-label fw-bold">
    Jenis Blog
  </label>
  <select
    className="form-select"
    id="jenisBlog"
    aria-label="Jenis Blog"
  >
    <option selected>Pilih Jenis</option>
    <option value="teknologi">Teknologi</option>
    <option value="lifestyle">Lifestyle</option>
    <option value="travel">Travel</option>
    
  </select>
</div>  */}

                <div className="d-flex justify-content-end">
                  <button
                    type='submit'
                    className="mx-3 px-3 py-2 my-5 text-light text-center fw-bold"
                    style={{ backgroundColor: "#5B4533", borderRadius: "0px 10px 10px 10px", width: "150px" }}
                  >
                    Kirim
                  </button>
                </div>
              </form>
            </Card>
          </Col>
        </div>

      </div>

    </>
  );
}
export default Admin_tambahblog;