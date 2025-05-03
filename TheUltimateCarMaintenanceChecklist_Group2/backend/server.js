//MAIN BACKEND FILE

import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import webpush from 'web-push';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());  
app.use(bodyParser.json())


const publicVapidKey = "BPRBR3516pFzNP8WufLyCXf2t_ahKLju7MYJgDujqQDmZeenz07sTMcCy_l5uzreTAJU47ZcD4k5fYjWMcP5-64";
webpush.setVapidDetails("mailto:test@test.com",publicVapidKey,"BWbJ1nA2JoJXNpQn5umkVoSY-yx7ZkQMBAMSL1sT-SA");

// ENDPOINTS

//subscribe to notifications 
app.post('/subscribe',(req,res) =>{

  // service worker needs subscription and data info
  const subscription = req.body;
  const info = JSON.stringify({title: 'Push Test', body: "testing your notification what's up aly, ali, matthew and ahad"});

  // send notification
  webpush.sendNotification(subscription, info).catch(err => console.error(err));
  res.status(200).send("success")
});

//Validate user login and/or return user data
app.post('/checkusers',(req,res) =>{
  //Call validate login method in Python Script
  const pyScript = spawn('python',['dataConnect.py','validLogin',req.body.user,req.body.pass])

  //Show output of Python Script. Output is one of:
  // 1) "No user found"
  // 2) "Wrong password"
  // 3) validated login, and sends user's data
  pyScript.stdout.on('data', (data) => {
    const info = data.toString().trim()
    if (info === "wrong password" || info ==="no user found"){
      res.status(404).send(info);
    }else{
      res.status(200).send(info);
    }
  });

  pythonErrorOrEnd(pyScript);
});

//Add a user login
app.post('/createuser',(req,res)=>{
  //Call create user method in Python Script
  const pyScript = spawn('python',['dataConnect.py','createUser',req.body.user,req.body.pass])

  //Show output of Python Script.
  pyScript.stdout.on('data', (data) => {
    const info = data.toString().trim()
    if (info === "failed"){
      res.status(404).json({"status":info});
    }else{
      res.status(200).json({"status":info});
    }
  });
  pythonErrorOrEnd(pyScript);

})

//delete a user login
app.delete('/deleteuser',(req,res)=>{
  //Call create user method in Python Script
  const pyScript = spawn('python',['dataConnect.py','deleteUser',req.body.user])

  //Show output of Python Script.
  pyScript.stdout.on('data', (data) => {
    const info = data.toString().trim()
    if (info === "failed"){
      res.status(404).send({"status":info});
    }else{
      res.status(200).send({"status":info});
    }  });
  pythonErrorOrEnd(pyScript);

})

//modify user data
app.put('/modifyuser',(req,res)=>{
  //Call create user method in Python Script
  let result;
  const pyScript = spawn('python',['dataConnect.py','modifyUser',req.body.user,req.body.userdata])
  //Show output of Python Script.
  pyScript.stdout.on('data', (data) => {
    const info = data.toString().trim()
    if (info === "failed"){
      res.status(404).send(info);
    }else{
      res.status(200).send(info);
    }
  });
  pythonErrorOrEnd(pyScript);

})

//display entries for debugging
app.get('/entries',(req,res)=>{
  //Call create user method in Python Script
  const pyScript = spawn('python',['dataConnect.py','showEntries'])
  //Show output of Python Script.
  pyScript.stdout.on('data', (data) => {
    res.json(data.toString())
  });
  pythonErrorOrEnd(pyScript);
})

app.post('/groq', async (req, res) => {
  const info = req.body;

  const messages = [
    { role: 'system', content: "You are customer support for a car maintenance site called 'The Ultimate Car Maintenance Checklist'. "
      + "Please do not send messages that are too long, but not short either if a user expects some help. Do not use emojis often."},
    ...info.chatHistory.map(item => {
      return([
        {role: 'user', content: item[0]},
        {role: 'assistant', content: item[1]},
      ])
    }).flat(),
    { role: 'user', content: info.message }
  ];
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${"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"}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gemma2-9b-it',
        messages: messages
      })
    });

    const data = await response.json();

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('Groq API error:', error);
    res.status(500).send('Error contacting Groq API');
  }
});

function pythonErrorOrEnd(file){
  // For error in file & checking it closed (when I'm debugging)
  file.stderr.on('data', (data) => {
    console.error(`Python error: ${data.toString()}`);
  });
  file.on('close',(code)=>{
    console.log(`Python script finished with exit code ${code}`);
  })
}



app.listen(8000);