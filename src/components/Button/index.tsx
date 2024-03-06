import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

interface MainButtonProps {
  onClick?: React.MouseEventHandler;
}

const MainButton: React.FC<MainButtonProps> = ({
	onClick = () => {}
}: MainButtonProps) => {
	return (
		<Container className="text-center">
			<Button variant="primary" onClick={onClick} className="text-center">
				Decrypt
			</Button>
		</Container>
	);
};

export default MainButton;
