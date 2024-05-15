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

function Intake() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div
          className="overflow-auto"
          style={{ maxWidth: "100%", width: "700px" }}
        >
          <div className="flex">
            <Bottle image={nalgene} className="w-32 h-auto" />
            <Bottle image={gatoradesquirt} className="w-32 h-auto" />
            <Bottle image={starbuckscup} className="w-40 h-auto" />
            <Bottle image={gallon} className="w-20 h-auto" />
            <Bottle image={hydroflask} className="w-12 h-auto" />
            <Bottle image={lululemon} className="w-36 h-auto" />
            <Bottle image={stanley} className="w-40 h-auto" />
            <Bottle image={yetitumbler} className="w-40 h-auto" />
          </div>
        </div>
        <div
          className="overflow-auto"
          style={{ maxWidth: "100%", width: "700px" }}
        >
          <div className="flex">
            <Bottle image={nalgene} className="w-32 h-auto" />
            <Bottle image={gatoradesquirt} className="w-32 h-auto" />
            <Bottle image={starbuckscup} className="w-40 h-auto" />
            <Bottle image={gallon} className="w-20 h-auto" />
            <Bottle image={hydroflask} className="w-12 h-auto" />
            <Bottle image={lululemon} className="w-36 h-auto" />
            <Bottle image={stanley} className="w-40 h-auto" />
            <Bottle image={yetitumbler} className="w-40 h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intake;
