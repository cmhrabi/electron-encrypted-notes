import { Col, Container, Form, Row } from 'react-bootstrap';
import MainButton from '../../components/MainButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../components/CustomContainer';

const Home = () => {
  const navigate = useNavigate();

  const [password, setPassword] = React.useState<string | undefined>(undefined)

  const  handleClick = async () => {
    const file = await window.electron.ipcRenderer.handle('openFile', password)
    navigate('/editor', {state: {mkdStr: file.fileContent, filePath: file.filePath, password: password}})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Container fluid>
      <CustomContainer className='text-center' alignchildren='center'>
        <h1>
          Ecrypted Notes
        </h1>
      </CustomContainer>
      <CustomContainer className='text-center' alignchildren='center'>
        <h5>
          By cmhrabi
        </h5>
      </CustomContainer>
      <CustomContainer alignchildren='center'>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control type="password" value={password} onChange={handleChange} placeholder="Password" />
          </Col>
        </Form.Group>
        <MainButton onClick={handleClick}/>
      </CustomContainer>
    </Container>
  );
}

export default Home
