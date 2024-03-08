import { Container, Form } from 'react-bootstrap';
import MainButton from '../../components/MainButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../components/CustomContainer';

const readerFilePromise = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const fr = new FileReader();
    fr.onload = () => resolve(fr.result as string);
    fr.readAsText(file);
  });
}

const Home = () => {
  const [openFile, setOpenFile] = React.useState<FileList | null | undefined>(undefined)
  const [error, setError] = React.useState<Error | undefined>(undefined)
  const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setOpenFile(event.target.files)
    }
  }

  const navigate = useNavigate();

  const  handleClick = async() => {
    if (openFile) {
      const text = await readerFilePromise(openFile[0])
      navigate('/editor', {state: {mkdStr: text}})
    }
    setError(new Error('Please select a file to open'))
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
        <Form.Group controlId="formFile" onChange={handleChangeFile} className="mb-3">
          <Form.Control accept='.txt, .md' type="file" />
        </Form.Group>
        <MainButton error={error} onClick={handleClick}/>
      </CustomContainer>
    </Container>
  );
}

export default Home
