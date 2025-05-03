// src/pages/VehicleManager.jsx
import React, { useEffect, useState, useContext } from 'react';
import ThemeContext from '../assets/ThemeContext.js';
import styles from '../../styles/components/VehicleManager.module.css'; // Adjust the path as needed
import { all_vehicle_info, makes_models_years } from '../../backend/carinfo.js'  

// Allows the vehicle to add, delete, and select vehicles
function VehicleManager() {
  const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);
  const [vehicles, setVehicles] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [makes, setMakes] = useState([])
  const [models, setModels] = useState([])
  const [years, setYears] = useState([])
  const [vehicleData, setVehicleData] = useState({
    make: '',
    model: '',
    year: ''
  })

  // on mount, set the makes. They do not change, unlike models & years
  useEffect(()=>{
    setMakes(Object.keys(makes_models_years));
  },[]);

  // loads vehicle list from user data
  useEffect(()=>{
    if (userData){
      if (Object.keys(userData).length){
        const vehicle_list = Object.keys(userData);
        let new_vehicle_list = [];
        for (const car of vehicle_list){
          const vehicle = car.split("_");
          new_vehicle_list.push({make: vehicle[0], model: vehicle[1], year: vehicle[2]});
        }
        setVehicles(new_vehicle_list);
      }
  }
  },[userData]);

  //save vehicle data. update model/year list as necessary
  const handleChange = (e) => {
    setVehicleData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === "make"){
      setModels(Object.keys(makes_models_years[e.target.value]));
      setVehicleData((old)=>({
        ...old,
        "model": "",
        "year": ""
      }));
    }
    if (e.target.name === "model"){
      setYears(makes_models_years[vehicleData.make][e.target.value]);
      setVehicleData((old)=>({
        ...old,
        "year": ""
      }));    
    }
  }

  // updates user data with new vehicle
  function addVehicle(){
    const key = `${vehicleData.make}_${vehicleData.model}_${vehicleData.year}`;
    let value = all_vehicle_info[key];

    value['mileage_log'] = {
      'mileage_entries': [],
      'total_mileage': 0
    };
    setUserData(data => ({
      ...data,
      [key] : value
    }));
  }

  // calls addVehicle, and adds vehicle to list of vehicles
  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle();
    const newVehicle = {...vehicleData}
    setVehicles((prevVehicles) => {
      const newVehicles = [...prevVehicles, newVehicle];
      return newVehicles;
    });
    if (!vehicleSelected) {
      setVehicleSelected(newVehicle);
    }
    setVehicleData({
      make: '',
      model: '',
      year: ''
    });
  };

  // update vehicle list, selected vehicle, & user data upon delete 
  const handleDelete = (index) => {
    const deletedVehicle = vehicles[index];
    const updatedVehicles = vehicles.filter((_, i) => i !== index);
    setVehicles(updatedVehicles);

    if (updatedVehicles.length){
      if (JSON.stringify(deletedVehicle) === JSON.stringify(vehicleSelected)){
        setVehicleSelected(updatedVehicles[0]);
      }
    }else{
      setVehicleSelected(null);
    }

    const vehicle_key = `${deletedVehicle.make}_${deletedVehicle.model}_${deletedVehicle.year}`;
    const new_userdata = JSON.parse(JSON.stringify(userData));
    delete new_userdata[vehicle_key];
    setUserData(new_userdata);

  };

  return (
    <div className={styles["vehicle-manager"]}>
      {!isExpanded ? (
        <div className={styles["collapsed-view"]} onClick={()=>{setIsExpanded(true)}}>
          {vehicleSelected ? (
            <div>
              {vehicleSelected.year} {vehicleSelected.make} {vehicleSelected.model}{' '}
            </div>
          ) : (
            <div>No vehicle selected. Click to manage vehicles.</div>
          )}
        </div>
      ) : (
        <div className= {styles["expanded-view"]}>
          <div className={styles.header}>
            <h3>Manage Vehicles</h3>
            <button onClick={() => setIsExpanded(false)}>Collapse</button>
          </div>

          <div className= {styles["vehicle-list"]}>
            <h4>Vehicles</h4>
            {vehicles.length > 0 ? (
              <ul>
                {vehicles.map((vehicle, index) => (
                  <li key={index}>
                    <span onClick={() => {setVehicleSelected(vehicle);setIsExpanded(false);}} className={styles["vehicle-item"]}>
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </span>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No vehicles added.</p>
            )}
          </div>

          <div className={styles["add-vehicle"]}>
            <h4>Add a Vehicle</h4>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Make: </label>
                <select name="make" value={vehicleData.make} onChange={handleChange} required>
                  <option value="">Select Make</option>
                  {makes.map((make, index) => (
                    <option key={index} value={make}>
                      {make}
                    </option>
                  ))}
                </select>

              </div>

              {vehicleData.make ? 
                <div>
                <label>Model: </label>
                <select name="model" value={vehicleData.model} onChange={handleChange} required>
                  <option value="">Select Model</option>
                  {models.map((model, index) => (
                    <option key={index} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
              : null
              }

              {vehicleData.model ? 
              <div>
                <label>Year: </label>
                <select name="year" value={vehicleData.year} onChange={handleChange} required>
                  <option value="">Select Year</option>
                  {years.map((year, index) => (
                    <option key={index} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div> 
              : null
              }
              <button type="submit">Add Vehicle</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default VehicleManager;
