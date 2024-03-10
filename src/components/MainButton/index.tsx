import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface MainButtonProps {
  onClick?: React.MouseEventHandler;
  error?: Error;
}

const MainButton: React.FC<MainButtonProps> = ({
  onClick = () => {},
  error
}: MainButtonProps) => {
  return (
    <Container className="text-center">
      <Button variant="primary" onClick={onClick} className="text-center">
        Open a notes file!
      </Button>
      {error &&
        <Alert className="mt-2 w-100" variant='danger'>
          Error: {error?.message}
        </Alert>
      }
    </Container>
  );
};

export default MainButton;
