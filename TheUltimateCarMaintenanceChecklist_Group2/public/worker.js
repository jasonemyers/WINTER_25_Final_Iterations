
/* this loads from 'requests.js' when user allows notifications. it 
registers a "service worker", which is able to send notifications*/

console.log('loaded')
self.addEventListener('push', e =>{
  const data = e.data.json();
  self.registration.showNotification(data.title,{
    body: data.body,
  })
})