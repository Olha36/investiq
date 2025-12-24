import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import dayjs from "dayjs";
import { Box, Typography, IconButton } from "@mui/material";

export default function DatePickerCalendar()  {
  const [value, setValue] = useState(dayjs());
  const [open, setOpen] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => {
          if (newValue !== null) {
            setValue(newValue);
          }
        }}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        slots={{
          field: () => null,
        }}
      />

      <Box
        onClick={() => setOpen(true)}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
      >
        <IconButton size="small">
          <CalendarMonthIcon />
        </IconButton>

        <Typography fontWeight={600}>{value.format("DD.MM.YYYY")}</Typography>
      </Box>
    </LocalizationProvider>
  );
}
