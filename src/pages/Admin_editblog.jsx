import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Card, Col, Container, FormSelect, Image, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Sidebar from '../components/Sidebar';
import NavbarallAdmin from '../components/NavbarallAdmin';
import { useParams } from 'react-router-dom';

function Admin_editblog() {
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

    async function editBlog(blog_id) {
        try {
            const result = await axios.patch(`http://localhost:3052/blog/update/${blog_id}`, {
                judul,
                isi_blog
            });
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEdit(params.blog_id)
    }, [params.blog_id]);

    useEffect(() => {
        getFoto(params.blog_id)
    }, [params.blog_id]);

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
                            <h3 className="fw-bold">Edit Blog</h3>
                            {edit.length == 0 ? (
                                <h3>Data Kosong</h3>
                            ) : (
                                <form action="">
                                    <div className="mt-3">
                                        <label htmlFor="nama" className="form-label fw-bold">
                                            Judul
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nama"
                                            placeholder=""
                                            value={edit.data[0].judul}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor="file" className="form-label fw-bold">
                                            Foto Blog
                                            <Row>
                                                {foto.length == 0 ? (
                                                    <h3>Foto Kosong</h3>
                                                ) : (foto.data.map((fotoItem, index) => {
                                                    return (
                                                        <Col key={index}>
                                                            <Image src={`/img_data/blog/${fotoItem.foto_blog}`} className='w-100' />
                                                        </Col>
                                                    )
                                                })

                                                )}
                                            </Row>
                                        </label>
                                    </div>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea">
                                        < Form.Label className='fw-bold pt-3'>Isi Blog</Form.Label>
                                        < Form.Control as="textarea" rows={8} placeholder="" value={edit.data[0].isi_blog} />
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
                {/* Tambahkan opsi-opsi lain sesuai kebutuhan Anda 
                </select> 
                </div> */}

                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="mx-3 px-3 py-2 my-3 text-light text-center fw-bold"
                                            style={{ backgroundColor: "#5B4533", borderRadius: "0px 10px 10px 10px", width: "150px" }}
                                        >
                                            Simpan perubahan
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Card>
                    </Col>
                </div>

            </div>


        </>
    );
}
export default Admin_editblog;