import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white py-16 w-full px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks optimize your flow?
          </h1>
          <p>Sign up to out newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="w-full flex rounded-md text-black p-3"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium border-none ml-4 my-6 py-3 text-black">
              Notify me
            </button>
          </div>
        </div>
        <p>
          We care about the protection of your data. Read our{" "}
          <a className="text-[#00df9a]" href="/">
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
