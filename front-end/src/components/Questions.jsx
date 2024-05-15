import "../App.jsx";
import { forwardRef, useState, useEffect } from "react";
import TimePicker from "./TimePicker.jsx";

const Questions = forwardRef((props, ref) => {

  const prev = () => {
    const url = window.location.href;
    const newLastInt = (parseInt(url.slice(-1)) - 1).toString();
    if (newLastInt === '0') {
      return
    }
    const newUrl = url.substring(0, url.length - 1) + newLastInt
    window.location.href = newUrl;
  }

  const next = () => {
    const url = window.location.href;
    const newLastInt = (parseInt(url.slice(-1)) + 1).toString();
    if (newLastInt === '5') {
      return
    }
    const newUrl = url.substring(0, url.length - 1) + newLastInt
    window.location.href = newUrl;
  }


  return (
    <>
      <div className="flex justify-center my-8" ref={ref}>
        <progress
          className="progress progress-success w-56"
          value="20"
          max="100"
        ></progress>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center">
            <button className="btn btn-success btn-circle mr-10" onClick={prev}>
              ❮
            </button>
          </div>
          <div className="carousel w-2/4 min-h-fit max-h-full bg-lightbeige rounded-xl">
            <div
              id="slide1"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="text-brown font-bold text-2xl text-center mt-10 mb-24">
                What Time Did You Wake Up Today?
              </div>

              <div className="flex justify-center">
                <TimePicker className="" />
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full flex flex-col justify-center"
            >
              <div className="flex justify-around text-lightblue font-extrabold text-4xl my-32 pb-28">
                <div className="text-center w-full">
                  <h2>Gender</h2>
                  <h2>Male</h2>
                </div>
                <div className="text-center w-full">
                  <h2>Weight</h2>
                  <h2>100</h2>
                </div>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="text-brown font-bold text-2xl flex justify-center my-10">
                External Factors
              </div>
              <div className="text-center w-full">
                <h2>Minutes of Physical Activity per Day</h2>
                <h2>xx</h2>
              </div>
              <div className="text-center w-full">
                <h2>Climate in Your Area</h2>
                <h2 className="">*Dropdown</h2>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="text-brown font-bold text-2xl flex justify-center my-10">
                <h2>Your Water Intake So Far</h2>
              </div>
              <div className="text-center w-full">
                <h2>
                  Use familar bottles and cups to guess how much water you have
                  drank today
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <button className="btn btn-success btn-circle ml-10" onClick={next}>
              ❯
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

Questions.displayName = "Questions";

export default Questions;
