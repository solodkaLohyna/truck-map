import React from 'react';
import './navbar.css'

export const Navbar = ({ trucks, handleTruckClick }) => {
  return (
    <nav>
      <ul>
        {trucks.map((truck, index) => (
          <li key={index} onClick={() => handleTruckClick(truck)}>
            <div>
              {truck.driver.avatar && <img src={truck.driver.avatar} alt="Driver Avatar" class="driver-image" />}
              {truck.driver.carImg && <img src={truck.driver.carImg} alt="Truck Image" class="truck-image" />}
              <h3>{truck.number}</h3>
              <p>truck: {truck.location.join(', ')}</p>
              <p>Load Capacity: {trucks.loadCapacity}</p>
              <p>Truck Length: {trucks.truckLength}</p>
              <p>Height: {trucks.height}</p>
              <p>Pin Name: {trucks.pinName}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// export default Navbar;
