import {useState, useEffect} from "react";
import { useGeoLocation } from "./useGeoLocation";

const axios = require('axios');

const useApi = () =>{

  const {
    latitude,
    longitude,
  } = useGeoLocation(); 
  
  const [weather, setWeather] = useState(null);
  const [weatherMore, setWeatherMore] = useState(null);
  const [days, setDays] = useState(null);
  const [hours, setHours]= useState(null);
  const [allData, setAllData] = useState(null)
  const [loading, setLoading] = useState(true);
  
  


  //Llamado a la Api 
  useEffect(() => {

    //Configuracion de axios
    if(!!latitude){
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
  
      const CallToApi = async() =>{
        const {data} = await api(`onecall?lat=${latitude}&lon=${longitude}`);//lat=${latitude}&lon=${longitude}
  
          setAllData(data)
          setWeather(data.current)
          setDays(data.daily)
          setHours(data.hourly)
        
        console.log(data, 'callfirstApi')
      };
      
  
      const CallMoreInfoApi = async() =>{
        const {data} = await api(`forecast?lat=${latitude}&lon=${longitude}`); //lat=3.5628657092422573&lon=-73.79595019932982
  
        setWeatherMore(data)
        
        console.log(data, 'call more api')
        setLoading(false)
  
      };
      
      CallToApi().then(()=> {
        CallMoreInfoApi();
      });
    }

    //El comentario siguente a la matriz de dependencias deshabilita 
    //la regla para una sola línea.react-hooks/exhausting-deps 
    //Quitalo para mas información ó https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude])


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
    setWeatherMore,
    allData,
    setAllData
  };
};

export { useApi };