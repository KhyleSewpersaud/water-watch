import PropTypes from "prop-types";

function Bottle({
  index,
  image,
  quantity,
  handleBottleChange,
  className,
  info,
}) {
  const increase = () => {
    handleBottleChange(index, quantity + 0.25);
  };

  const decrease = () => {
    handleBottleChange(index, Math.max(0, quantity - 0.25));
  };

  const handleInputChange = (e) => {
    const newQuantity = parseFloat(e.target.value);
    if (!isNaN(newQuantity)) {
      handleBottleChange(index, newQuantity);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center mx-10 shrink-0 w-fit">
        <div className="flex justify-center relative group">
          <button onClick={decrease} className="text-2xl font-semibold px-1">
            -
          </button>
          <img src={image} alt="Bottle" className={className} />
          <button onClick={increase} className="text-xl font-semibold px-1">
            +
          </button>
          <div className="absolute bottom-0 left-0 hidden group-hover:block bg-gray-700 text-white text-sm p-2 rounded">
            {info}
          </div>
        </div>
        <div className="flex justify-center ml-3">
          <input
            type="number"
            step="0.01"
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
  index: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  handleBottleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  info: PropTypes.string,
};

export default Bottle;
