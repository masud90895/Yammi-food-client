import React, { useContext, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const Login = () => {
  const { login, googleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        fetch("https://assinment11.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set localStorage
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err)
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        fetch("https://assinment11.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // set localStorage
            localStorage.setItem("token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.error(err)
        toast.error(err.message);
      });
  };

  useEffect(() => {
    document.title = "Login - Yummi-Homemade";
  }, []);
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto  bg-gray-900  text-gray-100">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="name" className="block  text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md border border-gray-200  bg-gray-900  text-gray-100 focus:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block  text-gray-400">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md  border border-gray-200 bg-gray-900  text-gray-100 focus:border-violet-400"
            required
          />
          <div className="flex justify-end text-xs  text-gray-400">
            <a rel="noopener noreferrer" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="block w-full p-3 text-center rounded-sm  text-gray-900  bg-violet-400">
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16  bg-gray-700"></div>
        <p className="px-3 text-sm  text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16  bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6  text-gray-400">
        Don't have an account?
        <Link to="../register" className="underline  text-gray-100">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
