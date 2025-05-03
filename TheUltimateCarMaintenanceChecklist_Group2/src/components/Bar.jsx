import { useState,useEffect,useRef } from 'react';
import styles from '../../styles/components/Bar.module.css'

// Bar component allows expandable entries for service intervals page
function Bar(props){
  const [status,setStatus] = useState(false);
  const elem = useRef(null);
  
  return(
      <>
        <div ref={elem} className={styles.bar} style={{height: status ? elem.current.scrollHeight+"px" : "60px"}} onClick={()=>{setStatus(!status);}}>
          <div className={styles.rowcontainer} style={{marginBottom:"20px", position: 'relative'}}>
            <div className= {styles.left}>
              {props.name}
            </div>
            <div className= {styles.right}>
                {props.date}
            </div>
            <div className={`${styles.arrow} ${status ? styles.rotate : ""}`}>&#9660;</div>
          </div>
          {props.children}
      </div>
    </>
  );
}


export default Bar;

