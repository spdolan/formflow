import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const defaultLabel = '';

export default function FormInputText(
  {
    name, control, label = defaultLabel, isRequired,
  }: { name: string, control: any, label?: string, isRequired?: boolean },
) {
  const fieldRules = isRequired ? {
    required: `${label} is required`, minLength: 1, maxLength: 20,
  } : {};
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label={label}
            required={isRequired}
            error={!!error}
            helperText={isRequired ? `required` : null}
          />
        )}
        rules={fieldRules}
      />
    </>
  );
}

FormInputText.defaultProps = {
  label: defaultLabel,
  isRequired: false,
};
