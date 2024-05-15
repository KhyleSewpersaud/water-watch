import "../App.jsx";
import { forwardRef, useState, useEffect } from "react";
import TimePicker from "./TimePicker.jsx";

const Questions = forwardRef((props, ref) => {
  const prev = () => {
    const url = window.location.href;
    const newLastInt = (parseInt(url.slice(-1)) - 1).toString();
    if (newLastInt === "0") {
      return;
    }
    const newUrl = url.substring(0, url.length - 1) + newLastInt;
    window.location.href = newUrl;
  };

  const next = () => {
    const url = window.location.href;
    const newLastInt = (parseInt(url.slice(-1)) + 1).toString();
    if (newLastInt === "5") {
      return;
    }
    const newUrl = url.substring(0, url.length - 1) + newLastInt;
    window.location.href = newUrl;
  };

  const [weight, setWeight] = useState(0);

  const [minutes, setMinutes] = useState(0);

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

              <div className="flex justify-center mr-10">
                <TimePicker className="" />
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full flex flex-col justify-center"
            >
              <div className="flex justify-around font-semibold p-32">
                <div className="text-center w-full">
                  <h2 className="text-brown text-7xl">Gender</h2>
                  <div className="flex justify-center m-8">
                    <select className="w-1/2 bg-lightblue rounded-md text-3xl">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="text-center w-full">
                  <h2 className="text-brown text-7xl">Weight</h2>
                  <div className="flex justify-center">
                    <input
                      className="m-8 w-1/2 bg-lightblue rounded-md text-4xl"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full flex flex-col"
            >
              <div className="flex justify-center h-full items-center ">
                <div className="flex flex-col justify-center text-center w-full h-full">
                  <div className="flex flex-col justify-around h-1/2 w-full">
                                    <h2 className="text-brown text-5xl font-semibold mb-10 mt-2">
                    Outside Climate
                  </h2>
                  <div className="flex justify-center m-8">
                    <select className="w-1/2 bg-lightblue rounded-md text-3xl">
                      <option value="cold">Cold</option>
                      <option value="neutral">Neutral</option>
                      <option value="warm">Warm</option>
                      <option value="hot">Hot</option>
                    </select>
                  </div>
                  </div>
  
                </div>
                <div className="text-center w-full">
                  <h2 className="text-brown text-5xl font-semibold">
                    Minutes of Exercise Today
                  </h2>
                  <div className="flex justify-center">
                    <input
                      className="m-8 w-1/2 bg-lightblue rounded-md text-4xl"
                      value={minutes}
                      onChange={(e) => setMinutes(e.target.value)}
                    ></input>
                  </div>
                </div>
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
