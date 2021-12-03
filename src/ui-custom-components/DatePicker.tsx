import React from "react";
import { DatePicker as AntdDatePicker } from "antd";

type DatePickerProps = React.ComponentProps<typeof AntdDatePicker> & {};

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const TimePicker = ({ ...props }: DatePickerProps) => {
  return <AntdDatePicker {...props} onChange={onChange}></AntdDatePicker>;
};
export default TimePicker;
