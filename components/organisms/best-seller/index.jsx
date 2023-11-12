import React from "react";
import ProductCard from "../../molecules/product-card";
import { Button } from "react-bootstrap";
import { ButtonPrimary } from "../../atoms/button";
const Cards = [
  {
    id: "1",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "2",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "3",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "4",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "5",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "6",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "7",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
  {
    id: "8",
    src: "https://i.pinimg.com/564x/ea/84/5f/ea845f84e1268810dddc27b6a66ed6ad.jpg",
    title: "JCOLUSHI Grooming Shedding Cleaning Undercoat",
    price: 100,
    oldPrice: 190,
    star: 3,
  },
];
const BestSeller = () => {
  return (
    <div className="best-seller-container">
      <div className="d-flex justify-content-between">
        <h4 className="text-dark">Best Seller</h4>
        <div>
          <ButtonPrimary label="View more"></ButtonPrimary>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {Cards.map((card) => (
          <div className="col-lg-3">
            <ProductCard
              key={card.id}
              title={card.title}
              src={card.src}
              price={card.price}
              oldPrice={card.oldPrice}
              star={card.star}
              className="py-3"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
