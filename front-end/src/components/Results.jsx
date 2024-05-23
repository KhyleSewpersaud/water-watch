import "../App.css";
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
import PropTypes from "prop-types";
import BottleOutput from "./BottleOutput";

const bottleStorage = {
  0: 1000,
  1: 950,
  2: 700,
  3: 3700,
  4: 620,
  5: 700,
  6: 1200,
  7: 850,
  8: 300,
  9: 550,
  10: 500,
  11: 1500,
  12: 850,
  13: 330,
  14: 470,
  15: 300,
  16: 400,
  17: 30,
};

const allBottleData = [
  { image: nalgene, name: "Nalgene", style: "w-32 h-auto" },
  { image: gatoradesquirt, name: "Gatorade Squirt", style: "w-32 h-auto" },
  { image: starbuckscup, name: "Starbucks Cup", style: "w-40 h-auto" },
  { image: gallon, name: "Gallon Bottle", style: "w-20 h-auto" },
  { image: hydroflask, name: "Hydroflask", style: "w-12 h-auto" },
  { image: lululemon, name: "Lululemon", style: "w-36 h-auto" },
  { image: stanley, name: "Stanley", style: "w-40 h-auto" },
  { image: yetitumbler, name: "Yeti Tumbler", style: "w-40 h-auto" },
  { image: teacup, name: "Teacup", style: "w-20 h-auto" },
  { image: regularmug, name: "Regular Mug", style: "w-32 h-auto" },
  { image: purelife, name: "Purelife", style: "w-32 h-auto" },
  { image: largepurelife, name: "Large Purelife", style: "w-72 h-auto" },
  { image: largevoss, name: "Large Voss", style: "w-32 h-auto" },
  { image: smallfiji, name: "Small Fiji", style: "w-36 h-auto" },
  { image: redsolocup, name: "Red Solo Cup", style: "w-40 h-auto" },
  { image: smallglass, name: "Small Glass", style: "w-40 h-auto" },
  { image: regularglass, name: "Regular Glass", style: "w-24 h-auto" },
  { image: waterfountain, name: "Water Fountain", style: "w-40 h-auto" },
];

function Results({
  hours,
  minute,
  period,
  gender,
  weight,
  climate,
  exerciseMinutes,
  bottles,
  weightUnit,
  directInputUnit,
  directInput,
}) {

  console.log(hours, minute, period)
  function dailyIntake() {
    var multiplier;
    var sum = 0;
    if (gender === "male") {
      multiplier = 0.65;
    } else {
      multiplier = 0.5;
    }

    if (weightUnit === "kg") {
      weight = weight * 2.2;
    }

    sum += multiplier * weight;

    if (climate === "cold") {
      sum += 8;
    } else if (climate === "neutral") {
      sum += 4;
    } else if (climate === "warm") {
      sum += 8;
    } else if (climate === "hot") {
      sum += 16;
    } else {
      sum += 4;
    }

    sum += (exerciseMinutes / 30) * 12;

    sum = sum * 29.57;

    return sum;
  }

  function consumed() {
    // loop through every bottle. quantity * capacity
    var total = 0;

    for (let i = 0; i < bottles.length; i++) {
      total += bottles[i] * bottleStorage[i];
    }

    if (directInputUnit === "ml") {
      total += directInput;
    } else {
      total += directInput * 29.57;
    }
    return total;
  }

  function remaining() {
    return dailyIntake() - consumed();
  }

  function totalWaterLeft() {
    let bottlesUsed = [];

    for (let i = 0; i < bottles.length; i++) {
      if (bottles[i] > 0) {
        bottlesUsed.push(i);
      }
    }

    if (bottlesUsed.length === 1) {
      const bottleCapacity = bottleStorage[bottlesUsed[0]];
      const neededBottles =
        Math.round(remaining() / bottleCapacity / 0.25) * 0.25;
      return (
        <BottleOutput
          key={bottlesUsed[0]}
          image={allBottleData[bottlesUsed[0]].image}
          quantity={neededBottles}
          className={allBottleData[bottlesUsed[0]].style}
        />
      );
    }

    if (bottlesUsed.length >= 2) {
      const remainingWater = remaining();
      let bottlesUsed = bottles
        .map((qty, index) => ({
          index,
          capacity: bottleStorage[index],
          qty,
          half: false,
        }))
        .filter((bottle) => bottle.qty > 0);

      if (bottlesUsed.length > 3) {
        shuffle(bottlesUsed);
        bottlesUsed = bottlesUsed.slice(0, 3);
      }

      const halfBottles = bottlesUsed.map((bottle) => ({
        index: bottle.index,
        capacity: Math.round(bottle.capacity / 2),
        half: true,
      }));

      bottlesUsed = bottlesUsed.concat(halfBottles);

      let res = [];

      // eslint-disable-next-line no-inner-declarations
      function dfs(i, cur, total) {
        if (total >= remainingWater - 200 && total <= remainingWater + 200) {
          res.push(cur.slice());
          return;
        }
        if (i >= bottlesUsed.length || total > remainingWater + 500) {
          return;
        }
        cur.push(bottlesUsed[i]);
        dfs(i, cur, total + bottlesUsed[i].capacity);
        cur.pop();
        dfs(i + 1, cur, total);
      }
      dfs(0, [], 0);

      shuffle(res);

      const randomResults = res.slice(0, 1);

      const finalResults = [];

      for (let i = 0; i < randomResults.length; i++) {
        var tempMap = {};
        for (let j = 0; j < randomResults[i].length; j++) {
          if (randomResults[i][j].half) {
            tempMap[randomResults[i][j].index] =
              (tempMap[randomResults[i][j].index] || 0) + 0.5;
          } else {
            tempMap[randomResults[i][j].index] =
              (tempMap[randomResults[i][j].index] || 0) + 1;
          }
        }
        finalResults.push(tempMap)
      }

      return (
        <div className="flex">
          <div className="flex flex-col">
            {finalResults.map((solution, solutionIndex) => (
            <div key={solutionIndex} className="solution flex"  >
              {Object.entries(solution).map(([index, quantity]) => (
                <BottleOutput
                  key={index}
                  image={allBottleData[index].image}
                  quantity={quantity}
                  className={allBottleData[index].style}
                />
              ))}
            </div>
          ))}
          </div>
          
          hello
        </div>
      );
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  return (
    <>
      <div className="flex justify-center my-14 flex-col">
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-5xl text-brown">
            You Need To Drink{"\u00A0"}
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
            {Math.round((dailyIntake() / 1000) * 10) / 10}L
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
            {"\u00A0"}Daily
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center font-bold text-5xl text-brown">
            You have{"\u00A0"}
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
            {Math.round((remaining() / 1000) * 10) / 10}L
          </h1>
          <h1 className="text-center font-bold text-5xl text-lightblue">
            {"\u00A0"}Left
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center">
            <div className="flex">{totalWaterLeft()}</div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

Results.propTypes = {
  hours: PropTypes.string.isRequired,
  minute: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  exerciseMinutes: PropTypes.string.isRequired,
  bottles: PropTypes.array.isRequired,
  weightUnit: PropTypes.string.isRequired,
  directInputUnit: PropTypes.string.isRequired,
  directInput: PropTypes.number.isRequired,
};

export default Results;
