import "./App.css";
import { useRef, useEffect } from "react";
import Questions from "./components/Questions.jsx";
import Results from "./components/Results.jsx";
import nalgene from "./assets/nalgene.png";
import regularmug from "./assets/regularmug.png";
import purelife from "./assets/purelife.png";
import gatoradesquirt from "./assets/gatoradesquirt.png";
import starbuckscup from "./assets/starbuckscup.png";
import addition from "./assets/addition.png";

function App() {
  const scrollToQuestionRef = useRef();

  const scrollToQuestion = () => {
    scrollToQuestionRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  useEffect(() => {
    if (!window.location.hash) {
      window.location.href = `${window.location.origin}/#slide1`;
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);


  return (
    <>
      <div className="flex justify-center flex-auto">
        <div className="bg-lightbeige p-8 my-2 w-2/5 rounded-xl flex justify-center">
          <h1 className="font-display text-lightblue font-bold text-5xl">
            Water Watch
          </h1>
        </div>
      </div>

      <div className="flex justify-around my-20 px-16">
        <div className="flex justify-start flex-col p-4">
          <h2 className="text-brown text-7xl font-semibold m-2">
            Are You Drinking
          </h2>
          <h2 className="text-darkblue text-8xl font-semibold m-2">
            Enough Water?
          </h2>
          <button
            className="btn btn-error text-white text-2xl m-2 my-8 w-1/2 min-w-min border-transparent"
            onClick={scrollToQuestion}
          >
            Check
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end">
            <img src={nalgene} className="max-h-40 max-w-lg -mx-12" />
            <img src={regularmug} className="max-h-40 max-w-lg -mx-16 mt-6" />
            <img src={purelife} className="max-h-40 max-w-lg -mx-12" />
            <img src={gatoradesquirt} className="max-h-40 max-w-lg -mx-10" />
          </div>

          <div className="flex justify-between">
            <div className="flex items-end">
              <img src={addition} className="max-h-28 max-w-md -mx-12" />
            </div>
            <img src={starbuckscup} className="max-h-40 max-w-lg -mx-12" />
          </div>

          <div className="divider bg-darkblue max-h-2"></div>

          <div className="flex justify-start flex-col">
            <h3 className="text-2xl font-bold whitespace-normal leading-2 text-brown">
              Recommended Daily Water Intake For The
            </h3>
            <h3 className="text-3xl font-extrabold whitespace-normal leading-2 text-darkblue">
              Average Man
            </h3>
          </div>
        </div>
      </div>
      <Questions ref={scrollToQuestionRef} />
      <Results />
    </>
  );
}

export default App;
