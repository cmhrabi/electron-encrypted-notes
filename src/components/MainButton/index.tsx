import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface MainButtonProps {
  onClick?: React.MouseEventHandler;
  error?: Error;
}

const MainButton: React.FC<MainButtonProps> = ({
  onClick = () => {},
}: MainButtonProps) => {
  return (
    <Container fluid className="d-flex flex-column text-center align-items-center">
      <Button variant="primary" onClick={onClick} className="text-center">
        Open a notes file!
      </Button>
    </Container>
  );
};

export default MainButton;
