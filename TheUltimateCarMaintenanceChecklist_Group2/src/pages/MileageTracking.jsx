import React, { useEffect, useState, useContext } from 'react';
import ThemeContext from '../assets/ThemeContext';
import styles from '../../styles/pages/MileageTracking.module.css';

// Mileage Tracking page. Allows user to add, delete, and edit mile entries.
function MileageTracking(props) {
  const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);
  const [mileageLog, setMileageLog] = useState([]);
  const [totalMileage, setTotalMileage] = useState(0);
  const [newMileage, setNewMileage] = useState(0);
  const [editingId, setEditingId] = useState(null);
  const [editingMileage, setEditingMileage] = useState('');

  // update mileagelog and total mileage when a new vehicle is selected
  useEffect(()=>{
    if (vehicleSelected && userData) {
      const vehicle_key = `${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`;
      console.log(userData)
      const stored_log = userData[vehicle_key]['mileage_log'];
      setMileageLog(stored_log['mileage_entries']);
      setTotalMileage(stored_log['total_mileage']);
    }
  },[vehicleSelected]);

  // update userdata when mileagelog or total mileage changes
  useEffect(()=>{
    if (vehicleSelected && userData){
      const vehicle_key = `${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`;
      setUserData((data)=>(
        {
          ...data,
          [vehicle_key] : {
            ...data[vehicle_key],
            'mileage_log' : {
              ...data[vehicle_key]['mileage_log'],
                'mileage_entries': mileageLog,
                'total_mileage': totalMileage
              }
            }
        }
      ))
    }
  },[mileageLog, totalMileage]);
  

  // add miles to all car parts (for service intervals page)
  function addMilesForIntervals(miles){
    const vehicle_key = `${vehicleSelected.make}_${vehicleSelected.model}_${vehicleSelected.year}`;
    const copy_userdata = JSON.parse(JSON.stringify(userData));
    for (const category of Object.keys(userData[vehicle_key])){
      if (category !== "mileage_log" && category !== "service_history")
        for (const part of Object.keys(userData[vehicle_key][category])){
          copy_userdata[vehicle_key][category][part][0] += miles;
      }
    }
    setUserData(copy_userdata);
  }

  // Enter new log entry
  const handleMileageUpdate = () => {
    if (!isNaN(newMileage) && newMileage !== "" ){
      if (newMileage > 0 && newMileage < 50000){
        const today = new Date().toLocaleDateString();
        const newEntry = { id: Date.now(), date: today, mileage: newMileage };
        const newLog = [...mileageLog, newEntry];
        setMileageLog(newLog);

        setNewMileage(0);
        setTotalMileage(totalMileage + newMileage);
        console.log(userData)
        addMilesForIntervals(newMileage);
      }
    }
  };

  // Remove a log entry
  const handleDelete = (id) => {
    let oldMileage;
    const newLog = mileageLog.filter((entry) => {
      oldMileage = entry.mileage;
      return entry.id !== id
    });
    setMileageLog(newLog);
    setTotalMileage(totalMileage - oldMileage);
    addMilesForIntervals(-oldMileage);
  };

  // upon edit, to identify what's being edited
  const handleEdit = (id, mileage) => {
    setEditingId(id);
    setEditingMileage(mileage);
  };

  // save edited entry
  const handleSaveEdit = (id) => {
    const editedMileage = parseInt(editingMileage, 10);
    if (isNaN(editedMileage)) {
      alert('Please enter a valid number.');
      return;
    }
    let oldMileage;
    const newLog = mileageLog.map((entry) => {
      if (entry.id === id) {
        oldMileage = entry.mileage;
        return { ...entry, mileage: editedMileage };
      }
      return entry;
    });
    setMileageLog(newLog);
    setTotalMileage((totalMileage - oldMileage) + editedMileage);
    addMilesForIntervals(-oldMileage + editedMileage);

    setEditingId(null);
    setEditingMileage('');
  };

  // calculates average miles driven weekly since oldest entry
  function getAvgMilesWeekly(){
    if (mileageLog.length){
      const firstEntryDate = new Date(mileageLog[0].date);
      const lastEntryDate = new Date(mileageLog[mileageLog.length - 1].date);
      const weeksDiff =
        (lastEntryDate.getFullYear() - firstEntryDate.getFullYear()) * 52 +
        (lastEntryDate.getMonth() - firstEntryDate.getMonth()) * 4 +
        ((lastEntryDate.getDay() - firstEntryDate.getDay()) / 7);
      return weeksDiff ? Math.floor(totalMileage / weeksDiff) : totalMileage;
    }
    return 0;
    
  }

  // Show default screen before selecting a vehicle
  if (!vehicleSelected) {
    return (
      <div className={styles["mileage-page"]}>
        <h1>Mileage Tracking</h1>
        <p>Please add/select a vehicle using the Vehicle Manager before tracking mileage.</p>
      </div>
    );
  }

  return (
    <div className={styles["mileage-page"]}>
      <h1>Mileage Tracking</h1>
      <div className={styles["vehicle-info"]}>
        <p>
          Vehicle: {vehicleSelected.year} {vehicleSelected.make} {vehicleSelected.model}
        </p>
        <h2>Total Mileage: {totalMileage}</h2>
      </div>

      <div className={styles["update-mileage"]}>
        <input
          type="number"
          placeholder="Enter new mileage"
          value={newMileage}
          onChange={(e)=>{e.target.value ? setNewMileage(parseInt(e.target.value,10)) : setNewMileage("")}}
        />
        <button onClick={handleMileageUpdate}>Update Mileage</button>
      </div>

      <div className={styles["log-section"]}>
        <h2>Mileage Log</h2>
        {/*FOR THE TABLE  (mapping entries using HTML table data elements)*/}
        {mileageLog.length > 0 ? (
          <table className={styles["mileage-table"]}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Mileage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {mileageLog.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>
                    {editingId === entry.id ? (
                      <input
                        type="number"
                        value={editingMileage}
                        onChange={(e) => setEditingMileage(e.target.value)}
                      />
                    ) : (
                      entry.mileage
                    )}
                  </td>
                  <td>
                    {editingId === entry.id ? (
                      <button onClick={() => handleSaveEdit(entry.id)}>Save</button>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(entry.id, entry.mileage)}>Edit</button>
                        <button onClick={() => handleDelete(entry.id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No mileage entries yet.</p>
        )}
        {/* TABLE code ends here */}
      </div>
      
      {/* statistics */}
      <div className={styles["statistics"]}>
        <h2>Statistics</h2>
        <p>Average Miles per Week: {getAvgMilesWeekly()}</p>
      </div>
    </div>
  );
}

export default MileageTracking;
