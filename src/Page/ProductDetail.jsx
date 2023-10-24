import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASEURL } from "../Utils/Base_URL";
import { loadStripe } from '@stripe/stripe-js';
const Star = ({ filled }) => (
  <svg
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    className="w-4 h-4 text-indigo-500"
    viewBox="0 0 24 24"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  const filledStars = Array.from({ length: product?.rating?.rate || 0 }).fill(
    true
  );
  const emptyStars = Array.from({
    length: 5 - (product?.rating?.rate || 0),
  }).fill(false);

  const singleProduct = async () => {
    try {
      const response = await axios.get(
        `${BASEURL}/api/products/singleproduct/${id}`
      );
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    singleProduct();
  }, []);


  // payment handler ////
  const handlePayment= async()=>{
    console.log(product,"cartitem in handle payment")
    const stripe = await loadStripe('pk_test_51NM8vwHPi9TizSXWXqvOwQR0Vb3z2awqyMWqgGxwhAdQO1aOn65aEdWlVhZzMo5jpYHN8igUWg00iU3eCOfXqnZ200JqJDb6AM');
    const  body ={
      products: product
    }
    const header ={
      "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:5000/api/create-checkout-session",{
      method:"POST",
      headers:header,
      body:JSON.stringify(body)
    })

    const session= await response.json()
    console.log(session)
    const result = stripe.redirectToCheckout({
      sessionId: session.sessionId
    })
    if(result.error){
      console.log(result.error)
    }
  
  }
 

  
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={`${BASEURL}/${product?.image}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className=" text-3xl title-font font-bold text-gray-500 tracking-widest">
                {product?.title}
              </h2>

              {/* <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {product?.rating?.rate} Reviews
                  </span>
                </span>
              </div> */}
              <div className="flex mb-4">
                <span className="flex items-center">
                  {filledStars.map((filled, index) => (
                    <Star key={`filled-${index}`} filled={filled} />
                  ))}
                  {emptyStars.map((filled, index) => (
                    <Star key={`empty-${index}`} filled={filled} />
                  ))}
                  <span className="text-gray-600 ml-3">
                    {product?.rating?.rate} Reviews
                  </span>
                </span>
              </div>

              <p className="leading-relaxed">{product?.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 gap-10">
                <div>
                  <span className=" text-lg font-bold"> Category:</span>

                  {product?.category.map((category, index) => (
                    <span key={index} className="ms-2 font-light">
                      {category.name}
                      {index !== product.category.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                {/* <div>
                  {product?.rating.count > 0 ? "In Stock" : "Out of Stock"}
                </div> */}
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {product?.price}
                </span>
                <button onClick={handlePayment} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Checkout
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
