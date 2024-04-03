import img from "../../imgs/home-2.png";

function About() {
  return (
    <div className="flex flex-col justify-center  items-center bg-[#ebebec] py-1  sm:py-7   3xl:pt-0 w-full 3xl:pb-0 2xl:px-32 ">
      <h2 className="text-center text-2xl py-1 2xl:py-1 font-bold  text-[#1e1e1f] sm:text-3xl  3xl:py-7 3xl:text-4xl lg:text-4xl lg:py-1 md:py-2 sm:pb-6  ">
        About Ragab
      </h2>
      <div className="flex flex-col items-center gap-4  py-6 px-4 xl:flex-none xl:flex-row 4xl:w-[80%] 2xl:space-x-8 ">
        <div className="flex ">
          <img src={img} alt="" className="w-[100%] " />
        </div>
        <div className="flex ju text-md xs:font-light sm:font-normal sm:text-lg xl:flex-1 xl:text-2xl xl:font-medium xl:tracking-wide xl:leading-8 2xl:font-normal  2xl:tracking-light 2xl:leading-8">
          <p className="">
            Ahmed Ragab is a television producer and investigative journalist
            with a sixteen-year track record of producing high-quality print,
            television, and online reports. <br />
            He led the investigations unit at Al Masry Al Youm, the largest
            independent daily newspaper in Egypt, and produced the
            &apos;Sulta5&apos; program on Deutsche Welle Arabic. <br /> Ragab
            received the ARIJ Arab Spring Award for Best Investigation in the
            Arab World in 2011 and has extensively covered human rights issues
            in his reporting. <br /> This includes topics such as the
            prisoners&apos; escape during the 2011 Egyptian Revolution, the
            Anti-Terrorism Law and its impact on Egyptians&apos; civil and
            political rights, and the murder of Italian researcher Giulio Regeni
            in 2016, allegedly by Egyptian security officers. <br /> In recent
            years, he has written and produced critically acclaimed podcasts,
            including the investigative podcast series &apos;Ahraz&apos; He also
            won the 2023 Mohammed Hassanein Heikal Foundation for Arab
            Journalism Award for the same podcast.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
