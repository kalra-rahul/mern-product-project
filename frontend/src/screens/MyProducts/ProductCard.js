import React from "react";
import {Badge, Card } from "react-bootstrap";


function ProductCard({ product }) {
      return (
        <div className="product-card">
          <Card>
            <div className="image-container">
              <Card.Img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ${product.price}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <h4>
                <Badge variant="success">Category - {product.category}</Badge>
              </h4>
              <p>{product.description.substring(0, 50)}</p>
              <footer>
                <small className="text-muted">
                   rating{" "}
                  <cite title="Source Title">{product.rating}</cite>
                </small>
              </footer>
            </Card.Body>
          </Card>
        </div>
      );
}

export default ProductCard