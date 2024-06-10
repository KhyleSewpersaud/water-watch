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
import "./Intake.css"

const bottleData = [
  { image: nalgene, name: "Nalgene", style: "w-32 h-auto", info: "ml: 1000 | oz: 33.8" },
  { image: gatoradesquirt, name: "Gatorade Squirt", style: "w-32 h-auto", info: "ml: 950 | oz: 32.1"},
  { image: starbuckscup, name: "Starbucks Cup", style: "w-32 h-auto", info: "ml: 700 | oz: 23.7" },
  { image: gallon, name: "Gallon Bottle", style: "w-32 h-auto", info: "ml: 3700 | oz: 125.1" },
  { image: hydroflask, name: "Hydroflask", style: "w-32 h-auto", info: "ml: 530 | oz: 17.9" },
  { image: lululemon, name: "Lululemon", style: "w-32 h-auto", info: "ml: 700 | oz: 23.7"},
  { image: stanley, name: "Stanley", style: "w-32 h-auto", info: "ml: 1200 | oz: 40.6" },
  { image: yetitumbler, name: "Yeti Tumbler", style: "w-32 h-auto", info: "ml: 850| oz: 28.7" },
];

const cupData = [
  { image: teacup, name: "Teacup", style: "w-32 h-auto", info: "ml: 300 | oz: 10.1" },
  { image: regularmug, name: "Regular Mug", style: "w-32 h-auto", info: "ml: 550 | oz: 18.6" },
  { image: purelife, name: "Purelife", style: "w-32 h-auto", info: "ml: 500 | oz: 16.9" },
  { image: largepurelife, name: "Large Purelife", style: "w-32 h-auto", info: "ml: 1500 | oz: 50.7" },
  { image: largevoss, name: "Large Voss", style: "w-32 h-auto", info: "ml: 850 | oz: 28.7" },
  { image: smallfiji, name: "Small Fiji", style: "w-32 h-auto", info: "ml: 330 | oz: 11.2" },
  { image: redsolocup, name: "Red Solo Cup", style: "w-32 h-auto", info: "ml: 470 | oz: 15.9" },
  { image: smallglass, name: "Small Glass", style: "w-32 h-auto", info: "ml: 300 | oz: 10.1" },
  { image: regularglass, name: "Regular Glass", style: "w-32 h-auto", info: "ml: 450 | oz: 15.2" },
  { image: waterfountain, name: "Water Fountain", style: "w-32 h-auto", info: "1oz/30ml per second" },
];

function Intake({ bottles, handleBottleChange }) {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="mb-12 w-full">
          <div className="flex justify-center">
            <h2 className="text-lightblue sm:text-2xl text-lg font-semibold mb-3">
              Reusable Bottles
            </h2>
          </div>
          <div
            className="containerz overflow-auto border-2 border-brown rounded sm:p-3"
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
                  info={bottle.info}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex justify-center">
            <h2 className="text-lightblue sm:text-2xl text-lg font-semibold mb-3">
              Plastic Water Bottles and Cups
            </h2>
          </div>
          <div
            className="containerz overflow-auto border-2 border-brown rounded sm:p-3"
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
                  info={cup.info}
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
  handleBottleChange: PropTypes.func.isRequired,
};

export default Intake;
