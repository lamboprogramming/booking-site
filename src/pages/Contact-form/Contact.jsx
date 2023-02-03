import React from 'react';

const Contact = () => {
  return (

<div className="container px-6 mx-auto my-24">


<section className="mb-32 text-center text-gray-800">
  <div className="max-w-[700px] mx-auto px-3 lg:px-6">
    <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
    <form>
      <div className="mb-6 form-group">
        <input type="text" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
          placeholder="Name" />
      </div>
      <div className="mb-6 form-group">
        <input type="email" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
          placeholder="Email address" />
      </div>
      <div className="mb-6 form-group">
        <textarea className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
      </div>
      <div className="mb-6 text-center form-group form-check">
        <input type="checkbox"
          className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
          id="exampleCheck87" checked />
        <label className="inline-block text-gray-800 form-check-label" for="exampleCheck87">Send me a copy of this
          message</label>
      </div>
      <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Send</button>
    </form>
  </div>
</section>


</div>
  );
}

export default Contact;
