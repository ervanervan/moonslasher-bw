import React from "react";
import bgImg from "../assets/bg-image.svg";
import font1 from "../assets/font-1.svg";

const HomepageBlack = () => {
  return (
    <>
      <main>
        <section className="relative w-full min-h-screen overflow-hidden">
          <img
            src={bgImg}
            alt=""
            className="absolute -z-10 w-full h-screen top-36 md:top-0"
            draggable="false"
          />

          <div className="container mx-auto mt-7">
            <nav className="flex gap-x-8">
              <img src={font1} alt="" className="h-fit" />
              <ul className="flex gap-x-2">
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>家</span>
                  </a>
                </li>
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>状</span>
                    <span>態</span>
                  </a>
                </li>
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>ギ</span>
                    <span>ャ</span>
                    <span>ラ</span>
                    <span>リ</span>
                    <span>ー</span>
                  </a>
                </li>
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>バ</span>
                    <span>イ</span>
                    <span>オ</span>
                    <span>グ</span>
                    <span>ラ</span>
                    <span>フ</span>
                    <span>ィ</span>
                    <span>ー</span>
                  </a>
                </li>
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>チ</span>
                    <span>ュ</span>
                    <span>ー</span>
                    <span>ト</span>
                    <span>リ</span>
                    <span>ア</span>
                    <span>ル</span>
                  </a>
                </li>
                <li className="bg-white h-fit text-cl-black hover:text-cl-red px-1.5 py-1 border-[1px] hover:border-cl-red transition-all duration-300">
                  <a href="/" className="text-base flex flex-col">
                    <span>評</span>
                    <span>価</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomepageBlack;
