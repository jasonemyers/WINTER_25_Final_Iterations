import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {deleteUser,createUser,showEntries} from '../../backend/requests.js'
import styles from '../../styles/pages/CreateAccount.module.css'
import UserAgreement from '../components/UserAgreement.jsx';

// Create account page. Creates user login if none exist
function CreateAccount(){
  const navigate = useNavigate();
  const [user,setUser] = useState("");
  const [pass,setPass] = useState("");
  const [userErrorMessage,setUserErrorMessage] = useState("");
  const [passErrorMessage,setPassErrorMessage] = useState("");
  const [hiddenMessage, setHiddenMessage] = useState("");
  const [checkedAgreement, setCheckedAgreement] = useState(false);

  //create the account, sends request to backend
  async function handleAccountCreation(){
    const value = await createUser(user,pass);

    const message = `${value.status ==="created" ? "You made an account!" : "A user is registered under that name"}`;
    setHiddenMessage(message);
    setTimeout(()=>{
      setHiddenMessage("");
    },2000)
    if (value.status === "created"){
      navigate('/');
    }
  }

      
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

  return(
    <div className={styles['page-create']}>
      <div className={styles["create"]}>
        <div className={styles["create-title"]}>
          Create an Account
        </div>
        <div className={styles['create-user']}>
          What would you like your username to be?<span style={{color: 'red'}}>*</span><br/>
        </div>
        <input type="text" onChange={(e) => {setUser(e.target.value);}}/>
        <div style={{color:'red'}}>{userErrorMessage}</div>
        <div className={styles['create-pass']}>
          What would you like your password to be?<span style={{color: 'red'}}>*</span>
        </div>
        <input type='text' onChange={(e) =>{setPass(e.target.value);}}/>
        <div style={{color:'red'}}>{passErrorMessage}</div>
        <UserAgreement checked={[checkedAgreement, setCheckedAgreement]}/>
        <button onClick={checkedAgreement && (!passErrorMessage && !userErrorMessage) ? handleAccountCreation : null} className={styles[checkedAgreement && (!passErrorMessage && !userErrorMessage)  ? 'create-submit' : 'create-submit-fail']}>
          Create my account
        </button>
        <div className={styles['create-submit-message']}>
         {hiddenMessage}
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;