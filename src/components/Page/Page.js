import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import "./Page.css";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Card from "../Card/Card";
import Blogs from "../Blogs/Blogs";

const Page = () => {
  const [cardInfo, setCard] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("Cards.json")
      .then((res) => res.json())
      .then((data) => setCard(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <>
      <div className="tree">
        <div className="container-main grid md:grid-cols-4 grid-cols-1  gap-2 bg-slate-100 ">
          <div className="card-container col-span-3 ">
            <div className="logo flex">
              <FontAwesomeIcon
                className="text-orange-400 mr-5 text-5xl"
                icon={faDumbbell}
              ></FontAwesomeIcon>
              <h1 className="text-4xl font-bold text-orange-400 ">
                Health-Club
              </h1>
            </div>
            <h5 className="text-2xl my-8 font-semibold text-center bg-orange-400 text-white rounded-md">
              Choose Your Favourite Workouts
            </h5>
            <div class="container">
              <div class="flex flex-wrap -mx-4">
                <div class="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 px-4 gap-5 pb-20">
                  {cardInfo.map((card) => (
                    <Card
                      key={card.id}
                      card={card}
                      handleAddToCart={handleAddToCart}
                    ></Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="info-container bg-white sticky top-0">
            <Cart cart={cart}></Cart>
          </div>
        </div>
        <Blogs></Blogs>
      </div>
    </>
  );
};

export default Page;
