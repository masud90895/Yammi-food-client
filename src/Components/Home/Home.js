import React from "react";
import FoodCard from "./FoodCard";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <div className="bg-yellow-50 ">
        <img
          className="md:w-[75%] p-6 mx-auto lg:mt-20 md:mt-16 mt-10"
          src="https://i.ibb.co/VvL0QPY/Yummi.png"
          alt=""
        />
        <h1 className="lg:text-4xl text-2xl font-bold font-serif p-4 text-center">Home Cooked Food Is Healthier Than Fast Food Or Takeout</h1>
      </div>
      {/* food section  */}
      <div>
        <FoodCard/>
      </div>
    </div>
  );
};

export default Home;
