import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductsScreen = ({ products }) => {
  return (
    <Container>
      <h1 className="mt-4 mb-4">Products</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsScreen;
