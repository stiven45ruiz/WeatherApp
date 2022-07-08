import React, {useState, useEffect} from "react";

const axios = require('axios');

const useApi = () =>{
  const [weather, setWeather] = useState(null);
  const [weatherMore, setWeatherMore] = useState(null);
  const [days, setDays] = useState(null);
  const [hours, setHours]= useState(null);
  const [loading, setLoading] = useState(true);
  
  
  //Configuracion de axios
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


  //Llamado a la Api 
  useEffect(() => {
    const CallToApi = async() =>{
      const {data} = await api(`onecall?lat=3.5628657092422573&lon=-73.79595019932982`);

        setWeather(data.current)
        setDays(data.daily)
        setHours(data.hourly)
      
      console.log(data, 'callfirstApi')
    };
    

    const CallMoreInfoApi = async() =>{
      const {data} = await api(`forecast?lat=3.5628657092422573&lon=-73.79595019932982`);

      setWeatherMore(data)
      
      console.log(data, 'call more api')
      setLoading(false)

    };
    
    CallToApi().then(()=> {
      CallMoreInfoApi();
    });


  }, [])


  // if(loading){
  //   return <p>Loading ...</p>
  // };

  return{
    weather,
    setWeather,
    days,
    setDays,
    hours,
    setHours,
    loading,
    setLoading,
    weatherMore, 
    setWeatherMore
  };
};

export { useApi };