import { useEffect, useState } from "react";
import styles from '../../styles/components/Expandable.module.css'

// Expandable components are found in the expandable portion of the Bar component
function Expandable({left, right, AIaccess}){

  return(
    <div style={{display:'flex', paddingInline:'30px',justifyContent:'space-between',position: 'relative'}}>
      <section>{left}</section>
      <button className={styles.askrobot} onClick={()=>{AIaccess[1](AIaccess[0])}}>Ask the robot</button>
      <section className={styles.colors}>
        {/* "Lights up" the appropriate div depending on the value of right */}
        <div className={`${styles.green} ${right < .33 ? styles.chosen : ""}`}></div>
        <div className={`${styles.orange} ${(right >= .33 && right < .8) ? styles.chosen : ""}`}></div>
        <div className={`${styles.red} ${right >= .8 ? styles.chosen : ""}`}></div>
      </section>
      <section className={styles.percentage}>
        {Math.floor(right * 100)}%
      </section>
    </div>
  );
}

export default Expandable;