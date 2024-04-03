function Contact() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center bg-[#ebebec] py-1  sm:py-7 md:py-10  3xl:pt-10 w-full 3xl:pb-16   ">
        <h2 className="text-center text-2xl py-1 2xl:py-1 font-bold  text-[#1e1e1f] sm:text-3xl  3xl:py-10 3xl:text-5xl lg:text-4xl lg:py-1 md:py-2 sm:pb-6 ">
          Keep in touch
        </h2>
        <form
          action=""
          className="w-full px-4 xs:pb-4 sm:pb-6 flex flex-col 3xl:space-y-9 xl:w-[50%] 2xl:w-[40%] 2xl:justify-around xs:space-y-4 sm:space-y-7  "
        >
          <label htmlFor="name" className="flex flex-col text-lg ">
            Name
            <input
              className="mt-2 bg-white w-full border border-[#212529] rounded-md py-2 pl-2 focus:outline-none xs:py-1"
              type="text"
              id="name"
              name="name"
              required
              autoComplete="false"
            />
          </label>
          <label htmlFor="email" className="flex flex-col space-y-3 text-lg">
            Email
            <input
              className="mt-2 bg-white w-full border border-[#212529] rounded-md py-2 pl-2 focus:outline-none  xs:py-1"
              type="text"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
          </label>
          <label htmlFor="details" className="flex flex-col space-y-3 text-lg">
            Details
            <textarea
              rows={7}
              cols={40}
              className="mt-2 bg-white w-full border border-[#212529] rounded-md py-2 pl-2 focus:outline-none xs:py-1"
              autoComplete="false"
              type="text"
              id="details"
              name="details"
              required
            ></textarea>
          </label>
          <button className="w-full p-2 font-semibold rounded-md bg-[#212529] text-white self-center hover:-translate-y-0.5 transation duration-150  hover:cursor-pointer  lg:w-[30%] sm:w-[50%]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
