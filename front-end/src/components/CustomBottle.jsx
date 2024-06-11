import { useState } from "react";
import EditBottle from "./EditBottle";
import Bottle from "./Bottle";
import PropTypes from 'prop-types';

const CustomBottle = ({
  bottles,
  handleBottleChange,
  capacity,
  handleCapacityChange,
  unit,
  handleUnitChange,
  file,
  handleFileChange,
}) => {
  const [view, editView] = useState("edit");

  const toggleView = () => {
    editView(view === "edit" ? "add" : "edit");
  };

  let info;

  if (unit === "ml") {
    const oz = Math.round((capacity / 29.57) * 10) / 10
    info = `ml: ${capacity} | oz: ${oz}`
  } 
  else {
    const ml = Math.round(capacity * 29.57) 
    info = `ml: ${ml} | oz: ${capacity}`
  }

  const renderContent = () => {
    switch (view) {
      case "add":
        return (
          <Bottle
            key={18}
            index={18}
            image={file}
            quantity={bottles[18]}
            handleBottleChange={handleBottleChange}
            className="w-32 h-auto"
            info={info}
          />
        );
      case "edit":
        bottles[18] = 0
        return (
          <EditBottle
            capacity={capacity}
            handleCapacity={handleCapacityChange}
            unit={unit}
            handleUnit={handleUnitChange}
            file={file}
            handleFileChange={handleFileChange}
          />
        );
    }
  };

  return (
    <>
      <div className="flex flex-col">
        {renderContent()}
        <div className="flex justify-center my-2">
          <button className="btn btn-error" value={view} onClick={toggleView}>
            {view === "edit" ? "Add" : "Edit"}
          </button>
        </div>
      </div>
    </>
  );
};

CustomBottle.propTypes = {
  bottles: PropTypes.array.isRequired,
  handleBottleChange: PropTypes.func.isRequired,
  capacity: PropTypes.number.isRequired,
  handleCapacityChange: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  handleUnitChange: PropTypes.func.isRequired,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleFileChange: PropTypes.func.isRequired,
};

export default CustomBottle;
