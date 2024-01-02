import React from 'react'

//Style
import '../assets/style/NavbarAll.css'

import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { HiOutlineChevronDown } from 'react-icons/hi';
import Cookies from 'js-cookie';

export default function NavbarAll() {

    function handleLogout() {
        Cookies.remove('nama')
        Cookies.remove('email')
        window.location.href = '/'
    }

    return (
        <>
            <Container className='box-navbar mt-4'>
                <Navbar className="">
                    <Link to={'/homepage'} className='text-decoration-none'><Navbar.Brand className="fw-bold"><Image src='/images/Logo.png' className="w-50" />Homeline</Navbar.Brand></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-4">
                            <Nav.Link><Link className="text-navbar text-decoration-none fw-semibold" to={'/jualproperti'}>Jual Properti</Link></Nav.Link>
                            <Nav.Link><Link className="text-navbar text-decoration-none fw-semibold" to={'/favorite'}>Favorite</Link></Nav.Link>
                            <Nav.Link><Link className="text-navbar text-decoration-none fw-semibold" to={'/blog'}>Blog</Link></Nav.Link>
                            <Nav.Link>
                                <Dropdown align={{ lg: 'end' }}>
                                    <Dropdown.Toggle id="dropdown-basic" as={CustomToggle} variant="">
                                        <span className='fw-semibold text-dropdown text-navbar'>Akun <HiOutlineChevronDown className='fw-lighter' /></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='mt-2 dropdown-box p-3'>

                                    <Dropdown.Item href="#/action-1" className='text-center dropdown-text mb-3 fw-medium'>
                                        <Link to={'/Profil'} className='text-decoration-none'>Profil</Link></Dropdown.Item>
                                        <Dropdown.Item className='text-center dropdown-text fw-medium'><Link to={'/landingpage'} className='text-decoration-none'>Keluar</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="#"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className="custom-toggle text-decoration-none"
    >
        {children}
    </a>
));