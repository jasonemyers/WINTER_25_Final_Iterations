import { checkUser } from '../../backend/requests';
import {useRef,useState,useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeContext from '../assets/ThemeContext';
import styles from '../../styles/pages/SignIn.module.css'


function SignIn(props){
    const navigate = useNavigate();
    const [vehicleSelected, setVehicleSelected, userData, setUserData] = useContext(ThemeContext);
    const [user,setUser] = useState("");
    const [pass,setPass] = useState("");
    const [loginMessage,setLoginMessage] = useState("");
    const [userErrorMessage, setUserErrorMessage] = useState("");
    const [passErrorMessage, setPassErrorMessage] = useState("");

    
    //NO SPECIAL CHARACTER CHECKING
    useEffect(()=>{
      const userLower = user.toLowerCase();
      const passLower = pass.toLowerCase();
      let userSpecialCharacters = false;
      let passSpecialCharacters = false;
      for (let i = 0; i < user.length;i++){
        //allows ! or space, 
        if ((userLower.charCodeAt(i) < 48  && userLower.charCodeAt(i) != 32 && userLower.charCodeAt(i) != 33) || (userLower.charCodeAt(i) > 57 && userLower.charCodeAt(i) < 97) || (userLower.charCodeAt(i) > 122)){
          userSpecialCharacters = true;
        }
      }
      for (let i = 0; i < pass.length;i++){
        //allows ! or space, 
        if ((passLower.charCodeAt(i) < 48  && passLower.charCodeAt(i) != 32 && passLower.charCodeAt(i) != 33) || (passLower.charCodeAt(i) > 57 && passLower.charCodeAt(i) < 97) || (passLower.charCodeAt(i) > 122)){
          passSpecialCharacters = true;
        }
      }
      if (userSpecialCharacters){
        setUserErrorMessage("No special characters allowed!");
      }else{
        setUserErrorMessage("");
      }
      if (passSpecialCharacters){
        setPassErrorMessage("No special characters allowed!");
      }else{
        setPassErrorMessage("");
      }
    },[user,pass]);

    //Validate user login (backend interaction) & update login message
    async function handleSubmit(){
      let result = await checkUser(user,pass);
      if (typeof(result) === "object"){
        //log the user in and store their data from backend
        props.changeloginstatus(true);
        props.setusername(user);
        console.log("username was set???")
        localStorage.setItem('username',user);
        setUserData(result);
        navigate('/');
        setLoginMessage("Logged In!")
      }else{
        setLoginMessage(result.trim())
      } 
      setTimeout(()=>{
        setLoginMessage("");
      },2000)
    }
  return(
    <>
      <div className={styles['page']}>
        <div className={styles["login"]}>
          <div className={styles["login-title"]}>
            Sign in
          </div>
          <div className={styles["login-user"]}>
            Username/Email <br/>
            <input type="text" onChange={(e)=>{setUser(e.target.value)}}></input>
            <div className={styles['user-message']}>
              {userErrorMessage}
            </div>
          </div>

          <div className={styles["login-pass"]}>
            Password <br/>
            <input type="text" onChange={(e)=>{setPass(e.target.value)}}></input>
            <div className={styles['pass-message']}>
              {passErrorMessage}
            </div>
          </div>

          <div className={styles['login-msg']}>
            {loginMessage}
          </div>
          <button className={styles["login-submit"]} onClick={(!passErrorMessage && !userErrorMessage) ? handleSubmit : null}> Submit</button>
          <div className={styles["login-footer"]}>
            Don't have an account?<br/>
            <Link to="/create-account">Create an account</Link><br/>
            <Link to="/">Back to home?</Link>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;