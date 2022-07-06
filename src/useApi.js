import React, {useState, useEffect} from "react";

const axios = require('axios');

const useApi = () =>{
  const [weather, setWeather] = useState(null)
  const [days, setDays] = useState(null)
  const [loading, setLoading] = useState(true)

  

  const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    params:{
        'appid': process.env.REACT_APP_API_KEY,
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
    setLoading
  };
};

export { useApi };