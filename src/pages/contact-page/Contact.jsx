import p1 from '../../assets/playing2.jpg'
import Footer from '../Footer'


const Contact = () => {
  return (
<div className="grid grid-cols-1">

{/* Col 2 Bio & Social*/}
<div className='bg-gradient-to-r from-fuchsia-700 to-indigo-500 hover:from-indigo-500 hover:to-fuchsia-500 '>
    <div className="container px-6 mx-auto my-8 md:my-24">
      <section className="mb-20 text-center md:mb-32">
        <div className="max-w-[700px] mx-auto px-3 lg:px-6">
         {/* <h2 className="mb-12 text-3xl font-bold overline">Bio</h2>  */}
        </div>
        
        {/* Bio */}
        <div className="self-center">
          <div className="grid justify-center">
            <img className="rounded-md " src={p1} alt="" />
          </div>
        
        <p className="p-4 mt-4 font-[Abel] leading-10 tracking-wider text-white border-t-2 border-l-2 border-yellow-400 shadow-xl md:text-xl">“Growing up in New York City exposed me to a melting pot of culture and music. I saw a need in the DJ industry for someone able to connect a crowd and play enjoyable music for all ages and ethnicities. 
        
        After a decade of DJing for many different types of events and walks of life, I’m still just as passionate about my craft and looking forward to making more memorable moments with you.”  </p>
         
        <h3 className='font-[Abel] leading-8 tracking-wider text-yellow-300 text-md mt-4'>
        Questions regarding our rates or scheduling email us at
        djluchainz@gmail.com or use the form below and our team will get back to you within 24 hours.
        </h3>
      </div>
      </section>
    
    </div>
</div>
{/* 2nd col end */}

{/* Col 1 contact form */}
<div className="container px-8 mx-auto my-4 rounded-xl ">
<section className="mb-32 text-center text-gray-800">
  <div className="max-w-[700px] mx-auto px-3 lg:px-6 py-6">
    <h2 className="mb-12 text-3xl font-bold overline">Contact us</h2>
    <form>
      <div className="mb-6 form-group ">
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
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none" id="exampleInput7"
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
          focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none
        " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
      </div>
      <div className="mb-6 text-center form-group form-check">
        <input type="checkbox"
          className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-violet-600 checked:border-violet-600 focus:outline-none"
          id="exampleCheck87" checked />
        <label className="inline-block text-gray-800 form-check-label" for="exampleCheck87">Send me a copy of this
          message</label>
      </div>
      <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-violet-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-violet-700 hover:shadow-lg
        focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Send</button>
    </form>
  </div>
</section>
</div>

{/* Footer */}
<Footer />







</div>
  );
}

export default Contact;
