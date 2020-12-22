import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import { Layout } from './components/Layout';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <ErrorBoundary>
             <Layout />
          </ErrorBoundary>
    );
  }
}
