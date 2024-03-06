import { Col, Container, Form, Row } from 'react-bootstrap';
import MainButton from '../../components/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
	const [openfile, setOpenFile] = React.useState('')
	const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOpenFile(event.target.value)
	}

	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/editor')
	}

	return (
		<Container fluid>
			<Row>
				<Col></Col>
				<Col md="auto">
					<Form.Group controlId="formFile" onChange={handleChangeFile} className="mb-3">
						<Form.Control type="file" />
					</Form.Group>
					<MainButton onClick={handleClick}/>
					{openfile}
				</Col>
				<Col></Col>
			</Row>
		</Container>
	);
}
