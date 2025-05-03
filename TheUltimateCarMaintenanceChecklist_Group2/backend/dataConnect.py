# Just initializing
import sqlite3, sys, json
conn = sqlite3.connect('users.db')
cursor = conn.cursor()



#checks if it is a valid login
def validLogin(username,password):
   cursor.execute(
   "SELECT * FROM users WHERE user = ?",
   (username,)
   )
   #entry =  1 tuple
   entry = cursor.fetchone() 

   if(not entry):
      return "no user found"
   else:
      if password==entry[2]:
         entry_json = entry[3]
         return entry_json
      else:
         return "wrong password"

#creates user
def createUser(username,password):
   cursor.execute(
   "SELECT * FROM users WHERE user = ?",
   (username,))
   entry = cursor.fetchone() 

   if (not entry):
      cursor.execute(
      "INSERT INTO users(user,pass,data) VALUES(?,?,?)",
      (username,password,"{}"))
      return "created"
   else:
      return "failed"
   
# change user data
def modifyUser(username, data):
    cursor.execute(
        "SELECT * FROM users WHERE user = ?",
        (username,))
    entry = cursor.fetchone()

    if entry:
        cursor.execute(
            "UPDATE users SET data = ? WHERE user = ?",
            (data, username))
        return "modified"
    else:
        return "failed"
   
# delete user
def deleteUser(username):
   cursor.execute(
   "SELECT * FROM users WHERE user = ?",
   (username,))
   entry = cursor.fetchone() 
   if (entry):
      cursor.execute("DELETE FROM users WHERE user = ?", (username,))
      return "deleted"
   else:
      return "failed"

# show data entries for debugging
def showEntries():
   cursor.execute('''
   SELECT * FROM users
   ''')
   values = cursor.fetchall()
   data = []
   for each in values:
      test = {"user" : each[1], "pass" : each[2], 'data': each[3]}
      data.append(test) 
      
   print(json.dumps(data))
   



#Call what was passed to the script
if (sys.argv[1] == 'validLogin'):
   print(validLogin(sys.argv[2],sys.argv[3]))
elif (sys.argv[1] == 'createUser'):
   print(createUser(sys.argv[2],sys.argv[3]))
elif (sys.argv[1] == 'deleteUser'):
   print(deleteUser(sys.argv[2]))
elif (sys.argv[1] == 'modifyUser'):
   print(modifyUser(sys.argv[2], sys.argv[3]))
elif (sys.argv[1] == 'showEntries'):
   showEntries()
else:
   print("call a function man")      

#save
conn.commit()

# close connection and cursor (good practice)
cursor.close()
conn.close()