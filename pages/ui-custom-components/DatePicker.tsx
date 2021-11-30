import React from "react";
import TextField from "./TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";

export default function MuiDatePicker() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (value: any) => {
    setValue(value);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={["day", "month", "year"]}
          label="Select Date"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </>
  );
}
