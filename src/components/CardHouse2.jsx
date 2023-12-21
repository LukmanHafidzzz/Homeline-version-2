import React from 'react'
import '../assets/style/CardHouse2.css'
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import PriceBox from './PriceBox';
import ShareBtn from './ShareBtn';

export default function CardHouse2(proms) {
    return (
        <>
            <Card className='card-house-2 rounded-4 position-relative'>
                <Row className='p-3 justify-content-center align-items-center d-flex'>
                    <Col className="">
                        <Card.Img variant="top" src={`/img_data/thumbnail/${proms.foto}`} className='card-img'/>
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Text className='fw-semibold'>{proms.domisili}</Card.Text>
                            <Card.Title className='fw-bold fs-6'>{proms.nama_properti}</Card.Title>
                            <Card.Text className='text-detail mt-3'>
                                <IoBedOutline /> <span className='fw-semibold'>3</span> Kamar Tidur
                            </Card.Text>
                            <Card.Text className='text-detail'>
                                <LuBath /> <span className='fw-semibold'>2</span> Kamar Mandi
                            </Card.Text>
                            <Card.Text className='text-detail'>
                                <MdOutlineSpaceDashboard /> <span className='fw-semibold'>{proms.luas_tanah}</span> m<sup>2</sup>
                            </Card.Text>
                            <ShareBtn />
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </>
    )
}
