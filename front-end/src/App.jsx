import "./App.css";
import { useRef } from "react";
import Questions from "./components/Questions.jsx";
import Average from "./components/Average.jsx";

function App() {
  const scrollToQuestionRef = useRef();

  const scrollToQuestion = () => {
    scrollToQuestionRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <header className="flex justify-center">
        <div className="bg-lightbeige p-8 my-2 sm:w-2/5 w-11/12 rounded-xl flex justify-center drop-shadow-md ml-4 sm:ml-0">
          <h1 className="font-display text-lightblue font-bold text-5xl">
            Water Watch
          </h1>
        </div>
      </header>

      <section className="font-display sm:flex justify-center sm:my-20 px-6">
        <div className="flex justify-start flex-col p-4 text-center sm:text-left ml-2 sm:ml-0 sm:mr-32">
          <h2 className="text-brown sm:text-7xl font-semibold m-2 text-4xl">
            Are You Drinking
          </h2>
          <h2 className="text-darkblue sm:text-8xl font-semibold m-2 text-4xl ml-2 sm:ml-0">
            Enough Water?
          </h2>
          <button
            className="btn btn-error text-white text-2xl m-2 my-8 w-full min-w-min border-transparent sm:w-1/2"
            onClick={scrollToQuestion}
          >
            Check
          </button>
        </div>

        <Average />
      </section>
      <div className="spacer"></div>
      <Questions ref={scrollToQuestionRef} />
      <footer className="flex justify-center mt-20 pb-5 px-4 font-display">
        <div className="text-center">
          <span className="font-bold">Disclaimer:</span> The information provided on this website is for general
          informational purposes only and is not intended as medical advice. The
          recommendations on daily water intake are based on general guidelines
          and may not be suitable for everyone. Please consult with a healthcare
          professional for advice tailored to your individual needs and
          circumstances. We are not responsible for any health issues or
          injuries that may arise from following the information provided on
          this site.
        </div>
      </footer>
    </>
  );
}

export default App;
