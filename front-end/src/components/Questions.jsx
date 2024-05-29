import "../App.jsx";
import { forwardRef, useState, useEffect } from "react";
import TimePicker from "./TimePicker.jsx";
import Intake from "./Intake.jsx";
import Results from "./Results.jsx";

const Questions = forwardRef((props, ref) => {
  // ########## Slider Buttons ########## //
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const handleHashChange = () => {
      const url = window.location.href;
      const slideNum = parseInt(url.slice(-1));
      setSlideIndex(slideNum);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const prev = (e) => {
    e.preventDefault();
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
      scrollToSlide(slideIndex - 1);
    }
  };

  const next = (e) => {
    e.preventDefault();
    if (slideIndex < 4) { // Assuming there are 4 slides
      setSlideIndex(slideIndex + 1);
      scrollToSlide(slideIndex + 1);
    }
  };

  const scrollToSlide = (index) => {
    const carousel = document.querySelector('.carousel');
    const targetSlide = carousel.querySelector(`#slide${index}`);
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // ########## Slider Buttons ########## //

  // ########## Inputs on Slider ########## //
  const [weight, setWeight] = useState(0);
  const [exerciseMinutes, setExerciseMinutes] = useState(0);
  const [gender, setGender] = useState("male");
  const [climate, setClimate] = useState("neutral");
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [directInputUnit, setDirectInputUnit] = useState("ml")

  const handleDirectInputUnit = (e) => {
    setDirectInputUnit(e.target.value);
  }

  const handleWeightUnit = (e) => {
    setWeightUnit(e.target.value);
  };

  const handleWeightChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== "") {
      const maxWeight = Math.min(Number(value), 1500);
      setWeight(Number(maxWeight));
    } else {
      setWeight(0);
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleClimateChange = (e) => {
    setClimate(e.target.value);
  };

  const handleExerciseChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== '') {
      const maxMinutes = Math.min(Number(value), 1440);
      setExerciseMinutes(maxMinutes);
    } else {
      setExerciseMinutes(0);
    }
  };
  // ########## Inputs on Slider ########## //

  // ########## TimePicker ########## //
  const [hour, setHour] = useState("9");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("AM");

  const handleHourChange = (e) => {
    let value = e.target.value;
    
    value = value.slice(-2);
    
    // Ensure value is between 1 and 12
    value = Math.min(Math.max(parseInt(value), 1), 12).toString();
    
    setHour(value);
    
    if (isNaN(value)) {
      setHour("1"); // Set hour to 1 if the value is NaN
    }
  };

  const handleMinuteChange = (e) => {
    let value = e.target.value;
    // Slice the last 2 digits entered
    value = value.slice(-2);
    // Ensure value is between 0 and 59
    value = Math.min(Math.max(parseInt(value) || 0, 0), 59).toString();
    setMinute(value.padStart(2, '0'));
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };
  // ########## TimePicker ########## //

  // ########## Intake ########## //
  const [directInput, setDirectInput] = useState(0);
  const [bottles, setBottles] = useState(Array(18).fill(0));

  const handleBottleChange = (index, quantity) => {
    const newBottles = [...bottles];
    newBottles[index] = quantity;
    setBottles(newBottles);
  };
  // ########## Intake ########## //

  const carouselHeight = slideIndex === 4 ? 'auto' : '60vh';

  return (
    <>
      <div className="flex justify-center my-8" ref={ref}>
      </div>
      <div className="flex justify-center">
        <div className="divider divider-success w-4/5"></div>
      </div>
      
      <section className="mt-16 flex justify-center overflow-x-hidden">
        <main className="flex flex-row w-full justify-around items-center">
          <button href={`#slide${slideIndex - 1}`} className="btn btn-success btn-circle" onClick={prev}>
            ❮
          </button>
          <div className="carousel w-3/4 bg-lightbeige rounded-xl p-2 relative drop-shadow-2xl"
          style={{ height: carouselHeight }}
          >
            <div
              id="slide1"
              className={`carousel-item relative w-full flex flex-col justify-center ${slideIndex === 1 ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-col justify-center items-center">
                <div className="text-center text-brown font-bold text-5xl">
                  What Time Did You Wake Up Today?
                </div>

                <div className="flex justify-center">
                  <TimePicker
                    minute={minute}
                    minuteChange={handleMinuteChange}
                    hour={hour}
                    hourChange={handleHourChange}
                    period={period}
                    periodChange={handlePeriodChange}
                  />
                </div>
              </div>
            </div>
            <div
              id="slide2"
              className={`carousel-item relative w-full flex flex-col justify-center ${slideIndex === 2 ? 'block' : 'hidden'}`}
              
            >
              <div className="flex justify-around font-bold p-32">
                <div className="text-center w-full">
                  <h2 className="text-brown text-7xl">Gender</h2>
                  <div className="flex justify-center m-8 font-normal">
                    <select
                      className="w-1/2 bg-lightblue rounded-md text-3xl text-center"
                      value={gender}
                      onChange={handleGenderChange}
                      aria-label="gender"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="text-center w-full">
                  <h2 className="text-brown text-7xl">Weight</h2>
                  <div className="">
                    <div className="flex justify-center font-normal">
                      <input
                        className="my-8 mx-2 w-1/2 bg-lightblue rounded-md text-4xl text-center"
                        value={weight}
                        onChange={handleWeightChange
                        }
                        aria-label="weight"
                      />
                      <div className="flex justify-center">
                        <select
                          className="my-8 bg-lightblue rounded-md text-2xl text-center"
                          value={weightUnit}
                          onChange={handleWeightUnit}
                        >
                          <option value="lbs">lbs</option>
                          <option value="kg">kg</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="slide3"
              className={`carousel-item relative w-full flex flex-col ${slideIndex === 3 ? 'block' : 'hidden'}`}
            >
              <div className="flex justify-center h-full items-center ">
                <div className="flex flex-col justify-center text-center w-full">
                  <div className="flex flex-col justify-around h-1/2 w-full">
                    <h2 className="text-brown text-6xl font-bold mb-14">
                      Outside Climate
                    </h2>
                    <div className="flex justify-center m-8">
                      <select
                        className="w-1/2 bg-lightblue rounded-md text-3xl text-center"
                        value={climate}
                        onChange={handleClimateChange}
                        aria-label="climate"
                      >
                        <option value="cold">Cold</option>
                        <option value="neutral">Neutral</option>
                        <option value="warm">Warm</option>
                        <option value="hot">Hot</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center w-full overflow-clip">
                  <h2 className="text-brown text-6xl font-bold">
                    Minutes of Exercise Today
                  </h2>
                  <div className="flex justify-center">
                    <input
                      className="m-8 w-1/2 bg-lightblue rounded-md text-4xl text-center"
                      value={exerciseMinutes}
                      onChange={handleExerciseChange}
                      aria-label="exercise"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              id="slide4"
              className={`carousel-item relative max-h-full w-full p-0 max-w-2/3 flex flex-col ${slideIndex === 4 ? 'block' : 'hidden'}`}
            >
              <div className="flex justify-center my-10">
                <h2 className="text-brown font-bold text-4xl">
                  Your Water Intake So Far
                </h2>
              </div>
              <div className="flex justify-center mx-4 mb-8">
                <p className="text-center text-gray-600 text-lg">
                  Often, we don&apos;t precisely measure the water we consume
                  daily, relying instead on our familiar cups and bottles.
                  Select containers below that closely match the size and shape
                  of your own to estimate your water intake. Hover over the
                  pictures for more details. If you happen to know the exact
                  amount you drank today, feel free to enter it below. You can
                  also combine container estimates with exact amounts for a more
                  accurate record.
                </p>
              </div>
              <div className="flex justify-center mb-5">
                <input
                  className="bg-transparent border-2 border-brown rounded text-center p-3 text-xl font-semibold text-lightblue"
                  value={directInput}
                  onChange={(e) => setDirectInput(e.target.value)}
                />
                <select className="bg-transparent border-2 border-brown rounded text-center p-3 text-xl font-semibold text-lightblue"
                  value={directInputUnit}
                  onChange={handleDirectInputUnit}>
                  <option value="ml">ml</option>
                  <option value="oz">oz</option>
                </select>
              </div>
              <div className="flex justify-center">
                <Intake
                  bottles={bottles}
                  handleBottleChange={handleBottleChange}
                />
              </div>
            </div>
          </div>
          <button href={`#slide${slideIndex + 1}`} className="btn btn-success btn-circle size-12" onClick={next}>
            ❯
          </button>
        </main>
      </section>
      <Results
        hours={hour}
        minute={minute}
        period={period}
        gender={gender}
        weight={weight}
        climate={climate}
        exerciseMinutes={exerciseMinutes}
        bottles={bottles}
        weightUnit={weightUnit}
        directInputUnit={directInputUnit}
        directInput={directInput}
      />
    </>
  );
});

Questions.displayName = "Questions";

export default Questions;
