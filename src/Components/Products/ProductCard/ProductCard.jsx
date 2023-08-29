import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../../Utils/Base_URL";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("login");

  const handleClick = (id) => {
    console.log(id);
    navigate(`/productdetail/${id}`);
  };

  return (
    <>
      <div className="w-[17rem] max-w-sm bg-white hover:scale-105 duration-300 hover:border hover:border-gray-200 rounded-lg hover:shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-2 rounded rounded-t-lg h-60 w-100 hover:scale-110  duration-500 "
            src={`${BASEURL}/${item?.image}`}
            alt="product image"
          />
        </a>
        <div className="p-2">
          <a href="#" onClick={() => handleClick(item._id)}>
            <h5 className="my-2      text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item?.title}
            </h5>
          </a>
          <a href="#">
            <h5 className="my-2 text-md tracking-tight text-gray-900 dark:text-white">
              {item?.description.substring(0, 10)}
            </h5>
          </a>

          <div className="flex  items-center justify-between ">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              $ {item?.price}
            </span>
            <a
              onClick={() => handleCart(item._id)}
              className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 cursor-pointer"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
