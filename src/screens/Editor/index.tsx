import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

interface EditorProps {
  mkdStr?: string
  filePath: string
  password: string
}

const getFileNameFromPath = (path: string) => {
  // Split the path by '\' or '/' depending on the OS
  const pathParts = path.split(/[\\/]/);
  // The last part of the path is the file name
  const fileName = pathParts[pathParts.length - 1];
  return fileName;
}

const Editor = () => {
  const location = useLocation();
  const props: EditorProps = location.state;

  const [value, setValue] = React.useState<string | undefined>(props.mkdStr);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1)
  }

  const handleSave = async () => {
    if (!value) return;
    window.electron.ipcRenderer.sendMessage('saveText', value, props.password, props.filePath)
  }

  return (
    <>
      <Container className='d-flex flex-column text-center align-items-center min-vh-100 home-background' fluid>
        <Container className='w-100 p-3' fluid>
          <Row>
            <Col>
              <Button className='w-35' onClick={handleClick}>Back</Button>
            </Col>
            <Col>
              <h2>{getFileNameFromPath(props.filePath)}</h2>
            </Col>
            <Col>
              <Button onClick={handleSave} className='w-35'>Save</Button>
            </Col>
          </Row>
        </Container>
        <Container data-color-mode="dark" className='w-100' fluid>
          <MDEditor value={value} onChange={setValue} height='90vh'/>
        </Container>
      </Container>
    </>
  )
}

export default Editor
