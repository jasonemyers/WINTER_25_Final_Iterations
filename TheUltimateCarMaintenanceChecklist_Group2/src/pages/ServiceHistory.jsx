import React, { useRef, useState, useEffect, useContext } from 'react';
import styles from '../../styles/pages/ServiceHistory.module.css'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import e from 'cors';
import ThemeContext from '../assets/ThemeContext';
import { data } from 'react-router-dom';

// Service History page. Allows user to keep track of service history and edd entries.
function ServiceHistory() {
  const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);

  const [services,setServices] = useState([]);
  const [entries,setEntries] = useState([]);

  const [addEntry,setAddEntry] = useState(false);
  const [inputMessage,setInputMessage] = useState("");

  const [input, setInput] = useState("");
  const [selectedTarget, setSelectedTarget] = useState("");
  const [allowCustomInput, setAllowCustomInput] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [functionalChanges, setFunctionalChanges] = useState([]);

  const targeted_services = [
    ['engine_oil', 'Engine Oil Change'],
    ['transmission_fluid', 'Transmission Fluid Check'],
    ['brake_fluid', 'Brake Fluid Check'],
    ['coolant', 'Coolant System Check'],
    ['powersteering_fluid', 'Power Steering Fluid Check'],
    ['tire_pressure', 'Tire Pressure Inspection'],
    ['rotate_tires', 'Tire Rotation'],
    ['brake_pads', 'Brake Pads Replacement'],
    ['brake_discs', 'Brake Discs Inspection'],
    ['oil_filter', 'Oil Filter Replacement'],
    ['air_filter', 'Air Filter Replacement'],
    ['fuel_filter', 'Fuel Filter Replacement'],
    ['timing_belt', 'Timing Belt Replacement'],
    ['spark_plugs', 'Spark Plugs Replacement'],
    ['battery', 'Battery Inspection'],
    ['replace_headlights', 'Headlight Replacement'],
    ['wiper_blades', 'Wiper Blades Replacement'],
    ['detailing', 'Complete Car Detailing'],
  ];

  //load entries from userData when a vehicle is selected
  useEffect(()=>{
    if (vehicleSelected){
      const key = `${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`
      setEntries(userData[key]['service_history']);
    }
  },[vehicleSelected])

  // gives userData new service entries list
  // restarts "miles until service" to 0 (on service intervals page) for all in "functionalChanges"
  function updateUserData(entry){
    const key = `${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`
    const copyofUserData = JSON.parse(JSON.stringify(userData));

    for (const change of functionalChanges){
      let category;
      for (const part_category of Object.keys(userData[key])){
        if (Object.keys(userData[key][part_category]).includes(change)){
          category = part_category;
          break;
        }
      }
      copyofUserData[key][category][change][0] = 0;
    }
    copyofUserData[key]['service_history'] = [...entries,entry];
    setUserData(copyofUserData);
  }

  // Add service entry when user presses enter for custom input
  function handleKey(e){
    if (e.key === 'Enter'){
      setServices(prev => [...prev, input]);

      setInputMessage("Enter a service done, or select targeted service: ");
      setAllowCustomInput(services.length != 0);
      setInput("")
      e.target.value = ""
    }
  }
  
  //add service entry when user presses enter for selection
  function handleDropdownKeyPress(e){
    if (e.target.value !== "other" && e.target.value !== "" && e.key === "Enter" ){
      setServices(prev => [...prev, selectedTarget]);
      
      const value = e.target.value;
      setFunctionalChanges(prev => [...prev, value]);
      e.target.value = "";
    }
  }

  //store selection in dropdown menu & allow custom input if "other" selected 
  function handleDropdown(e){
    e.preventDefault();
    setAllowCustomInput((e.target.value === "other"));
    setSelectedTarget(e.target.options[e.target.selectedIndex].text);
  }
    
  // the submitted entry is added to the list of service entries
  function makeEntry(event){
    if (!services.length){
      return;
    }
    const entry = {
      'date': startDate.toLocaleDateString(),
      'services': services
    };

    setEntries(prev => [...prev, entry]);
    setAddEntry(false);

    setServices([]);
    setAllowCustomInput(true)
    setFunctionalChanges([]);

    updateUserData(entry);
  }

  // start creating an entry
  function handleClick(){
    setAddEntry(true);
    setInputMessage("Name of Service Provider?");
  }



  return (
    <div className={styles.columncontainer}>
      <section className={styles.intro}>
        <h3>
          Service History
        </h3>
        Enter services you've had done to update our records of your vehicle and<br/>
        view service history! <br />
        {(addEntry || !vehicleSelected) ? <></> : <button style={{padding:'5px 20px 5px 20px'}} onClick={handleClick}>New Entry?</button>}
      </section>

      {/* Begin creating entry once button is clicked  */}
      {addEntry ?
      <section className={styles.createentry}>
        {/* Choose Date */}
        <DatePicker 
          selected={startDate} 
          onChange={(date) => setStartDate(date)} 
        />
        {/* List services entered so far */}
        {services.map((item, index)=>{
          return(
            (index == 0 ?
            <div key={index} style={{fontSize:'1.5em'}}>{item}</div>
            : 
            <div key={index}>{item}</div>)
            )
        })}

        {inputMessage} 
        {/* Input field & dropdown menu */}
        {allowCustomInput ? <input type="text" placeholder="entry" onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey}/> : null}
        {services.length ? 
        <select onChange={handleDropdown} onKeyDown={handleDropdownKeyPress}style={{height:'40px'}}>
          <option value="">Targeted Service</option>
          {targeted_services.map((choice,index)=>{
            return ((functionalChanges.includes(choice[0]) ? null : <option key={index} value={choice[0]}>{choice[1]}</option>))
          })}
          <option value="other">Other...</option>

        </select>
        : null}
        <button className={styles.submitbutton} onClick={makeEntry}>Create Entry</button>
      </section>
      : false}

      {/* displays all previous entries if a vehicle's selected*/}
      {vehicleSelected ? (
        entries.map((item, index) => {
          return(
          <section key={index} className={styles.service}>
            <span className={styles.date}>{item['date']}</span>
            {item['services'].map((service,index2)=>{
              return(
                (index2 == 0 ?
                <div key={index2} style={{fontSize:'1.5em'}}>{service}</div>
                : 
                <div key={index2}>{service}</div>)
                )
            })}
          </section>
          )
        })) : null
      }

    </div>
  );
}

export default ServiceHistory;
