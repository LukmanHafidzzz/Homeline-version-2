import React from 'react'
import { Button, Container, Nav } from 'react-bootstrap';
import CardBlog from '../components/CardBlog';
import FooterAll from '../components/FooterAll';
import NavbarallAdmin from '../components/NavbarallAdmin';
import Sidebar from '../components/Sidebar';
import Search from '../components/search';
import { Link } from 'react-router-dom';
import VerificationBox from '../components/VerificationBox';



function Admin_notaris() {
  return (
    <>
      <NavbarallAdmin/>
    <div style={{ display:'flex', justifyContent:'center', paddingTop:"30px"}}>
        <div>
            <Sidebar/>
        </div>
        <br />
        <div style={{width:"900px"}}>
       <h3>Notaris</h3>
       <Search/> <br />
       <div className='d-flex'>
       <table class="table mx-2 " style={{ width: '70%' }}>
  <thead>
    <tr style={{textAlign:"center"}}>
      <th scope="col">Nama</th>
      <th scope="col" >Paket Pelanggan</th>
      <th scope="col">Status</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Syalala</td>
      <td style={{textAlign:"center"}}>6 Bulan</td>
      <td style={{color:"green", textAlign:"center"}}>Aktif</td>
      <td>
            <div class="d-grid gap-1 d-md-flex justify-content-center " style={{height:"40px", alignContent:"center"}}>
                      <Link to={'/NotarisAdmin'}><button class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button> </Link>
                      <button class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
            </div>
      </td>
      
    </tr>
    <tr>
      <td scope="row">Intan</td>
      <td style={{textAlign:"center"}}>6 Bulan</td>
      <td style={{color:"red", textAlign:"center"}}>Kadaluarsa</td>
      <td>
            <div class="d-grid gap-1 d-md-flex justify-content-center " style={{height:"40px", alignContent:"center"}}>
                      <Link to={'/NotarisAdmin'}><button class="btn btn-primary me-md-3" style={{borderRadius:"20px"}} type="button">Edit</button> </Link>
                      <button class="btn btn-danger" style={{borderRadius:"20px"}} type="button">Hapus</button>
            </div>
      </td>
    </tr>

  </tbody>
</table>
<VerificationBox/>
</div>
         
        </div>
      <br />
      <br />

      </div>
    </>

  );
}
export default Admin_notaris;
