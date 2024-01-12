import Footer from "@/components/Footer";
import Header from "@/components/System/Header";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Header />
      {/* <div className="absolute z-0 bottom-0 bg-blue-50 w-full h-1/2"></div> */}
      <div className="flex justify-center items-center flex-col text-center z-10 py-20">
        <h1 className="text-6xl font-black leading-tight">
          invito는 <br />
          언제나 <span className="text-blue-600 font-black">무료</span>입니다.
        </h1>
        <p className="text-lg mt-6">
          자유롭게 초대장을 만들고, 공유하고, 다운로드하고, 인쇄하세요.
        </p>

        <div className="flex mt-28">
          <img src="/img/plan.png" alt="" className="h-80 blur-sm rounded-3xl" />
          <img src="/img/free.png" alt="" className="w-96 scale-125 -translate-y-8" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
