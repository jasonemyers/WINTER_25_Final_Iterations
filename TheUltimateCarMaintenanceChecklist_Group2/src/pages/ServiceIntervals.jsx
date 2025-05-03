import React, { useEffect,useContext, useState } from 'react';
import ThemeContext from '../assets/ThemeContext.js';

import Bar from '../components/Bar'
import Expandable from '../components/Expandable.jsx';
import styles from '../../styles/pages/ServiceIntervals.module.css';
import { useNavigate } from 'react-router-dom';

// Service Intervals page. Allow user to view how many miles they have before they need a replacement, inspection, refill, or other for a specific type of maintenance
function ServiceIntervals(props) {
  const [vehicleSelected, setVehicleSelected, userData, setUserData, activate, setActivate] = useContext(ThemeContext);
  const [vehicleInfo,setVehicleInfo] = useState(null);
  const navigate = useNavigate();

  
  // store vehicle info once a vehicle's beeen selected
  useEffect(()=>{
    if (vehicleSelected){
      setVehicleInfo(userData[`${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`])
    }
  },[vehicleSelected])

  function callAI(concept){
    setActivate("Explain " + concept);
    navigate('/AskForHelp');
  }

  return (
    <div>
      <section className={styles.intro}>
          <h3>
            Service Intervals
          </h3>
        Find out what needs to be changed, refilled, repaired, replaced, and more!
      </section>
      {vehicleInfo ? 
      <div>
        {/* This page may appear confusing, but the "right" prop is simply: miles_driven_since_last_service / recommended_miles_until_service */}
        <Bar name= 'Fluids'>
          <div className={styles.inside}>
            <Expandable left="Engine Oil" right={vehicleInfo['fluids']['engine_oil'][0] / vehicleInfo['fluids']['engine_oil'][1]} AIaccess={["engine oil",callAI]}/>
            <Expandable left="Transmission fluid" right={vehicleInfo['fluids']['transmission_fluid'][0] / vehicleInfo['fluids']['transmission_fluid'][1]} AIaccess={["transmission fluid",callAI]} />
            <Expandable left="Brake fluid" right={vehicleInfo['fluids']['brake_fluid'][0] / vehicleInfo['fluids']['brake_fluid'][1]} AIaccess={["brake fluid",callAI]}/>
            <Expandable left="Coolant" right={vehicleInfo['fluids']['coolant'][0] / vehicleInfo['fluids']['coolant'][1]} AIaccess={["coolant",callAI]}/>
            <Expandable left="Power Steering fluid" right={vehicleInfo['fluids']['powersteering_fluid'][0] / vehicleInfo['fluids']['powersteering_fluid'][1]} AIaccess={["power steering fluid",callAI]}/>
          </div>
        </Bar>
        <Bar name= 'Tires & Brakes'>
          <div className={styles.inside}>
            <Expandable left="Tire Pressure" right={vehicleInfo['tires_brakes']['tire_pressure'][0] / vehicleInfo['tires_brakes']['tire_pressure'][1]} AIaccess={["tire pressure",callAI]}/>
            <Expandable left="Rotate Tires" right={vehicleInfo['tires_brakes']['rotate_tires'][0] / vehicleInfo['tires_brakes']['rotate_tires'][1]} AIaccess={["why we rotate tires in vehicles",callAI]}/>
            <Expandable left="Brake Pads" right={vehicleInfo['tires_brakes']['brake_pads'][0] / vehicleInfo['tires_brakes']['brake_pads'][1]} AIaccess={["brake pads",callAI]}/>
            <Expandable left="Brake Discs (Rotors)" right={vehicleInfo['tires_brakes']['brake_discs'][0] / vehicleInfo['tires_brakes']['brake_discs'][1]} AIaccess={["brake discs/rotors",callAI]}/>
          </div>
        </Bar>
        <Bar name= 'Engine'>
          <div className={styles.inside}>
            <Expandable left="Oil Filter" right={vehicleInfo['engine']['oil_filter'][0] / vehicleInfo['engine']['oil_filter'][1]} AIaccess={["oil filters",callAI]}/>
            <Expandable left="Air Filter" right={vehicleInfo['engine']['air_filter'][0] / vehicleInfo['engine']['air_filter'][1]} AIaccess={["air filters",callAI]}/>
            <Expandable left="Fuel Filter" right={vehicleInfo['engine']['fuel_filter'][0] / vehicleInfo['engine']['fuel_filter'][1]} AIaccess={["fuel filters",callAI]}/>
            <Expandable left="Timing Belt / Chain" right={ vehicleInfo['engine']['timing_belt'][0] / vehicleInfo['engine']['timing_belt'][1]} AIaccess={["the timing belt/chain",callAI]}/>
            <Expandable left="Spark Plugs" right={vehicleInfo['engine']['spark_plugs'][0] / vehicleInfo['engine']['spark_plugs'][1]} AIaccess={["spark plugs",callAI]}/>
          </div>
        </Bar>
        <Bar name= 'Battery & Electrical'>
          <div className={styles.inside}>
            <Expandable left="Battery" right={vehicleInfo['battery_electrical']['battery'][0] / vehicleInfo['battery_electrical']['battery'][1]} AIaccess={["a car battery",callAI]}/>
            <Expandable left="Replace Headlights" right={vehicleInfo['battery_electrical']['replace_headlights'][0] / vehicleInfo['battery_electrical']['replace_headlights'][1]} AIaccess={["why we replace headlights in vehicles",callAI]}/>
          </div>
        </Bar>
        <Bar name= 'Exterior'>
          <div className={styles.inside}>
            <Expandable left="Wiper Blades" right={vehicleInfo['exterior']['wiper_blades'][0] / vehicleInfo['exterior']['wiper_blades'][1]} AIaccess={["wiper blades in vehicles",callAI]}/>
            <Expandable left="Clean Outside" right={vehicleInfo['exterior']['detailing'][0] / vehicleInfo['exterior']['detailing'][1]} AIaccess={["why we regularly clean the outside of our vehicles",callAI]}/>
          </div>
        </Bar>
      </div>
     : null}
    </div>
  );
}

export default ServiceIntervals;
