import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders Enter User Info', () => {
  mount(<App />);
  cy.get('body').contains('Enter User Info');
});
