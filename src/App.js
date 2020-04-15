import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './context/alert/alertState';
import { WeatherState } from './context/weather/WeatherState';

function App() {
  return (
    <WeatherState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path={'/'} exact component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </WeatherState>
  );
}

export default App;
