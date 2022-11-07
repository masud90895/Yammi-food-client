import React from "react";

const FoodReview = ({reviewData}) => {
  return (
    <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-start items-start w-full space-y-8">
        <div className="flex justify-start items-start">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
            Reviews
          </p>
        </div>
        {
          reviewData?.map(data=>  <div key={data?._id} className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="flex flex-row justify-between items-start">
              <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                {data?.category}
              </p>

            </div>
          </div>
          <div>
            <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
            {data?.review}
            </p>
            <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
              <div>
                <img
                className="w-[60%] rounded-full"
                  src={data?.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <p className="text-base font-medium leading-none text-gray-800">
                  {data?.userName}
                </p>
              </div>
            </div>
          </div>
        </div>)
        }
      </div>
    </div>
  );
};

export default FoodReview;
