import React, { useEffect } from 'react';
import { useRef } from 'react';
import { setUpNotifications, sendNotification} from '../../backend/requests.js'
import styles from '../../styles/pages/PushNotifications.module.css'

// Push Notifications page. Allows user to grant site permission to send the notifications (by assigning a service worker)
function PushNotifications() {
  const allow_notifications = useRef();

  //upon mount, checks the box if the user has a service worker already
  useEffect(() => {
    async function check_initial_state() {
      const worker = await navigator.serviceWorker.getRegistration()  
      worker ? allow_notifications.current.checked = true : allow_notifications.current.checked = false
    }
    check_initial_state();
  },[]);

  // upon enabling/disabling notifications, set up service worker or remove it
  async function handleChange(){
    let registered = false
    const worker = await navigator.serviceWorker.getRegistration()
    worker ? registered = true : registered = false

    // if user enables notifications and there's no service worker, set one up
    if (allow_notifications.current.checked && !registered){
      await setUpNotifications().catch(err => console.log(err))
    }
    // if user disables notifications and there's a service worker, remove it.
    if (!allow_notifications.current.checked && registered){
      await worker.unregister()
    }
  }

  // sends test notification
  async function test_notification() {
    await sendNotification();
  }

  return (
    <div className={styles.columncontainer}>
      <section className={styles.intro}>
        <h3>Push Notifications</h3>
        Configure push notifications for service reminders and updates!
      </section>
      <div className={`${styles.notifications} ${styles.rowcontainer}`}>
        Would you like to enable notifications?
        <input ref={allow_notifications} onChange={handleChange} type="checkbox" />
        <button onClick={test_notification}>Test Notification</button>
      </div>

    </div>
  );
}

export default PushNotifications;
