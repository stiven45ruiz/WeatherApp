import React, {useState, useEffect} from "react";

const axios = require('axios');

const useApi = () =>{
  const [weather, setWeather] = useState(null)
  const [weatherMore, setWeatherMore] = useState(null)
  const [days, setDays] = useState(null)
  const [loading, setLoading] = useState(true)

  

  const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params:{
        'appid': process.env.REACT_APP_API_KEY,
        'units': 'metric',
    },
  });

  useEffect(() => {
    const CallToApi = async() =>{
      const {data} = await api(`onecall?lat=3.5628657092422573&lon=-73.79595019932982`);
      try {
        setWeather(data.current)
        setDays(data.daily)
      } catch (error) {
        setLoading(true)
        console.log(error)
      }
      console.log(data)
      setLoading(false)
    };
    CallToApi();

    const CallMoreInfoApi = async() =>{
      const {data} = await api(`forecast?lat=3.5628657092422573&lon=-73.79595019932982`);
      try {
        setWeatherMore(data)
      } catch (error) {
        setLoading(true)
        console.log(error)
      }
      console.log(data, 'call more api')
      setLoading(false)
    };
    CallMoreInfoApi();
  }, [])


  // if(loading){
  //   return <p>Loading ...</p>
  // };

  return{
    weather,
    setWeather,
    days,
    setDays,
    loading,
    setLoading,
    weatherMore, 
    setWeatherMore
  };
};

export { useApi };