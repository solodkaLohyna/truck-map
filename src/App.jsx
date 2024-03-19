import { Map } from './components/Map/map';
import trucks from '../trucks.json'
import { Navbar } from './components/Navbar/navbar';
import './App.css';

import { useState } from 'react'

function App() {
  const [selectedLocation, setSelectedLocation] = useState([])

  const handleTruckClick = (truck) => {
    setSelectedLocation(truck.location)
  }

  return(
    <div className="main">
      <Navbar trucks={trucks} handleTruckClick={handleTruckClick} />
      <Map locations={trucks.map(({ location }) => location)} selectedLocation={selectedLocation} />
    </div>
  )
}

export default App
