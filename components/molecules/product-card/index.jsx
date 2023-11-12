import { Card } from "antd";
import React from "react";
import Star from "../../atoms/star";
const { Meta } = Card;
const ProductCard = ({ src, title, price, oldPrice, star, className }) => {
  return (
    <div className={className}>
      <Card
        hoverable
        style={{ width: 200, height: 320 }}
        cover={<img alt="product-card" src={src}></img>}
      >
        <Meta title={title}></Meta>
        <div className="my-2">
          <Star value={star} />
        </div>
        <p>
          <span>${price}</span>
          <span className="text-secondary text-decoration-line-through">
            {oldPrice}
          </span>
        </p>
      </Card>
    </div>
  );
};

export default ProductCard;
