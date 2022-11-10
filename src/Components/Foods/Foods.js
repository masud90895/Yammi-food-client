import React, { useEffect, useState } from "react";
import FoodServicesCard from "./FoodServicesCard";
import Loader from "../Loader/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

const Foods = () => {
  const [foods, setfoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AOS.init();
    AOS.refresh();
    document.title = "FoodService";
    fetch("https://assinment11.vercel.app/foods")
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          setfoods(result.data);
          setLoading(false);
        }
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full mx-auto my-[10%]">
          <Loader />
        </div>
      ) : (
        <div className=" 2xl:container 2xl:mx-auto ">
          <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
            <p className=" w-10/12 mx-auto md:w-full  lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 font-bold text-center text-gray-800 font-serif">
              Yummy's Services Foods
            </p>
          </div>
          <div className=" py-6 lg:px-20 md:px-6 px-4">
            <p className=" font-normal text-sm leading-3 text-gray-600 ">
              Home / books by Food / Food
            </p>
            <hr className=" w-full bg-gray-200 my-6" />

            <div className=" flex justify-between items-center">
              <div className=" flex space-x-3 justify-center items-center">
                <svg
                  className=" cursor-pointer"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 7.5H20.25"
                    stroke="#1F2937"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.75 12H20.25"
                    stroke="#1F2937"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3.75 16.5H20.25"
                    stroke="#1F2937"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                </svg>
                <p className=" font-normal text-base leading-4 text-gray-800">
                  Filter
                </p>
              </div>
              <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
                Showing {foods?.length} Food
              </p>
            </div>

            <div
              data-aos="zoom-in"
              className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10"
            >
              {/* food card section  */}
              {foods?.map((food) => (
                <FoodServicesCard key={food._id} food={food} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Foods;
