import React from 'react'
import '../assets/style/CardNotaris.css'
import { Card, Image } from 'react-bootstrap'
import PriceBox from './PriceBox'

export default function CardNotaris(props) {
    return (
        <>
            <Card style={{ width: '19rem' }} className='position-relative card-notaris'>
                <Image variant="top" src={`/img_data/notaris/${props.foto}`} className='border card-notaris-img' />
                {/* <Image variant="top" src="/images/notaris3.png" className='border card-notaris-img' /> */}
                <Card.Body>
                    <Card.Text className='fw-bold'>{props.alamat}</Card.Text>
                    {/* <Card.Text className='fw-bold'>Surabaya</Card.Text> */}
                    <Card.Title className='fw-bold fs-6'>{props.nama}</Card.Title>
                    {/* <Card.Title className='fw-bold fs-6'>Agus Setiawan, SH., M.Kn.</Card.Title> */}
                </Card.Body>
            </Card>
        </>
    )
}
