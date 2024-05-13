import "../App.jsx";

function Results() {
  return (
    <>
      <div className="flex justify-center my-14 flex-col">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-5xl text-brown">
            You Need To Drink{'\u00A0'}
          </h1> 
          <h1 className="text-center font-bold text-5xl text-lightblue">
            3.7L
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
          {'\u00A0'}Daily
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-5xl text-brown">
            You have{'\u00A0'}
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
            1.1L
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
          {'\u00A0'}Left
          </h1>
        </div>
        <div className="flex justify-center mt-10">
            <h3>Here are a few ways you can do that</h3>
        </div>
      </div>
    </>
  );
}

export default Results;
