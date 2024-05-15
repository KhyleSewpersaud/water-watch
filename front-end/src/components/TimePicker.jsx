import { useState } from "react";

function TimePicker() {
  const [hour, setHour] = useState("9");
  const [minute, setMinute] = useState("30");
  const [period, setPeriod] = useState("AM");

  const handleHourChange = (e) => {
    setHour(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setMinute(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="number"
        id="hour"
        min="1"
        max="12"
        value={hour}
        onChange={handleHourChange}
        className="input input-bordered w-1/4 max-w-xs text-lightblue font-bold text-7xl text-end border-0 h-fit bg-transparent"
      />
      <label className="font-semibold text-7xl mb-3">:</label>
      
      <input
        type="number"
        id="minute"
        min="0"
        max="59"
        value={minute}
        onChange={handleMinuteChange}
        className="input input-bordered w-1/4 max-w-xs text-lightblue font-bold text-7xl text-start border-0 h-fit bg-transparent"
      />

      <select
        id="period"
        value={period}
        onChange={handlePeriodChange}
        className="input input-bordered w-1/4 max-w-xs text-lightblue font-bold text-7xl text-start border-0 h-full bg-transparent"
      >
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
  );
}

export default TimePicker;
