import React from 'react';
import { Typography, Link } from '@mui/material';

const defaultSource = 'https://spdolan.github.io/formflow';
export default function Copyright({ src = defaultSource }: {src?: string}) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href={src}>
        Customer Website
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

Copyright.defaultProps = {
  src: defaultSource,
};
