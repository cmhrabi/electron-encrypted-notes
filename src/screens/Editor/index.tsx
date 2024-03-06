import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const mkdStr = `
# Markdown Editor

---

**Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

\`\`\`
`;

export default function Editor() {
	const [value, setValue] = React.useState<string | undefined>(mkdStr);


	return (
		<>
			<Container>
				<Row>
					<Col md="auto">
						<Button>Back</Button>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</Container>
			<Container data-color-mode="dark">
				<MDEditor value={value} onChange={setValue} />
			</Container>
		</>
	)
}
