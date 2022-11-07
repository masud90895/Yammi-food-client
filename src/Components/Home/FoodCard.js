import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingelFoodCard from "./SingelFoodCard";

const FoodCard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setFoods(result.data);
        }
      });
  }, []);

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-2xl lg:leading-9 md:leading-7 font-serif   leading-9 text-center text-gray-800">
          Most Favoured Food
        </p>
      </div>
      <div className=" lg:px-20 md:px-6 px-4">
        <hr className=" w-full bg-gray-200 my-6" />
        <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {/* card section  */}
          {foods?.map((food) => (
            <SingelFoodCard key={food._id} food={food} />
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <Link to="foodservice">
            <button className=" bg-transparent font-medium text-base leading-4 border-2 border-yellow-500   my-12 text-black rounded-md hover:bg-yellow-500 hover:text-black px-24 py-4 lg:mr-36">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
