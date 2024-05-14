import "../App.jsx";
import { forwardRef } from "react";

const Questions = forwardRef((props, ref) => {
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
        <div className="carousel w-2/4 min-h-fit max-h-full bg-lightbeige rounded-xl">
          <div
            id="slide1"
            className="carousel-item relative w-full flex flex-col"
          >
            <div className="text-brown font-bold text-2xl flex justify-center my-10">
              What Time Did You Wake Up Today?
            </div>
            <div className="text-lightblue font-extrabold text-4xl flex justify-center my-32 pb-28">
              00;00;00
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <div></div>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-full flex flex-col items-center justify-center"
          >
            <div className="flex justify-around">
              <div className="text-center w-full">
                <h2>Gender</h2>
                <h2>Male</h2>
              </div>
              <div className="text-center w-full">
                <h2>Weight</h2>
                <h2>100</h2>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
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
              <h2>Use familar bottles and cups to guess how much water you have drank today</h2>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

Questions.displayName = 'Questions';

export default Questions;
