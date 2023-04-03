import React from "react";
import propsExample from "../../assets/porpsExample.png";
import stateExample from "../../assets/stateExample.png";
import useStateExample from "../../assets/useStateExample.png";
import purposeOfUseEffect from "../../assets/purposeOfUseEffect.png";
import reactExample from "../../assets/reactExample.png";

const FAQ = () => {
  return (
    <React.Fragment>
      <section className="max-w-[1270px] mt-16 mb-12 mx-auto flex flex-col gap-12">
        <h1 className="text-center text-[#6047EC] font-bold p-5 text-3xl bg-[#6047ec1a] rounded-md">
          Frequently Asked Questions
        </h1>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-8">
          <p className="text-xl font-bold">
            1. What is the difference between props and state?
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">Props:</span>"props" in React is short
              for "properties" and refers to the inputs a Component receives. It
              is a way for a Parent Component to pass data or functionality to
              its Child Components. Props are passed to a Component as a single
              object.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={propsExample} alt="" />
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">State:</span> In React, State is a
              plain JavaScript object used to store and manage data that a
              component needs to render and update its user interface. The State
              Object is local to the Component and can only be accessed and
              modified by the Component.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={stateExample} alt="" />
            </span>
          </div>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">2. How does useState work?</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">useState:</span> useState is a
              built-in hook in React that allows functional components to behave
              statefully. This is a way to manage the internal state of a
              Component without needing to use a class Component.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={useStateExample} alt="" />
            </span>
          </div>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">
            3. Purpose of useEffect other than fetching data
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">Purpose of useEffect:</span> The
              useEffect hook in React is a powerful tool for managing side
              effects in functional components. While fetching data is a common
              use case for useEffect, it can also be used for a variety of other
              purposes.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={purposeOfUseEffect} alt="" />
            </span>
          </div>
        </div>

        <div className="p-5 shadow-md rounded-md flex flex-col gap-6">
          <p className="text-xl font-bold">4. How Does React work?</p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">
              <span className="font-bold">React:</span> React uses a virtual DOM
              (Document Object Model) to efficiently update the UI in response
              to changes in the application state. When a change occurs, React
              updates the virtual DOM and calculates the difference between the
              old and new versions of the DOM. It then updates only the parts of
              the actual DOM that need to be changed, which can significantly
              improve performance.
            </p>
            <p className="font-bold">Example:</p>
            <span>
              <img className="rounded-md" src={reactExample} alt="" />
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FAQ;