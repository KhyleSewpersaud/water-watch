import nalgene from "../assets/nalgene.png";
import regularmug from "../assets/regularmug.png";
import purelife from "../assets/purelife.png";
import gatoradesquirt from "../assets/gatoradesquirt.png";
import starbuckscup from "../assets/starbuckscup.png";
import gallon from "../assets/gallonbottle.png";
import hydroflask from "../assets/hydroflask.png";
import largepurelife from "../assets/largepurelife.png";
import largevoss from "../assets/largevoss.png";
import lululemon from "../assets/lululemon.png";
import redsolocup from "../assets/redsolocup.png";
import regularglass from "../assets/regularglass.png";
import smallfiji from "../assets/smallfiji.png";
import smallglass from "../assets/smallglass.png";
import stanley from "../assets/stanley.png";
import teacup from "../assets/teacup.png";
import waterfountain from "../assets/waterfountain.png";
import yetitumbler from "../assets/yetitumbler.png";
import Bottle from "./Bottle.jsx";
import PropTypes from "prop-types";


const bottleData = [
  { image: nalgene, name: "Nalgene", style: "w-32 h-auto" },
  { image: gatoradesquirt, name: "Gatorade Squirt", style: "w-32 h-auto" },
  { image: starbuckscup, name: "Starbucks Cup", style: "w-40 h-auto" },
  { image: gallon, name: "Gallon Bottle", style: "w-20 h-auto" },
  { image: hydroflask, name: "Hydroflask", style: "w-12 h-auto" },
  { image: lululemon, name: "Lululemon", style: "w-36 h-auto" },
  { image: stanley, name: "Stanley", style: "w-40 h-auto" },
  { image: yetitumbler, name: "Yeti Tumbler", style: "w-40 h-auto" },
];

const cupData = [
  { image: teacup, name: "Teacup", style: "w-20 h-auto" },
  { image: regularmug, name: "Regular Mug", style: "w-32 h-auto" },
  { image: purelife, name: "Purelife", style: "w-32 h-auto" },
  { image: largepurelife, name: "Large Purelife", style: "w-72 h-auto" },
  { image: largevoss, name: "Large Voss", style: "w-32 h-auto" },
  { image: smallfiji, name: "Small Fiji", style: "w-36 h-auto" },
  { image: redsolocup, name: "Red Solo Cup", style: "w-40 h-auto" },
  { image: smallglass, name: "Small Glass", style: "w-40 h-auto" },
  { image: regularglass, name: "Regular Glass" , style: "w-24 h-auto"},
  { image: waterfountain, name: "Water Fountain" , style: "w-40 h-auto"},
];

function Intake({bottles, handleBottleChange}) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mb-12">
          <div className="flex justify-center">
            <h2 className="text-lightblue text-2xl font-semibold mb-3">
              Bottles
            </h2>
          </div>
          <div
            className="overflow-auto border-2 border-brown rounded p-3"
            style={{ maxWidth: "100%", width: "700px" }}
          >
            <div className="flex">
            {bottleData.map((bottle, index) => (
              <Bottle
                key={index}
                index={index}
                image={bottle.image}
                quantity={bottles[index]}
                handleBottleChange={handleBottleChange}
                className={bottle.style}
              />
            ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-center">
            <h2 className="text-lightblue text-2xl font-semibold mb-3">Cups</h2>
          </div>
          <div
            className="overflow-auto border-2 border-brown rounded p-3"
            style={{ maxWidth: "100%", width: "700px" }}
          >
            <div className="flex">
            {cupData.map((cup, index) => (
              <Bottle
                key={index + bottleData.length} // ensure unique key by offsetting the index
                index={index + bottleData.length} // ensure unique index
                image={cup.image}
                quantity={bottles[index + bottleData.length]}
                handleBottleChange={handleBottleChange}
                className={cup.style}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Intake.propTypes = {
  bottles: PropTypes.array.isRequired,
  handleBottleChange: PropTypes.func.isRequired
}

export default Intake;
