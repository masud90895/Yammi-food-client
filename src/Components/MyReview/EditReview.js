import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const EditReview = () => {
  const reviewsData = useLoaderData();
  const { _id, email, review, category, image, userName } = reviewsData?.data;
  const navigate = useNavigate();

  const handleReview = (e) => {
    e.preventDefault();
    const data = e.target.reviewData.value;
    const reviewsData = {
      category,
      email,
      image,
      review: data,
      userName,
    };
    fetch(`http://localhost:5000/editReview/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewsData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          toast.success("update completed");
          navigate("../myReviews");
        }
      });
  };

  useEffect(() => {
    document.title = "EditReview";
  }, []);
  return (
    <>
      <div className="py-8">
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
        >
          <div className="relative w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
            <div className="flex flex-col items-center px-4 md:px-12">
              <img src="https://i.ibb.co/QDMrqK5/Saly-10.png" />
              <p className="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">
                Edit Review
              </p>
              <p className="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-center text-gray-600 dark:text-gray-300">
                {email}
              </p>
              <form onSubmit={handleReview} className=" mt-4 sm:mt-6 w-full">
                <div className="bg-gray-50 border rounded border-gray-200 dark:border-gray-700 dark:bg-gray-700 w-full">
                  <textarea
                    name="reviewData"
                    id=""
                    cols="20"
                    rows="10"
                    defaultValue={review}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-3 mt-5 flex items-end py-3 bg-indigo-700 dark:bg-indigo-600 focus:outline-none hover:bg-opacity-80 ml-2 text-white rounded"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditReview;
