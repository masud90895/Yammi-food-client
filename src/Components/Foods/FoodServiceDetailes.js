import React from 'react';

const FoodServiceDetailes = ({foodData,reviewData}) => {
    const { _id, name, image, ratings, price, detailers } = foodData.data;
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / FoodService / {name}</p>
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4 font-serif">{name}</h2>

                    <div className=" flex flex-row justify-between  mt-5">
                        <div className=" flex flex-row space-x-3 text-xl">
                           Ratings:{ratings}/<small>star</small>
                        </div>
                        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">{reviewData?.length} reviews</p>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{detailers}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${price}.00</p>
                </div>

                {/* <!-- Preview Images Div For larger Screen--> */}

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12  flex justify-center items-center">
                        <img className='lg:h-[500px] md:w-[400px] w-[300px] rounded-2xl' src={image} alt="" />
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default FoodServiceDetailes;