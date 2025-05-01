import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function CustomDatepicker({ date, onChange, deco, devDeco }) {
  return (
    <div className={`relative ${devDeco}`}>
      <ReactDatePicker
        className={deco}
        selected={date}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100} // optional: number of years to show
      />
      <FontAwesomeIcon
        className="absolute  top-1/2 right-2 -translate-y-1/2 text-primary pointer-events-none"
        icon="fa-solid fa-calendar-days"
      />
    </div>
  );
}
