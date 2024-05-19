import PropTypes from "prop-types";

const BottleOutput = ({ image, quantity, className }) => {
  return (
    <>
      <div className="flex flex-col justify-center mx-5 shrink-0 w-fit">
        <div className="flex justify-center">
          <img src={image} alt="Bottle" className={className} />
        </div>
        <div className="flex justify-center">
          <p>{quantity}</p>
        </div>
      </div>
    </>
  );
};

BottleOutput.propTypes = {
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default BottleOutput;
