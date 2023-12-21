// Bootstrap

//Route
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ContactUs from "./pages/ContactUs"
import Landingpage from "./pages/Landingpage"
import Homepage from "./pages/Homepage"
import PropertyDetail from "./pages/PropertyDetail"
import SearchResult from "./pages/SearchResult"
import Favorite from "./pages/Favorite"
import JasaNotaris from "./pages/JasaNotaris"
import DataNotaris from "./pages/DataNotaris"
import Blog from "./pages/Blog"
import DetailBlog from "./pages/DetailBlog"
import JualProperti from "./pages/JualProperti"
import NotarisAdmin from "./pages/NotarisAdmin"
import Verifnotaris from "./pages/Verifnotaris"
import Admin_lihatpelanggan from "./pages/Admin_lihatpelanggan"
import Admin_profil from "./pages/Profil"
import Admin_listblog from "./pages/Admin_listblog"
import Admin_listpesanan from "./pages/Admin_listpesanan"
import Admin_listpelanggan from "./pages/Admin_listpelanggan"
import Pendaftarannotaris from "./pages/PendaftaranNotaris"
import Profil from "./pages/Profil"
import Adminlistpesanan from "./pages/Adminlistpesanan"
import Admin_editblog from "./pages/Admin_editblog"
import Admin_tambahblog from "./pages/Admin_tambahblog"
import Listpesanangagal from "./pages/Listpesanangagal"
import Admin_dashboard from "./pages/Admin_dashboard"
import Admin_notaris from "./pages/Admin_notaris"




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landingpage />}/>
      <Route path="/auth/login" element={<Login />}/>
      <Route path="/auth/register" element={<Register />}/>
      <Route path="/contact-us" element={<ContactUs />}/>
      <Route path="/homepage" element={<Homepage />}/>
      <Route path="/detail" element={<PropertyDetail />}/>
      <Route path="/search-result" element={<SearchResult />}/>
      <Route path="/favorite" element={<Favorite />}/>
      <Route path="/jasanotaris" element={<JasaNotaris />}/>
      <Route path="/DataNotaris" element={<DataNotaris />}/>
      <Route path='/blog' element={<Blog />} />
      <Route path='/detailblog' element={<DetailBlog />} />
      <Route path='/jualproperti' element={<JualProperti />} />
      <Route path='/pendaftaran-notaris' element={<Pendaftarannotaris />} />
      <Route path='/Profil' element={<Profil />}/>
      
      <Route path='/NotarisAdmin' element={<NotarisAdmin />}/>
      <Route path='/Verifnotaris' element={<Verifnotaris />}/>
      <Route path='/Admin_dashboard' element={<Admin_dashboard />}/>
      <Route path='/Admin_notaris' element={<Admin_notaris />}/>
      <Route path='/Admin_lihatpelanggan' element={<Admin_lihatpelanggan />}/>
      <Route path='/AdminProfil' element={<Admin_profil />}/>
      <Route path='/Admineditblog' element={<Admin_editblog />}/>
      <Route path='/Admintambahblog' element={<Admin_tambahblog />}/>

      <Route path='/Admin_listblog' element={<Admin_listblog />}/>
      <Route path='/Admin_listpelanggan' element={<Admin_listpelanggan />}/>
      <Route path='/Admin_listpesanan' element={<Admin_listpesanan />}/>
      <Route path='/Admin_listpesanangagal' element={<Listpesanangagal />}/>
      <Route path='/Adminlistpesanan' element={<Adminlistpesanan />}/>

    </Routes>
    </>
  )
}

export default App
