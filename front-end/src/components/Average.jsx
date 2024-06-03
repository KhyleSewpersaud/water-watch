import nalgene from "../assets/nalgene.png";
import regularmug from "../assets/regularmug.png";
import purelife from "../assets/purelife.png";
import gatoradesquirt from "../assets/gatoradesquirt.png";
import starbuckscup from "../assets/starbuckscup.png";
import arrow from "../assets/arrow.png";
import "./Average.css";

const Average = () => {
  return (
    <>
      <figure className="figure">
        <div className="dot">
          <img src={nalgene} className="nalgene" alt="Nalgene Bottle" />
          <img src={regularmug} className="regularmug" alt="Regular Mug" />
          <img src={purelife} className="purelife" alt="Purelife Bottle" />
          <img
            src={gatoradesquirt}
            className="gatoradesquirt"
            alt="Gatorade Squirt Bottle"
          />
          <img
            src={starbuckscup}
            className="starbuckscup"
            alt="Starbucks Cup"
          />
        </div>
        <img src={arrow} className="arrow" alt="Arrow" />
        <div
          className="arrow-text font-display w-80 text-xl border-2 rounded-xl border-darkblue p-2 text-center font-semibold"
          id="average-person"
        >
          Recommended Daily Water Intake For The Average Man
        </div>
      </figure>
    </>
  );
};

export default Average;
