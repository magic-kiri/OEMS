import React from "react";
import { TimePicker as AntdTimePicker, TimePicker } from "antd";
import moment from "moment";

type TimePickerProps = React.ComponentProps<typeof AntdTimePicker> & {};

function onChange(time: any, timeString: any) {
  console.log(time, timeString);
}

const DatePicker = (props: TimePickerProps) => {
  return (
    <AntdTimePicker
      onChange={onChange}
      defaultOpenValue={moment("00:00", "HH:mm")}
      {...props}
    />
  );
};
export default DatePicker;

export const RangePicker = TimePicker.RangePicker;
