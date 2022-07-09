import React from 'react'

const  useGeoLocation = ()=> {

  // let locate = navigator.geolocation.getCurrentPosition;

  const [geoLoading, setGeoLoading] = React.useState(true);
  const [latitude, setLatitude] = React.useState(null);
  const [longitude, setLongitude] = React.useState(null);

  
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log(position.coords.latitude, position.coords.longitude);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      setGeoLoading(false);//Desactiva el estado de carga de geolocalizacion
    })


  return {
    geoLoading,
    setGeoLoading,
    latitude, 
    setLatitude,
    longitude,
    setLongitude,
  };
}

export {useGeoLocation}




