import { Alert, Container, Form } from 'react-bootstrap';
import MainButton from '../../components/MainButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [password, setPassword] = React.useState<string | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)

  const  handleClick = async () => {
    const file = await window.electron.ipcRenderer.handle('openFile', password)

    if (!file) return;

    if (!password) {
      setError(new Error('No Password Set'))
      return;
    }
    navigate('/editor', {state: {mkdStr: file.fileContent, filePath: file.filePath, password: password}})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Container  className='d-flex flex-column text-center justify-content-between align-items-center px-container-main min-vh-100 home-background' fluid>
      <Container className='d-flex flex-column text-center align-items-center'>
        <h1 className='pt-6'>
          Ecrypted Notes
        </h1>
        <h5>
          By cmhrabi
        </h5>
        <Form.Group className="mb-3 mt-5 w-50" controlId="formPlaintextPassword">
          <Form.Control type="password" value={password} onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <MainButton error={error} onClick={handleClick}/>
      </Container>
      <Container className='d-flex flex-column align-items-center'>
        {error &&
          <Alert className="mt-2 w-35" variant='danger'>
            Error: {error?.message}
          </Alert>
        }
      </Container>
    </Container>
  );
}

export default Home
