import "../App.css";
import { useState } from "react";
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
  {
    image: nalgene,
    name: "Nalgene",
    style: "w-32 h-auto",
    info: "ml: 1000 | oz: 33.8",
  },
  {
    image: gatoradesquirt,
    name: "Gatorade Squirt",
    style: "w-32 h-auto",
    info: "ml: 950 | oz: 32.1",
  },
  {
    image: starbuckscup,
    name: "Starbucks Cup",
    style: "w-32 h-auto",
    info: "ml: 700 | oz: 23.7",
  },
  {
    image: gallon,
    name: "Gallon Bottle",
    style: "w-32 h-auto",
    info: "ml: 3700 | oz: 125.1",
  },
  {
    image: hydroflask,
    name: "Hydroflask",
    style: "w-32 h-auto",
    info: "ml: 530 | oz: 17.9",
  },
  {
    image: lululemon,
    name: "Lululemon",
    style: "w-32 h-auto",
    info: "ml: 700 | oz: 23.7",
  },
  {
    image: stanley,
    name: "Stanley",
    style: "w-32 h-auto",
    info: "ml: 1200 | oz: 40.6",
  },
  {
    image: yetitumbler,
    name: "Yeti Tumbler",
    style: "w-32 h-auto",
    info: "ml: 850| oz: 28.7",
  },
  {
    image: teacup,
    name: "Teacup",
    style: "w-32 h-auto",
    info: "ml: 300 | oz: 10.1",
  },
  {
    image: regularmug,
    name: "Regular Mug",
    style: "w-32 h-auto",
    info: "ml: 550 | oz: 18.6",
  },
  {
    image: purelife,
    name: "Purelife",
    style: "w-32 h-auto",
    info: "ml: 500 | oz: 16.9",
  },
  {
    image: largepurelife,
    name: "Large Purelife",
    style: "w-32 h-auto",
    info: "ml: 1500 | oz: 50.7",
  },
  {
    image: largevoss,
    name: "Large Voss",
    style: "w-32 h-auto",
    info: "ml: 850 | oz: 28.7",
  },
  {
    image: smallfiji,
    name: "Small Fiji",
    style: "w-32 h-auto",
    info: "ml: 330 | oz: 11.2",
  },
  {
    image: redsolocup,
    name: "Red Solo Cup",
    style: "w-32 h-auto",
    info: "ml: 470 | oz: 15.9",
  },
  {
    image: smallglass,
    name: "Small Glass",
    style: "w-32 h-auto",
    info: "ml: 300 | oz: 10.1",
  },
  {
    image: regularglass,
    name: "Regular Glass",
    style: "w-32 h-auto",
    info: "ml: 450 | oz: 15.2",
  },
  {
    image: waterfountain,
    name: "Water Fountain",
    style: "w-32 h-auto",
    info: "1oz/30ml per second",
  },
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
  const [refreshKey, setRefreshKey] = useState(0);

  function handleRefresh() {
    setRefreshKey((prevKey) => prevKey + 1);
  }

  function timeUntilSleep() {
    const now = new Date();

    let wakeHour = parseInt(hours);
    const wakeMinute = parseInt(minute);
    const isPM = period.toLowerCase() === "pm";

    // Convert to 24-hour format
    if (isPM && wakeHour !== 12) {
      wakeHour += 12;
    } else if (!isPM && wakeHour === 12) {
      wakeHour = 0;
    }

    const wakeTime = new Date();
    wakeTime.setHours(wakeHour);
    wakeTime.setMinutes(wakeMinute);
    wakeTime.setSeconds(0);
    wakeTime.setMilliseconds(0);

    // Calculate sleep time (16 hours after wake time)
    const sleepTime = new Date(wakeTime);
    sleepTime.setHours(sleepTime.getHours() + 16);

    let timeDiff = sleepTime - now;
    if (timeDiff < 0) {
      // If the sleep time is earlier in the day than the current time,
      // it means the user intends to sleep the next day.
      timeDiff += 24 * 60 * 60 * 1000; // add 24 hours
    }

    const hoursUntilSleep = timeDiff / (1000 * 60 * 60); // convert milliseconds to hours

    return hoursUntilSleep;
  }

  timeUntilSleep();

  function dailyIntake() {
    let multiplier;
    if (gender === "male") {
      multiplier = 0.6;
    } else {
      multiplier = 0.5;
    }
  
    let weightInLbs = weight;
    if (weightUnit === "kg") {
      weightInLbs = weight * 2.2; // Convert kg to lbs
    }
  
    let intake = multiplier * weightInLbs;
  
    switch (climate) {
      case "cold":
        intake += 8;
        break;
      case "neutral":
        intake += 4;
        break;
      case "warm":
        intake += 8;
        break;
      case "hot":
        intake += 16;
        break;
      default:
        intake += 4;
    }
  
    intake += (exerciseMinutes / 30) * 12;
    return intake * 29.5735; // Convert oz to ml
  }

  function consumed() {
    // loop through every bottle. quantity * capacity
    var total = 0;

    for (let i = 0; i < bottles.length; i++) {
      total += bottles[i] * bottleStorage[i];
    }

    if (directInputUnit === "ml") {
      total += directInput * 1;
    } else {
      total += directInput * 29.57;
    }
    console.log(total)
    return total;
  }

  function remaining() {
    const remainingAmount = dailyIntake() - consumed();
    return Math.max(remainingAmount, 0);
  }

  function totalWaterLeft() {
    if (remaining() <= 200) {
      return (
        <div className="bg-lightbeige rounded-xl p-3 flex justify-center">
          <h3 className="text-2xl font-semibold text-center">
            Congrats! You drank your daily required intake!
          </h3>
        </div>
      );
    }

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
        <div
          key={refreshKey}
          className="flex flex-col sm:flex-row justify-center items-center sm:items-start w-full"
        >
          <div className="flex flex-col justify-center items-center bg-lightbrown p-5 rounded-xl mx-2 w-full sm:w-1/4 mb-5 sm:mb-0">
            <h3 className="text-center text-brown font-semibold text-3xl mb-2">
              Over the day, drink a total of
            </h3>
            <figure className="bg-lightbeige rounded-xl p-3 w-full flex justify-center h-64">
              <BottleOutput
                key={bottlesUsed[0]}
                image={allBottleData[bottlesUsed[0]].image}
                quantity={parseFloat(neededBottles)}
                className={allBottleData[bottlesUsed[0]].style}
              />
            </figure>
          </div>
          <div className="flex flex-col justify-center items-center bg-lightbrown p-5 rounded-xl mx-2 w-full sm:w-1/4">
            <h3 className="text-center text-brown font-semibold text-3xl mb-2">
              Every hour until bed, drink
            </h3>
            <figure className="bg-lightbeige rounded-xl p-3 w-full flex justify-center h-64">
              <BottleOutput
                key={bottlesUsed[0]}
                image={allBottleData[bottlesUsed[0]].image}
                quantity={parseFloat(
                  (neededBottles / timeUntilSleep()).toFixed(2)
                )}
                className={allBottleData[bottlesUsed[0]].style}
              />
            </figure>
          </div>
        </div>
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

      const randomHourlyBottleIndex = Math.floor(
        Math.random() * bottlesUsed.length
      );
      const randomHourlyBottle = bottlesUsed[randomHourlyBottleIndex];
      const toFillOneBottle =
        Math.round(remainingWater / randomHourlyBottle.capacity / 0.25) * 0.25;

      const halfBottles = bottlesUsed.map((bottle) => ({
        index: bottle.index,
        capacity: Math.round(bottle.capacity / 2),
        half: true,
      }));

      bottlesUsed = bottlesUsed.concat(halfBottles);

      let res = [];

      const start = Date.now(); // Record the start time
      const duration = 1000; // Set a default maximum duration (in milliseconds)

      // eslint-disable-next-line no-inner-declarations
      function dfs(i, cur, total) {
        // Check if the function has been running longer than the maximum duration
        if (Date.now() - start > duration) {
          return;
        }
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

      const randomResult = res[Math.floor(Math.random() * res.length)];

      const finalResult = {};

      for (let i = 0; i < randomResult.length; i++) {
        if (randomResult[i].half) {
          finalResult[randomResult[i].index] =
            (finalResult[randomResult[i].index] || 0) + 0.5;
        } else {
          finalResult[randomResult[i].index] =
            (finalResult[randomResult[i].index] || 0) + 1;
        }
      }

      return (
        <div className="flex flex-col sm:flex-row justify-center w-full items-center sm:items-start">
          <div className="flex flex-col justify-center items-center bg-lightbrown p-5 rounded-xl mx-2 w-full sm:w-1/3 mb-5 sm:mb-0">
            <h3 className="text-center text-brown font-semibold text-xl sm:text-3xl mb-2">
              Over the day, drink a total of
            </h3>
            <figure className="bg-lightbeige rounded-xl p-3 w-full flex justify-center h-64">
              {Object.entries(finalResult).map(([index, quantity]) => (
                <BottleOutput
                  key={index}
                  image={allBottleData[index].image}
                  quantity={parseFloat(quantity)}
                  className={allBottleData[index].style}
                />
              ))}
            </figure>
          </div>
          <div className="flex flex-col justify-center items-center bg-lightbrown p-5 rounded-xl mx-2 w-full sm:w-1/3">
            <h3 className="text-center text-brown font-semibold text-xl sm:text-3xl mb-2">
              Every hour until bed, drink
            </h3>
            <figure className="bg-lightbeige rounded-xl p-3 w-full flex justify-center h-64">
              <BottleOutput
                key={randomHourlyBottle.index}
                image={allBottleData[randomHourlyBottle.index].image}
                quantity={parseFloat(
                  (toFillOneBottle / timeUntilSleep()).toFixed(2)
                )}
                className={allBottleData[randomHourlyBottle.index].style}
              />
            </figure>
          </div>
        </div>
      );
    }
  }

  function addtionalWaterForTemp() {
    if (climate === "warm" || climate === "hot") {
      let bottlesUsed = bottles
        .map((qty, index) => ({
          index,
          capacity: bottleStorage[index],
          qty,
          half: false,
        }))
        .filter((bottle) => bottle.qty > 0);

      if (bottlesUsed.length === 0) {
        return;
      }

      const randomBottle =
        bottlesUsed[Math.floor(Math.random() * bottlesUsed.length)];

      const fractionOfOz =
        climate === "warm"
          ? 250 / randomBottle.capacity
          : 500 / randomBottle.capacity;

      return (
        <div className="flex justify-center items-center bg-lightbrown p-5 rounded-xl mx-2">
          <h3 className="text-center text-brown font-semibold sm:text-3xl mb-2">
            Consider Drinking an Extra
          </h3>
          <figure className=" p-3 flex justify-center">
            <BottleOutput
              key={randomBottle.index}
              image={allBottleData[randomBottle.index].image}
              quantity={parseFloat(fractionOfOz.toFixed(2))}
              className={allBottleData[randomBottle.index].style}
            />
          </figure>
          <h3 className="text-center text-brown font-semibold sm:text-3xl mb-2">
            Every 20 Minutes in the Heat
          </h3>
        </div>
      );
    }
  }

  function addtionalWaterForActivity() {
    if (exerciseMinutes > 0) {
      let bottlesUsed = bottles
        .map((qty, index) => ({
          index,
          capacity: bottleStorage[index],
          qty,
          half: false,
        }))
        .filter((bottle) => bottle.qty > 0);

      if (bottlesUsed.length === 0) {
        return;
      }

      const randomBottle =
        bottlesUsed[Math.floor(Math.random() * bottlesUsed.length)];

      const fractionOfOz = 250 / randomBottle.capacity;

      return (
        <div className="flex justify-center items-center bg-lightbrown p-5 rounded-xl mx-2">
          <h3 className="text-center text-brown font-semibold sm:text-3xl mb-2">
            Consider Drinking an Extra
          </h3>
          <figure className=" p-3  flex justify-center">
            <BottleOutput
              key={randomBottle.index}
              image={allBottleData[randomBottle.index].image}
              quantity={parseFloat(fractionOfOz.toFixed(2))}
              className={allBottleData[randomBottle.index].style}
            />
          </figure>
          <h3 className="text-center text-brown font-semibold sm:text-3xl mb-2">
            Every 15 Minutes When Active
          </h3>
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
      <div className="flex justify-center my-14 flex-col ml-3">
        <div className="flex justify-center">
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-brown">
            You Need To Drink{"\u00A0"}
          </h1>
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-lightblue">
            {Math.max((dailyIntake() / 1000).toFixed(1), 0)}L
          </h1>
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-lightblue">
            {"\u00A0"}Daily
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-brown">
            You Have{"\u00A0"}
          </h1>
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-lightblue">
            {Math.max((remaining() / 1000).toFixed(1), 0)}L
          </h1>
          <h1 className="text-center font-bold sm:text-5xl text-2xl text-lightblue">
            {"\u00A0"}Left
          </h1>
        </div>
        <div className="flex flex-col justify-center mt-10 max-w-full">
          <div className="flex justify-center w-full">{totalWaterLeft()}</div>
          <div className="flex justify-center w-full mt-5">
            {addtionalWaterForTemp()}
          </div>
          <div className="flex justify-center w-full my-5">
            {addtionalWaterForActivity()}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-accent text-lg" onClick={handleRefresh}>
            Refresh Results
          </button>
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
  weight: PropTypes.number.isRequired,
  climate: PropTypes.string.isRequired,
  exerciseMinutes: PropTypes.number.isRequired,
  bottles: PropTypes.arrayOf(PropTypes.number).isRequired,
  weightUnit: PropTypes.string.isRequired,
  directInputUnit: PropTypes.string.isRequired,
  directInput: PropTypes.number.isRequired,
};

export default Results;
