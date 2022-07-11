import React from 'react';

import './App.css';

import { useGeoLocation } from './useGeoLocation';
import { useApi } from './useApi'

import { CurrentWeather } from './components/CurrentWeather';
import { ListDays } from './components/ListDays';
import { ListHours } from './components/ListHours';
import { Map } from './components/Map';


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
    allData,
    setAllData

  } = useApi();

  const {
    latitude,
    longitude,
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

        allData={allData}
        setAllData={setAllData}

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
      {Map?<Map
        latitude={latitude}
        longitude={longitude}
      />: <p>loading..</p>}
    </div >
  );
}

export default App;
