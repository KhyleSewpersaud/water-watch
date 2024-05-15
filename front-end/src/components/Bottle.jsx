import PropTypes from "prop-types";
import { useState } from "react";

function Bottle(props) {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleInputChange = (e) => {
    setQuantity(parseInt(e.target.value) || 0); // Parse the input value to an integer or default to 0
  };

  return (
    <>
      <div className="flex flex-col justify-center mx-10 shrink-0 w-fit">
        <div className="flex justify-center">
          <button onClick={decrease} className="text-2xl font-semibold px-1">
            -
          </button>
          <img
            src={props.image}
            alt="Bottle"
            className={props.className}
          />
          <button onClick={increase} className="text-xl font-semibold px-1">
            +
          </button>
        </div>
        <div className="flex justify-center">
          <input
            value={quantity}
            onChange={handleInputChange}
            className="w-1/2 text-center bg-transparent"
          ></input>
        </div>
      </div>
    </>
  );
}

Bottle.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Bottle;
