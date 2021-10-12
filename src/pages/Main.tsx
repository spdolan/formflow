import React, { useState, useEffect } from 'react';
import {
  AppBar, Box, Container,
  CssBaseline, Toolbar, Paper, Stepper, Step, StepLabel, Button, Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { UserInfo } from '../types';
import AgeForm from '../components/AgeForm';
import NameForm from '../components/NameForm';
import Review from '../components/Review/Review';
import Copyright from '../components/Copyright';

import logger from '../utils/logger';

const steps = ['Enter Birth Date', 'Enter Name', 'Review your info'];
const now = new Date();
const defaultUserInfo: UserInfo = {
  firstName: '',
  lastName: '',
  name: null,
  birthDate: null,
  createdAt: now,
  updatedAt: now,
};

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const {
    reset, control, watch, formState: { errors }, getValues,
  } = useForm({ defaultValues: defaultUserInfo });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  watch('birthDate');
  watch('firstName');

  useEffect(() => {
    logger.debug('updated user info: ', getValues('birthDate'));
  }, [errors, getValues]);

  const stepContent: {[x: number]: any} = {
    0: <AgeForm control={control} />,
    1: <NameForm control={control} />,
    2: <Review rows={[getValues()]} />,
  };

  const isFormValid = () => {
    const isDatePicked = !getValues('birthDate');
    const isNamePresent = !getValues('firstName');
    const isValid: {[x: number]: boolean} = {
      0: isDatePicked,
      1: isNamePresent,
    };
    return isValid[activeStep];
  };

  const handleReset = () => {
    reset();
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Customer Company
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Enter User Info
          </Typography>
          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <p>{message}</p>}
          />
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for adding your information!
                </Typography>
                <Typography variant="subtitle1">
                  Your information has not been saved -
                </Typography>
                <Typography variant="subtitle1">
                  Click below to clear form and return to start.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', '& > :not(style)': { m: 1, width: '25ch' } }}>
                  <Button onClick={handleReset} variant="outlined">Reset</Button>
                </Box>
              </>
            ) : (
              <>
                {stepContent[activeStep]}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', '& > :not(style)': { m: 1, width: '25ch' } }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={isFormValid()}
                  >
                    {activeStep === steps.length - 1 ? 'Submit info' : 'Next'}
                  </Button>

                </Box>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
