import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 ">
      <div className="bg-white col-span-3 rounded-2xl px-5 text-left">
        <br />
        <h1 className=" text-4xl text-orange-400 font-bold">
          Blog Section
        </h1>
        <br />
        <h1 className="text-2xl  font-bold text-orange-500">1. How Does React Work?</h1>

        <p className="my-3 text-xl m-3  w-10/12 text-orange-800">
          React is a JavaScript library. React allow developers to easily create
          fast user interfaces for websites and applications alike. The main
          concept of React.js is virtual DOM. React goes through it's
          virtual DOM ,creates a list of those changes that need to be made to
          the actual DOM and then does it all in one single process.
        </p>

        <br />
        <h1 className="text-2xl text-orange-500 font-bold">
          2. What is the difference between State and Props in React?
        </h1>

        <p className="my-3 text-xl m-3 text-orange-800 ">
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The "this.setState" property is used to
          update the state values in the component.
        </p>

        <br />
        <h1 className="text-2xl font-bold text-orange-500">
          3. What does useEffect do other than data loading?
        </h1>

        <p className="my-3 text-xl m-3 text-orange-800  ">
          The useEffect Hook allows you to perform side effects in your
          components useEffect() hook runs the side-effect after initial
          rendering, and on later renderings only if the name value changes.You
          can have multiple useEffects in your code and this is completely fine!
           Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object
        </p>
      </div>
    </div>
  );
};

export default Blogs;
