import React from 'react';
import FormInputText from '../Forms/FormInputText';

export default function NameForm({ control }: { control: any }) {
  return (
    <>
      <FormInputText
        name="firstName"
        control={control}
        label="First Name"
        isRequired
      />
      <FormInputText
        name="lastName"
        control={control}
        label="Last Name"
      />
    </>
  );
}
