import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Header = () => {
  const { user, singOutUser } = useContext(AuthContext);

  const logOutUser = () => {
    singOutUser()
      .then()
      .catch((err) => console.log(err));
  };
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4">
        <div className="flex w-0 flex-1 lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-600"
            type="button"
          >
            <span className="sr-only">Account</span>
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <a href="#">
            <span className="sr-only">Logo</span>
            <span className="h-10 w-20 rounded-lg bg-gray-200"></span>
          </a>

          <form className="mb-0 hidden lg:flex">
            <div className="relative">
              <img
                className="w-16"
                src="https://i.ibb.co/VJ05L3B/logo1.png"
                alt=""
              />
            </div>
          </form>
        </div>

        <div className="flex w-0 flex-1 justify-end lg:hidden">
          <button
            className="rounded-full bg-gray-100 p-2 text-gray-500"
            type="button"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav
          aria-label="Site Nav"
          className="hidden items-center justify-center gap-8 text-sm font-medium lg:flex lg:w-0 lg:flex-1"
        >
          <Link
            className="text-gray-900 hover:border-b-2 hover:border-yellow-500"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-900 hover:border-b-2 hover:border-yellow-500"
            to="foodservice"
          >
            Foods
          </Link>
          <Link
            className="text-gray-900 hover:border-b-2 hover:border-yellow-500"
            to="blog"
          >
            Blog
          </Link>
          {(user?.email || user?.uid) && (
            <>
              <Link
                className="text-gray-900 hover:border-b-2 hover:border-yellow-500"
                to="myReviews"
              >
                My reviews
              </Link>
              <Link
                className="text-gray-900  hover:border-b-2 hover:border-yellow-500"
                to="addService"
              >
                Add service
              </Link>
            </>
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {user?.email && user?.uid ? (
            <button
              onClick={logOutUser}
              className="inline-block rounded-full bg-yellow-500   p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            >
              <span className="block rounded-full bg-white px-4 py-2 font-bold hover:bg-transparent">
                Log Out
              </span>
            </button>
          ) : (
            <Link
              to="../login"
              className="inline-block rounded-full bg-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            >
              <span className="block rounded-full bg-white px-4 py-2 font-bold hover:bg-transparent">
                Log in
              </span>
            </Link>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium">
          <Link className="flex-shrink-0 pl-4 text-gray-900" to="/">
            Home
          </Link>
          <Link className="flex-shrink-0 pl-4 text-gray-900" to="foodservice">
            Food
          </Link>
          <Link className="flex-shrink-0 pl-4 text-gray-900" to="blog">
            Blog
          </Link>
          {(user?.email || user?.uid) && (
            <>
              <Link className="flex-shrink-0 pl-4 text-gray-900" to="myReviews">
                My reviews
              </Link>
              <Link
                className="flex-shrink-0 pl-4 text-gray-900"
                to="addService"
              >
                Add service
              </Link>
              <button
                onClick={logOutUser}
                className="inline-block rounded bg-yellow-500   p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              >
                <span className="block rounded bg-white px-2 py-2 hover:bg-transparent">
                  Log Out
                </span>
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
