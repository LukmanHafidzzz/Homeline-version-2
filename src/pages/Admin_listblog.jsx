import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';


function Admin_listblog() {
    const [blog, setBlog] = useState([]);

    async function getBlog() {
        try {
            const response = await axios.get('http://localhost:3052/blog');
            setBlog(response.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    }

    async function handleDelete(blog_id) {
      if (confirm('Anda yakin ingin menghapus data?')) {
        const response = await axios.delete(`http://localhost:3052/blog/delete/${blog_id}`)

        alert(response.data.message);
        window.location.reload();
      }
    }

    useEffect(() => {
        getBlog();
    }, []);

  return (
    <>
      <NavbarallAdmin/>
    <div style={{ display:'flex', justifyContent:'center', paddingTop:"30px"}}>
        <div>
            <Sidebar/>
        </div>
        <br />
        <div style={{width:"900px"}}>
        <Link to={'/Admintambahblog'}>
        <button
                    className="mx-0 px-1 py-2  text-light text-center fw-bold"
                    style={{ backgroundColor: "#5B4533", borderRadius:"0px 10px 10px 10px", width:"150px", marginBottom:"20px"}}
                  >
                    Tambah Blog
        </button>
        </Link>
        { blog.length == 0 ? (
          <h4>Data Kosong</h4>
        ) : (blog.data.map((blog, index) => {
          return (
            <div className="card" key={index}>
                <div className="card-body">
                    <div className='d-flex gap-4'>
                        <div className='d-flex' style={{gap:"160px"}}>
                        <div>
                            <h4>{blog.judul}</h4>
                            <span style={{color:"grey"}}>dipublikasikan {blog.tgl_publikasi}</span>
                        </div>
                        <div class="d-grid gap-1 d-md-flex justify-content-md-end " style={{height:"40px", alignContent:"center"}}>
                          <Link to={`/Admineditblog/${blog.blog_id}`}><button onClick={() => getDetailBlog(blogItem.blog_id)} class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button></Link>
                          <button onClick={() => handleDelete(blog.blog_id)} class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          )
        }))};
        </div>
      <br />
      <br />

      </div>
    </>

  );
}
export default Admin_listblog;
