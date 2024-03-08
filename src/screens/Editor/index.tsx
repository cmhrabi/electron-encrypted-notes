import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

interface EditorProps {
  mkdStr?: string
}

const Editor = () => {
  const location = useLocation();
  const props: EditorProps = location.state;

  const [value, setValue] = React.useState<string | undefined>(props.mkdStr);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Button onClick={handleClick}>Back</Button>
          </Col>
          <Col></Col>
          <Col>
            <Button>Save</Button>
          </Col>
        </Row>
      </Container>
      <Container data-color-mode="dark">
        <MDEditor value={value} onChange={setValue} />
      </Container>
    </>
  )
}

export default Editor
