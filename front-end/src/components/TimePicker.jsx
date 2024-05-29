import PropTypes from 'prop-types';

function TimePicker(props) {
  const {
    minute,
    minuteChange,
    hour,
    hourChange,
    period,
    periodChange
  } = props;

  return (
    <div className="flex justify-center items-center">
      <input
        type="number"
        id="hour"
        min="1"
        max="12"
        value={hour}
        onChange={hourChange}
        className="input input-bordered sm:w-1/6 text-lightblue font-bold sm:text-7xl text-lg text-end border-0 h-fit bg-transparent"
      />
      <label className="font-semibold sm:text-7xl text-xl sm:mb-3 mb-1 text-lightblue">:</label>
      
      <input
        type="number"
        id="minute"
        min="0"
        max="59"
        value={minute}
        onChange={minuteChange}
        className="input input-bordered sm:w-1/6 text-lightblue font-bold sm:text-7xl text-xl text-start border-0 h-fit bg-transparent"
      />

      <select
        id="period"
        value={period}
        onChange={periodChange}
        className="input input-bordered text-lightblue font-bold sm:text-7xl text-xl text-start border-0 h-fit bg-transparent"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
}

TimePicker.propTypes = {
  minute: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  minuteChange: PropTypes.func.isRequired,
  hourChange: PropTypes.func.isRequired,
  periodChange: PropTypes.func.isRequired
}

export default TimePicker;
