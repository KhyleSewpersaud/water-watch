import PropTypes from 'prop-types'

const EditBottle = ({capacity, handleCapacity, unit, handleUnit, file, handleFileChange}) => {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-lightblue sm:text-2xl text-lg font-semibold mb-3">
        Your Custom Bottle
      </h2>
      <div className="border-2 border-brown rounded p-2">
        <div className="flex flex-col justify-center items-center">
          {file && (
            <img
              alt="Custom Water Bottle"
              src={file}
              className="w-32 h-auto mb-2"
              style={{ maxWidth: "100%" }}
            />
          )}
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleFileChange}
            multiple
            style={{ display: "none" }}
          />
          <label
            htmlFor="file-input"
            className="cursor-pointer btn btn-primary"
          >
            Choose Image
          </label>
        </div>
        <div className="flex justify-center mt-2">
          <p>Enter Bottle Capacity</p>
        </div>
        <div className="flex justify-center mb-2">
          <input
            className="bg-transparent border-2 border-brown rounded text-center text-xl font-semibold w-1/2"
            type="number"
            value={capacity}
            onChange={handleCapacity}
          />
          <select
            className="bg-transparent border-2 border-brown rounded text-center text-xl font-semibold"
            value={unit}
            onChange={handleUnit}
          >
            <option value="ml">ml</option>
            <option value="oz">oz</option>
          </select>
        </div>
      </div>
    </div>
  </>
  )
}

EditBottle.propTypes = {
  capacity: PropTypes.number.isRequired,
  handleCapacity: PropTypes.func.isRequired,
  unit: PropTypes.string.isRequired,
  handleUnit: PropTypes.func.isRequired,
  file: PropTypes.string,
  handleFileChange: PropTypes.func.isRequired,
};

export default EditBottle