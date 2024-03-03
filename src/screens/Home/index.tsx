import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import MainButton from "../../components/Button";
import React from "react";

export default function Home() {
  const [openfile, setOpenFile] = React.useState("")
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOpenFile(event.target.value)
  }

  return (
    <Container fluid>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Form.Group controlId="formFile" onChange={handleChangeFile} className="mb-3"> 
            <Form.Control type="file" />
          </Form.Group>
          <MainButton />
        </Col>
      <Col></Col>
      </Row>
    </Container>
  );
  }