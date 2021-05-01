/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerInput.scss';

interface Props {
  label: string;
  selected: Date | null;
  minDate?: Date | null;
  maxDate?: Date | null;
  onChange: (date: Date) => void;
  isError?: boolean;
}

const DatePickerInput: React.FC<Props> = ({
  label,
  selected,
  minDate,
  maxDate,
  onChange,
  isError,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col items-start relative datepicker-input">
      <div
        className={`form-item w-full ${isCalendarOpen ? 'focus' : ''} ${
          selected ? 'active' : ''
        }`}
      >
        <DatePicker
          selected={selected}
          minDate={minDate}
          maxDate={maxDate}
          onChange={(date: Date) => onChange(date)}
          onCalendarOpen={() => setIsCalendarOpen(true)}
          onCalendarClose={() => setIsCalendarOpen(false)}
        />
        <label
          className={isError ? 'text-red-500' : 'text-gray-500'}
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default DatePickerInput;
