import { Container } from 'react-bootstrap';
import MainButton from '../../components/MainButton';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomContainer from '../../components/CustomContainer';

const Home = () => {
  const navigate = useNavigate();

  const  handleClick = async () => {
    const file = await window.electron.ipcRenderer.handle('openFile')
    navigate('/editor', {state: {mkdStr: file.fileContent, filePath: file.filePath}})
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
        <MainButton onClick={handleClick}/>
      </CustomContainer>
    </Container>
  );
}

export default Home
