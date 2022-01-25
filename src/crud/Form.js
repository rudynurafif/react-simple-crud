import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>{id ? 'Ubah Data' : 'Tambah Data'}</h4> <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label> Nama Makanan </Form.Label> <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label> Deskripsi </Form.Label>
              <Form.Control
                as="textarea"
                name="deskripsi"
                style={{
                  height: "100px",
                }}
                value={deskripsi}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Harga </Form.Label> <Form.Control type="number" name="harga" value={harga} onChange={(event) => handleChange(event)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-5">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
