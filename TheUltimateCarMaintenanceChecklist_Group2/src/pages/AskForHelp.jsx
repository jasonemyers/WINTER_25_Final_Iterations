import { data } from 'react-router-dom';
import styles from '../../styles/pages/AskForHelp.module.css'

import { useState, useEffect, useContext, useRef } from 'react';
import ThemeContext from '../assets/ThemeContext';

// Robot Support page, allows conversation with a AI chatbot with knowledge of the site
function AskForHelp() {
  const [vehicleSelected, setVehicleSelected, userData, setUserData, activate, setActivate] = useContext(ThemeContext);
  const [history, setHistory] = useState([])
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const hasRun = useRef(false);

  //allows other areas of code to call AI with a custom question
  useEffect(()=>{
    if (activate && !hasRun.current){
      sendMessage(activate);
      setActivate(null);
      hasRun.current = true;
    }
  },[activate])

// sends chat history + new message and returns bot message
  const sendMessage = async (message_alt = "") => {
    const new_message = message ? message : message_alt;
    setMessage("");
    setHistory(chats => [...chats, [new_message , ""]])
    setLoading(true);
    let loaded_reply;
    try {
      const response = await fetch("https://car-maintenance-app.onrender.com/groq", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: new_message,
          chatHistory: history
        }),
      });
      const data = await response.json();
      setReply(data.reply);
      loaded_reply = data.reply

    } catch (err) {
      console.error('Error:', err);
      setReply('Oops! Something went wrong.');
    }
    setLoading(false);
    setHistory(chats => {
      const newHistory = chats;
      newHistory[history.length] = [new_message, loaded_reply];
      return newHistory;
    });
    hasRun.current = false;
  };
  return (
    <div> 
      <div className={styles.page_container}>
        <div className={styles.history_container}> 
          <h1>Robot Customer Support</h1>
          
          {
            history.map((item,index) =>{
              return (
              <div key={index} style={{width:'100%'}}>
                <section className={styles.user_message}>
                  <strong style={{fontSize: '1.1em'}}>You: </strong><br />
                  {item[0]}
                </section>
                <section className={styles.ai_message}>
                <strong style={{fontSize: '1.1em'}}>Help-Bot: </strong><br />
                  {item[1]}
                </section>
              </div>
              )
            })
          }
        </div>
        <textarea 
          className= {styles.user_input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Type your question / message here..."
        />

        <br />

        <button
          onClick={sendMessage}
          disabled={loading || !message}
          style={{width:'10%',height: '40px'}}
        >
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default AskForHelp;
