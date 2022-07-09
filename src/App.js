import React from 'react';

import { useGeoLocation } from './useGeoLocation';
import { useApi } from './useApi'

import { CurrentWeather } from './components/CurrentWeather';
import { ListDays } from './components/ListDays';
import { ListHours } from './components/ListHours';
import './App.css';

function App() {
  const {
    weather,
    setWeather,
    days,
    setDays,
    hours,
    setHours,
    loading,
    setLoading,
    weatherMore,
    setWeatherMore,

  } = useApi();

  const {
    geoLoading,
  } = useGeoLocation();

  if(loading || geoLoading){
    return <p>loading...</p>
  }

  return (
    <div className="App">
      <CurrentWeather
        weather={weather}
        setWeather={setWeather}

        weatherMore={weatherMore}
        setWeatherMore={setWeatherMore}

        loading={loading}
        setLoading={setLoading}
      />
      <ListHours
        
        hours={hours}
        setHours={setHours}
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
