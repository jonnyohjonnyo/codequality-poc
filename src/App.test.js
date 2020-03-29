import React from 'react';
import { render } from '@testing-library/react';
import { Provider as ReduxProvider } from "react-redux";
import App from './App';
import configureStore from "./store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

test('renders learn react link', () => {
  const { getByText } = render(<ReduxProvider store={reduxStore}><App /></ReduxProvider>);
  const linkElement = getByText(/Make Sean Happy/i);
  expect(linkElement).toBeInTheDocument();
});
