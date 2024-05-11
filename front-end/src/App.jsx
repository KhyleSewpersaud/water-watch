import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-lightbeige p-8 my-2 w-2/5 rounded-xl flex justify-center">
          <h1 className="font-display text-lightblue font-bold text-5xl">
            Water Watch
          </h1>
        </div>
      </div>
      <div className="flex justify-around my-20">
        <div className="flex justify-start flex-col p-4 w-1/4">
          <h2 className="text-brown text-5xl font-semibold m-2">
            Are you drinking
          </h2>
          <h2 className="text-darkblue text-5xl font-semibold m-2">Enough Water?</h2>
          <button className="btn bg-darkblue hover:bg-sky-950 text-white text-2xl m-2 my-8 w-1/2">
            Check
          </button>
        </div>
        <div>
          <h3>Recommended water intake</h3>
        </div>
      </div>
    </>
  );
}

export default App;
