import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import img from "../../imgs/highlight-1.jpg";

function Highlights() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((res) => {
        setArticles(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="xs:mt-4 sm:px-3  flex bg-[#ebebec] flex-col  ">
      <h2 className="xs:py-7 sm:py-5 text-center font-bold  text-[#1e1e1f] text-4xl py-14">
        Articles
      </h2>
      <div className="flex xs:px-0 gap-y-8 mb-4 sm:gap-y-6   justify-center items-center ">
        {articles.map((article) => (
          <div
            className="sm:m-0 bg-white m-2  flex  hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer w-[80%]"
            key={article._id}
          >
            <div className="w-[30%]">
              <img src={img} className="" alt="" />
            </div>
            <div className=" flex flex-col  px-3 py-2 sm:px-1 sm:py-1 justify-between items-start w-[50%]">
              <h2 className=" text-lg font-semibold tracking-tighter sm:tracking-tight sm:text-sm  sm:pt-0 xl:text-2xl xl:tracking-normal  ">
                {article.title}
              </h2>
              <p className="text-sm sm:font-normal sm:text-xs sm:pt-0  text-[#3b3b3d]  md:font-thin  xl:text-lg xl:tracking-tight  line-clamp-2">
                {article.discription}
                <span className="pl-1">
                  <a href="highlight">...</a>
                </span>
              </p>
              <p className="sm:font-thin sm:text-xs font-extralight text-sm self-end  md:text-xs  md:font-thin xl:text-md">
                {article.publishDate}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="sm:m-0 bg-white m-2  sm:flex  hover:-translate-y-1 transation  duration-150  shadow-md hover:shadow-lg hover:cursor-pointer">
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
              <span>
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
              <span>
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
  );
}

export default Highlights;
