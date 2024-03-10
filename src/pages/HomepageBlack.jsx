import React from "react";
import bgImg from "../assets/bg-image.svg";
import font1 from "../assets/font-1.svg";
import element1 from "../assets/element-1.svg";
import element2 from "../assets/element-2.svg";
import boxElement1 from "../assets/box-element1.svg";
import boxElement2 from "../assets/box-element2.svg";
import boxElement3 from "../assets/box-element3.svg";
import boxElement4 from "../assets/box-element4.svg";
import boxElement5 from "../assets/box-element5.svg";
import arrowRounded from "../assets/arrowRounded.svg";
import iconWallet from "../assets/icon-wallet.svg";

const HomepageBlack = () => {
  return (
    <>
      <main>
        <section className="relative w-full min-h-screen overflow-hidden">
          <img
            src={bgImg}
            alt=""
            className="absolute -z-10 w-full h-screen top-36 md:top-0 object-fill"
            draggable="false"
          />

          <div className="container mx-auto mt-7">
            <div className="flex justify-between items-start">
              <nav className="flex gap-x-8 px-8 md:px-0">
                <img src={font1} alt="" className="h-fit hidden md:block" />
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

              <div className="flex items-center gap-16">
                <img src={element1} alt="" className="w-32" />
                <img src={element2} alt="" className="w-32" />
              </div>
            </div>

            <div className="absolute bottom-8 w-[70%]">
              <div className="flex gap-4 lg:pl-32">
                <div className="relative">
                  <img src={boxElement1} alt="" />
                  <div className="absolute top-0 flex flex-col gap-16 px-7 py-9">
                    <h1 className="text-cl-gray font-bold text-lg">To do</h1>
                    <div className="flex gap-1">
                      <p className="font-bold text-4xl text-cl-white">158</p>
                      <span className="text-cl-gray text-sm">tasks</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img src={boxElement2} alt="" />
                  <div className="absolute top-0 flex flex-col gap-16 px-7 py-9">
                    <h1 className="text-cl-gray font-bold text-lg">On going</h1>
                    <div className="flex gap-1">
                      <p className="font-bold text-4xl text-cl-navy">537</p>
                      <span className="text-cl-gray text-sm">tasks</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white/5 rounded-[2.5rem] backdrop-blur-md">
                    <img src={boxElement3} alt="" />
                  </div>
                  <img
                    src={boxElement4}
                    alt=""
                    className="absolute bottom-3 left-3 w-44"
                  />
                  <img
                    src={boxElement5}
                    alt=""
                    className="absolute bottom-3 right-3 w-[11.5rem]"
                  />
                  <img
                    src={arrowRounded}
                    alt=""
                    className="absolute bottom-8 left-28"
                  />
                  <img
                    src={arrowRounded}
                    alt=""
                    className="absolute -bottom-1 right-1"
                  />
                  <div className="absolute top-0 flex flex-col gap-16 px-9 py-9">
                    <h1 className="text-cl-white font-bold text-lg">
                      Complete
                    </h1>
                    <div className="flex gap-1">
                      <p className="font-bold text-4xl text-cl-navy">02</p>
                      <span className="text-cl-gray text-sm">tasks</span>
                    </div>
                  </div>
                  <div className="absolute top-0 left-52 flex flex-col px-9 py-11">
                    <div className="flex flex-col gap-5">
                      <div className="flex gap-x-2.5 items-end">
                        <img src={iconWallet} alt="" />
                        <h2 className="text-base text-cl-navy font-semibold">
                          Earnings
                        </h2>
                      </div>
                      <div className="flex gap-y-1.5 flex-col">
                        <h3 className="text-cl-navy font-bold text-lg">
                          $2,932.07
                        </h3>
                        <p className="text-cl-gray text-sm">02 tasks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomepageBlack;
