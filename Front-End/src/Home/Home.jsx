import { useEffect, useState } from "react";
import img from "../../imgs/highlight-1.jpg";
import axios from "axios";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://eu-central-1.aws.data.mongodb-api.com/app/data-ikfei/endpoint/data/v1/articles`
      )
      .then((res) => {
        setArticles(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex mt-4 space-y-16 flex-col h-full   justify-center  items-center xl:mt-10 ">
      <header className="flex flex-col justify-center items-center space-y-6 w-full px-3 sm:w-[90%] sm:px-1     xl:w-[80%] xl:pl-5 xl:space-y-8 4xl:space-y-12">
        <h1 className="text-center  font-bold text-[#1e1e1f]  text-2xl md:text-3xl md:text-center md:w-[70%] lg:w-[50%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[40%] 2xl:text-center xl:text-6xl   xl:leading-tight  xl:text-left 2xl:text-5xl 2xl:leading-tight ">
          Investigative Reporter, Journalist and TV Producer.
        </h1>

        <p className="text-lg font-thin text-[#353537]  md:font-normal md:text-xl xl:text-2xl 2xl:w-[80%] ">
          Ahmed Ragab is a television producer and investigative journalist with
          a sixteen-year track record of producing high-quality print,
          television, and online reports
          <a href="about" className="underline pl-1 ">
            more
          </a>
        </p>
      </header>

      <div className="featured-cards bg-[#ebebec]  text-[#3b3b3d]    flex flex-col justify-center items-center 4xl:w-full">
        <h2 className="text-center text-2xl py-6 font-bold  text-[#1e1e1f] md:text-3xl  xl:py-14 4xl:text-5xl">
          Featured Articles
        </h2>
        <div className="flex flex-col space-y-6 pb-6 sm:px-2  justify-center items-center   md:w-[90%] 2xl:w-[70%] xl:pb-12 xl:space-y-10 4xl:w-[70%]">
          {articles.map((article) => (
            <div
              className="sm:m-0 bg-white m-2  flex xs:flex-col sm:flex-row   hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer"
              key={article._id}
            >
              <div className="xs:w-full sm:w-[35%] md:w-[40%] 4xl:w-[30%] flex flex-none ">
                <img src={img} className="" alt="" />
              </div>
              <div className=" flex flex-col  px-2 py-1  flex-1 justify-between lg:justify-around">
                <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm md:tracking-tighter sm:pt-0  lg:text-2xl xl:tracking-normal  ">
                  {article.title}
                </h2>
                <p className="text-sm font-normal pt-0 text-[#3b3b3d] line-clamp-4 sm:line-clamp-3   md:line-clamp-4 lg:line-clamp-[6] lg:font-normal lg:texl-2xl md:pt-1 md:font-thin  xl:text-lg xl:tracking-tight  ">
                  {article.discription}
                  <span className="pl-1">
                    <a href="highlight">...</a>
                  </span>
                </p>
                <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end pt-1.5 md:text-xs  md:font-thin xl:text-md">
                  {article.publishDate}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="sm:m-0 bg-white m-2  flex xs:flex-col hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer ">
            <div
              className="sm:w-[70%] 4xl:w-[100%]
             sm:flex"
            >
              <img src={img} className="" alt="" />
            </div>
            <div className=" flex flex-col  px-3 py-2 sm:px-1 sm:py-1 justify-between">
              <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm  sm:pt-0 xl:text-2xl xl:tracking-normal  ">
                Giulio Regeni: Scattered Facts
              </h2>
              <p className="text-sm sm:font-normal sm:text-xs sm:pt-0  text-[#3b3b3d]  md:font-thin  xl:text-lg xl:tracking-tight  ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, perferendis!
                <span className="pl-1">
                  <a href="highlight">...</a>
                </span>
              </p>
              <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end  md:text-xs  md:font-thin xl:text-md">
                11/04/2000
              </p>
            </div>
          </div>

          <div className="sm:m-0 bg-white m-2  sm:flex  hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer">
            <div className="sm:w-[110%] sm:flex">
              <img src={img} className="" alt="" />
            </div>
            <div className=" flex flex-col  px-3 py-2 sm:px-1 sm:py-1">
              <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm  sm:pt-0 xl:text-2xl xl:tracking-normal  xl:py-3">
                Giulio Regeni: Scattered Facts
              </h2>
              <p className="text-sm sm:font-normal sm:text-xs sm:pt-0  pt-2 text-[#3b3b3d] md:pt-1 md:font-thin  xl:text-lg xl:tracking-tight  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto dolore, numquam soluta minus adipisci accusamus!
                <span className="pl-1">
                  <a href="highlight">...</a>
                </span>
              </p>
              <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end pt-1.5 md:text-xs  md:font-thin xl:text-md">
                11/04/2000
              </p>
            </div>
          </div>
          <div className="sm:m-0 bg-white m-2  sm:flex  hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer">
            <div className="sm:w-[110%] sm:flex">
              <img src={img} className="" alt="" />
            </div>
            <div className=" flex flex-col  px-3 py-2 sm:px-1 sm:py-1">
              <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm  sm:pt-0 xl:text-2xl xl:tracking-normal  xl:py-3">
                Giulio Regeni: Scattered Facts
              </h2>
              <p className="text-sm sm:font-normal sm:text-xs sm:pt-0  pt-2 text-[#3b3b3d] md:pt-1 md:font-thin  xl:text-lg xl:tracking-tight  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto dolore, numquam soluta minus adipisci accusamus!
                <span className="pl-1">
                  <a href="highlight">...</a>
                </span>
              </p>
              <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end pt-1.5 md:text-xs  md:font-thin xl:text-md">
                11/04/2000
              </p>
            </div>
          </div>
          <div className="sm:m-0 bg-white m-2  sm:flex  hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer">
            <div className="sm:w-[110%] sm:flex">
              <img src={img} className="" alt="" />
            </div>
            <div className=" flex flex-col  px-3 py-2 sm:px-1 sm:py-1">
              <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm  sm:pt-0 xl:text-2xl xl:tracking-normal  xl:py-3">
                Giulio Regeni: Scattered Facts
              </h2>
              <p className="text-sm sm:font-normal sm:text-xs sm:pt-0  pt-2 text-[#3b3b3d] md:pt-1 md:font-thin  xl:text-lg xl:tracking-tight  ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto dolore, numquam soluta minus adipisci accusamus!
                <span className="pl-1">
                  <a href="highlight">...</a>
                </span>
              </p>
              <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end pt-1.5 md:text-xs  md:font-thin xl:text-md">
                11/04/2000
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
