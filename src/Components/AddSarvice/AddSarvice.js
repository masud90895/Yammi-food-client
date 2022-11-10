import React, { useEffect } from "react";
import toast from "react-hot-toast";

const AddSarvice = () => {
  useEffect(() => {
    document.title = "AddService - Yummi-Homemade";
  }, []);

  const handleAddService = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const ratings = parseInt(e.target.ratings.value);
    const price = parseInt(e.target.price.value);
    const detailers = e.target.detailers.value;
    if (ratings > 5) {
      return toast.error("You Can't added more than 5 ratings");
    }
    const services = {
      name,
      image,
      ratings,
      price,
      detailers,
    };
    console.log(services);
    fetch("https://assinment11.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Food Service added")
        e.target.reset()
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddService}
        className="w-full lg:px-[30%] bg-white p-10"
      >
        <div className="md:flex items-center border-b pb-6 border-gray-200">
          <div className="flex items-center md:mt-0 mt-4">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-base font-medium leading-none text-gray-800">
                01
              </p>
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Login
            </p>
          </div>
          <div className="flex items-center md:mt-0 mt-4 md:ml-12">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-base font-medium leading-none text-gray-800">
                02
              </p>
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Security Check
            </p>
          </div>
          <div className="flex items-center md:mt-0 mt-4 md:ml-12">
            <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-base font-medium leading-none text-gray-800">
                03
              </p>
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Confirm User
            </p>
          </div>
          <div className="flex items-center md:mt-0 mt-4 md:ml-12">
            <div className="w-8 h-8 bg-indigo-700 rounded flex items-center justify-center">
              <p className="text-base font-medium  leading-none text-white">
                04
              </p>
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Add Service
            </p>
          </div>
        </div>
        <h1 className="focus:outline-none font-serif text-3xl font-bold text-gray-800 mt-12">
          Add Services Food
        </h1>
        <p className=" focus:outline-nonetext-sm font-light leading-tight text-black mt-4">
          Add Most Wanted Foods and i will delivered to Your Home
        </p>
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Food Name
            </label>
            <input
              name="name"
              type="name"
              aria-label=""
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              placeholder="inter your Food name"
              required
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Food Photo
            </label>
            <input
              type="name"
              name="image"
              aria-label="Enter last name"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              placeholder="Food URL"
              required
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Ratings
            </label>
            <input
              type="number"
              name="ratings"
              aria-label=""
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 "
              placeholder="Food Ratings"
              required
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800">
              Food Price
            </label>
            <input
              type="number"
              name="price"
              className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              placeholder="Food Price"
            />
          </div>
        </div>
        <div className="mt-12">
          <label className="mb-3 block text-sm leading-none text-gray-800">
            Food Detail's
          </label>
          <textarea
            className="block bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
            name="detailers"
            id=""
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          aria-label="Next step"
          className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        >
          <span className="text-sm font-medium text-center text-gray-800 capitalize">
            Add Services
          </span>
          <svg
            className="mt-1 ml-3"
            width={12}
            height={8}
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddSarvice;
