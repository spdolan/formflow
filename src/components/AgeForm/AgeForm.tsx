import React from 'react';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/lab';

export default function BasicDatePicker(
  { control }: {control: any},
) {
  return (
    <>
      <Controller
        name="birthDate"
        control={control}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Please enter birth date"
              value={value}
              onChange={onChange}
              // eslint-disable-next-line react/jsx-props-no-spreading
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
}
