import React from 'react'

import '../../leaflet/leaflet.css'
import './Map.css'
import {
  MapContainer,
  TileLayer,
  Marker
} from 'react-leaflet';

const Map = (props) => {
  console.log(props)
  //props.latitude, props.longitude

  return (
    <MapContainer
      className="container"
      center={[props.latitude, props.longitude]} 
      zoom={13}
      scrollWheelZoom={false}
      >
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.latitude, props.longitude]}>
        
      </Marker>
    </MapContainer>
  )
}

export {Map}
