import PropTypes from "prop-types";

function Bottle({ index, image, quantity, handleBottleChange, className }) {
  const increase = () => {
    handleBottleChange(index, quantity + 1);
  };

  const decrease = () => {
    handleBottleChange(index, Math.max(0, quantity - 1));
  };

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      handleBottleChange(index, newQuantity);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center mx-10 shrink-0 w-fit">
        <div className="flex justify-center">
          <button onClick={decrease} className="text-2xl font-semibold px-1">
            -
          </button>
          <img src={image} alt="Bottle" className={className} />
          <button onClick={increase} className="text-xl font-semibold px-1">
            +
          </button>
        </div>
        <div className="flex justify-center">
          <input
            type="number"
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
};

export default Bottle;
