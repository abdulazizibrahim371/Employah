const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('./models/Employee');
//const { default: Dashboard } = require('../client/src/components/userRegistry/Dashboard/Dashboard');

const app = express();
const port = 5000;

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'CVanalysis';

// Middleware for parsing JSON data 
app.use(cors());
app.use(express.json());

// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//   });

mongoose.connect("mongodb://127.0.0.1:27017/employee")


app.post("/login", (req,res) => {
  const {email, password } = req.body;
  EmployeeModel.findOne({email: email})
  .then(user => {
    if(user) {
      if(user.password === password) {
        res.json("success")
        res.redirect("/dashboard");
      }else{
        res.json("The password is incorrect")
      }
    }else{
      res.json("No record existed")
    }
  })
})

app.post('/register', (req, res)=>{
  EmployeeModel.create(req.body)
  .then(employees => res.json(employees))
  .catch(err => res.json(err))
})

app.post('/dashboard', (req, res)=>{
  
})


// app.post('/login', async(req, res) => {
//     const { email, password } = req.body;

//     try{
//         const client = await MongoClient.connect(mongoUrl);
//         const db = client.db(dbName);
//         const usersCollection = db.collection('users')

//         // User registration endpoint
// app.post('/register', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       const usersCollection = db.collection('users');
  
//       // Check if user already exists
//       const existingUser = await usersCollection.findOne({ email });
//       if (existingUser) {
//         return res.status(400).json({ message: 'User already exists' });
//       }
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
  
//       // Create a new user document
//       const user = { email, password: hashedPassword };
  
//       // Insert the user document into the 'users' collection
//       const result = await usersCollection.insertOne(user);
  
//       if (result.insertedCount === 1) {
//         // Generate a JWT token
//         const token = jwt.sign({ userId: user._id, email }, 'your-jwt-secret');
  
//         return res.status(201).json({ token });
//       } else {
//         return res.status(500).json({ message: 'Failed to register user' });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   });
  
  

//         const user = await usersCollection.findOne({ email, password});

//         if(user) {
//             // Successful login
//             res.json({success: true});
//         }else{
//             // Invalid credentials
//             res.json({success: false});
//         }
//         client.close();
//     }catch(error) {
//         console.error('Error:', error);
//         res.status(500).json({success: false, error: 'Internal server error'});
//     }
// });

//start server
app.listen(port, ()=> {
    console.log(`Backend server is running on http://localhost:${port}`);
});