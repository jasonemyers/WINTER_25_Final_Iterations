# STRICTLY here as some guide code

import sqlite3

# connect to database
conn = sqlite3.connect('example.db')
cursor = conn.cursor()

# create table
cursor.execute('''
               CREATE TABLE IF NOT EXISTS users(
                  id INTEGER PRIMARY KEY,
                  user TEXT,
                  pass TEXT) 
''')

users = [
  ("Bobby","Bob54321"),
  ("msaleh23","Happydyz74"),
  ("killah321","big-Mna87"),
  ("crzy8","6foorkiillah")
]
#insert an entry
cursor.executemany(
"INSERT INTO users(user,pass) VALUES(?,?)",
users
)

# SAVE DATA
# conn.commit()


# Get the entries and prints the entries obtained by cursor
cursor.execute('''
SELECT * FROM users
WHERE user = 'crzy8'
''')

print(cursor.fetchall())

# close connection and curson (good practice)
cursor.close()
conn.close()