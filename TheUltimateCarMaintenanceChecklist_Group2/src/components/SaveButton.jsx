import React, { useEffect } from 'react';

import { useState, useContext } from 'react';
import { modifyUser, showEntries } from '../../backend/requests';
import ThemeContext from '../assets/ThemeContext';

//saves user's data to the backend
function SaveButton(props) {
  const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);
  const [enter,setEnter] = useState(false);
  const [leave,setLeave] = useState(false);

  //when user clicks save, button is removed and backend updates with new userdata
  async function handleClick(){
    props.setsaveinfo(false);
    await modifyUser(props.username,userData);
    await showEntries();
  }
  
  return (
    <div 
    style={{
      position: 'fixed',
      left: '20px',
      top: '80px',
      border: '4px dotted',
      padding: '40px',
      fontSize:'3.5em',
      fontWeight: 'bolder',
      borderRadius: '10px',
      color: enter ? 'navy' : 'white',
      backgroundColor: enter ? 'beige' : 'navy',
      cursor: 'pointer',
      zIndex: 3000,

    }} 
    onClick={handleClick}
    onMouseEnter={()=>{setEnter(true); setLeave(false);}}
    onMouseLeave={()=>{setEnter(false); setLeave(true);}}
    >
      Save
    </div>
  );
}

export default SaveButton;
