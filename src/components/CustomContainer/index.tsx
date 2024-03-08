import React from 'react';
import { Col, ColProps, Container, ContainerProps, Row } from 'react-bootstrap';

interface CustomContainerProps extends ContainerProps {
  alignchildren?: 'left' | 'center' | 'right',
  children?: React.ReactNode
  colProps?: ColProps
}

const CustomContainer: React.FC<CustomContainerProps> = (props: CustomContainerProps) => {
  return (
    <Container {...props}>
      <Row>
        <Col {...props.colProps}>
          {props.alignchildren == 'left' && props.children}
        </Col>
        <Col {...props.colProps}>
          {props.alignchildren == 'center' && props.children}
        </Col>
        <Col {...props.colProps}>
          {props.alignchildren == 'right' && props.children}
        </Col>
      </Row>
    </Container>
  );
};

CustomContainer.defaultProps = {
  alignchildren: 'left',
};

export default CustomContainer;
