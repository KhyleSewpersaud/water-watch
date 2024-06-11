import "../App.jsx";
import { forwardRef, useState, useEffect } from "react";
import TimePicker from "./TimePicker.jsx";
import Intake from "./Intake.jsx";
import Results from "./Results.jsx";
import CustomBottle from "./CustomBottle.jsx";

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
    if (slideIndex < 4) {
      // Assuming there are 4 slides
      setSlideIndex(slideIndex + 1);
      scrollToSlide(slideIndex + 1);
    }
  };

  const scrollToSlide = (index) => {
    const carousel = document.querySelector(".carousel");
    const targetSlide = carousel.querySelector(`#slide${index}`);
    if (targetSlide) {
      targetSlide.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // ########## Slider Buttons ########## //

  // ########## Inputs on Slider ########## //
  const [weight, setWeight] = useState(0);
  const [exerciseMinutes, setExerciseMinutes] = useState(0);
  const [gender, setGender] = useState("male");
  const [climate, setClimate] = useState("neutral");
  const [weightUnit, setWeightUnit] = useState("lbs");
  const [directInputUnit, setDirectInputUnit] = useState("ml");

  const handleDirectInputUnit = (e) => {
    setDirectInputUnit(e.target.value);
  };

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
    if (!isNaN(value) && value !== "") {
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
    value = Math.min(Math.max(parseInt(value) || 0, 0), 12).toString();
    setHour(value.padStart(2, "0"));
  };

  const handleMinuteChange = (e) => {
    let value = e.target.value;
    // Slice the last 2 digits entered
    value = value.slice(-2);
    // Ensure value is between 0 and 59
    value = Math.min(Math.max(parseInt(value) || 0, 0), 59).toString();
    setMinute(value.padStart(2, "0"));
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };
  // ########## TimePicker ########## //

  // ########## Intake ########## //
  const [directInput, setDirectInput] = useState(0);
  const [bottles, setBottles] = useState(Array(19).fill(0));

  const handleBottleChange = (index, quantity) => {
    const newBottles = [...bottles];
    newBottles[index] = quantity;
    setBottles(newBottles);
  };
  // ########## Intake ########## //

  // ########## CustomBottle ########## //
  const [capacity, handleCapacity] = useState(0);
  const [unit, handleUnit] = useState("ml");
  const [file, setFile] = useState(null);

  function handleCapacityChange(e) {
    let value = e.target.value;

    if (value === "" || isNaN(value)) {
      value = 0;
    } else {
      value = Number(value);

      value = Math.max(value, 0).toString();
    }

    e.target.value = value;

    handleCapacity(value);
  }

  function handleUnitChange(e) {
    handleUnit(e.target.value);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const maxSizeMB = 5;
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        alert(
          `File size exceeds ${maxSizeMB} MB. Please upload a smaller image.`
        );
        return;
      }
      setFile(URL.createObjectURL(file));
      console.log(file)
    }
  }
  // ########## CustomBottle ########## //

  const carouselHeight = slideIndex === 4 ? "auto" : "60vh";

  const clearButton = () => {
    setBottles(Array(19).fill(0));
  };

  return (
    <>
      <div className="flex justify-center my-8" ref={ref}></div>
      <div className="flex justify-center">
        <div className="divider divider-success w-4/5"></div>
      </div>

      <div className="font-display">
        <section className="mt-16 flex justify-center overflow-x-hidden">
          <main className="flex flex-row w-full justify-around items-center">
            <button
              href={`#slide${slideIndex - 1}`}
              className="btn btn-success btn-circle"
              onClick={prev}
            >
              ❮
            </button>
            <div
              className="carousel w-3/4 bg-lightbeige rounded-xl p-2 relative drop-shadow-2xl"
              style={{ height: carouselHeight }}
            >
              <div
                id="slide1"
                className={`carousel-item relative w-full flex flex-col justify-center ${
                  slideIndex === 1 ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center text-brown font-bold sm:text-5xl text-lg">
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
                className={`carousel-item relative w-full flex flex-col justify-center ${
                  slideIndex === 2 ? "block" : "hidden"
                }`}
              >
                <div className="flex sm:flex-row flex-col justify-around font-bold sm:p-32">
                  <div className="text-center sm:w-full">
                    <h2 className="text-brown sm:text-7xl text-4xl">Gender</h2>
                    <div className="flex justify-center sm:my-8 mx-3 sm:m-8 font-normal">
                      <select
                        className="w-3/4 sm:1/2 bg-lightblue rounded-md sm:text-3xl text-lg text-center"
                        value={gender}
                        onChange={handleGenderChange}
                        aria-label="gender"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-center w-full mt-10 sm:mt-0">
                    <h2 className="text-brown sm:text-7xl text-4xl">Weight</h2>
                    <div className="">
                      <div className="flex justify-center font-normal">
                        <input
                          className="sm:my-8 mx-2 w-1/2 bg-lightblue rounded-md sm:text-4xl text-lg text-center"
                          value={weight}
                          onChange={handleWeightChange}
                          aria-label="weight"
                        />
                        <div className="flex justify-center">
                          <select
                            className="sm:my-8 bg-lightblue rounded-md sm:text-2xl text-lg text-center"
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
                className={`carousel-item relative w-full flex flex-col ${
                  slideIndex === 3 ? "block" : "hidden"
                }`}
              >
                <div className="flex justify-center sm:flex-row flex-col h-full items-center ">
                  <div className="flex flex-col justify-center text-center w-full">
                    <div className="flex flex-col justify-between h-1/2 w-full">
                      <h2 className="text-brown sm:text-6xl text-3xl font-bold">
                        Outside Climate
                      </h2>
                      <div className="flex justify-center sm:m-8">
                        <select
                          className="w-1/2 sm:mt-14 bg-lightblue rounded-md sm:text-3xl text-lg text-center"
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
                  <div className="text-center w-full overflow-clip mt-10 sm:mt-0">
                    <h2 className="text-brown sm:text-6xl text-3xl font-bold">
                      Minutes of Exercise Today
                    </h2>
                    <div className="flex justify-center">
                      <input
                        className="sm:m-8 w-1/2 bg-lightblue rounded-md sm:text-4xl text-lg text-center"
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
                className={`carousel-item relative max-h-full w-full max-w-2/3 flex flex-col ${
                  slideIndex === 4 ? "block" : "hidden"
                }`}
              >
                <div className="ml-5 sm:ml-0">
                  <div className="flex justify-center my-10">
                    <h2 className="text-brown font-bold sm:text-4xl text-xl">
                      Your Water Intake So Far
                    </h2>
                  </div>
                  <div className="flex justify-center mx-4 mb-8">
                    <p className="text-center text-gray-600 sm:text-lg text-sm">
                      Often, we don&apos;t measure our daily water intake
                      exactly, relying on familiar cups and bottles. Choose
                      containers below that match yours to estimate your intake.
                      Hover for details and swipe for more options. If you know
                      the exact amount you drank, enter it below. Any bottle you
                      plan to use, press the + button once. Combine estimates
                      with exact amounts for accuracy.
                    </p>
                  </div>
                  <div className="flex justify-center mb-5">
                    <input
                      className="bg-transparent border-2 border-brown rounded text-center sm:p-3 text-xl font-semibold text-lightblue"
                      value={directInput}
                      onChange={(e) => setDirectInput(e.target.value)}
                    />
                    <select
                      className="bg-transparent border-2 border-brown rounded text-center sm:p-3 text-xl font-semibold text-lightblue"
                      value={directInputUnit}
                      onChange={handleDirectInputUnit}
                    >
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
                <div className="flex justify-center ml-4 sm:ml-0">
                  <CustomBottle
                    bottles={bottles}
                    handleBottleChange={handleBottleChange}
                    capacity={capacity}
                    handleCapacityChange={handleCapacityChange}
                    unit={unit}
                    handleUnitChange={handleUnitChange}
                    file={file}
                    handleFileChange={handleFileChange}
                  />
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    className="btn btn-info flex justify-center sm:w-1/6 w-1/2 text-xl"
                    onClick={clearButton}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
            <button
              href={`#slide${slideIndex + 1}`}
              className="btn btn-success btn-circle size-12"
              onClick={next}
            >
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
          customCapacity={capacity}
          customFile={file}
        />
      </div>
    </>
  );
});

Questions.displayName = "Questions";

export default Questions;
