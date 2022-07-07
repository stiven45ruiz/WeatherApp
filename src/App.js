import { CurrentWeather } from './components/CurrentWeather';
import { ListDays } from './components/ListDays';
import './App.css';

import {useApi} from './useApi'
import React from 'react';

function App() {
  const {
    weather,
    setWeather,
    days,
    setDays,
    loading,
    setLoading,
    weatherMore,
    setWeatherMore,

  } = useApi();

  if(loading){
    return <p>loading...</p>
  }

  return (
    <div className="App">
      <p>Hola soy app</p>
      <CurrentWeather
        weather={weather}
        setWeather={setWeather}

        weatherMore={weatherMore}
        setWeatherMore={setWeatherMore}

        loading={loading}
        setLoading={setLoading}
      />
      <ListDays
        days={days}
        setDays={setDays}

        loading={loading}
        setLoading={setLoading}
      />
    </div >
  );
}

export default App;
