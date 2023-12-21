import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PhotoDetailBox = () => {
  const data = [
    { id: 1, imgUrl: 'https://via.placeholder.com/200', description: 'Rudi Hartono, S.H., M.Kn.', title: 'Batam,' },
    { id: 2, imgUrl: 'https://via.placeholder.com/200', description: 'Nabila Fauzi, S.H., M.Kn.', title: 'Jakarta' },
    { id: 3, imgUrl: 'https://via.placeholder.com/200', description: 'Haryono Wibowo, S.H., M.Kn.', title: 'Bandung' },
  ];

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        {data.map(item => (
          <Col key={item.id} md={4} className="my-4">
            <Card>
              <Row>
                <Col md={12}>
                  <Card.Img variant="top" src={item.imgUrl} alt="Foto" />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold' }}>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PhotoDetailBox;
