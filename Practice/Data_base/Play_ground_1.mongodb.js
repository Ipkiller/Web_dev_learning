
use('Demo'); 

// Insert a few documents into the Demo_data collection.
db.getCollection('Demo_data').insertMany(
  [
    {
      "_id": "665ab797c433f87a025e623a",
      "name": "Amrit Singh",
      "age": 19,
      "region": "India",
      "email": "amrit.singh@example.com",
      "phone": "+91-9876543210"
    },
    {
      "_id": "665ab797c433f87a025e623b",
      "name": "Rohan Verma",
      "age": 12,
      "region": "India",
      "email": "rohan.verma@example.com",
      "phone": "+91-9123456789"
    },
    {
      "_id": "665ab797c433f87a025e623c",
      "name": "Sanya Gupta",
      "age": 25,
      "region": "India",
      "email": "sanya.gupta@example.com",
      "phone": "+91-9000000000"
    },
    {
      "_id": "665ab797c433f87a025e623d",
      "name": "Aarav Kapoor",
      "age": 34,
      "region": "India",
      "email": "aarav.kapoor@example.com",
      "phone": "+91-9001111111"
    },
    {
      "_id": "665ab797c433f87a025e623e",
      "name": "Neha Sharma",
      "age": 29,
      "region": "India",
      "email": "neha.sharma@example.com",
      "phone": "+91-9002222222"
    },
    {
      "_id": "665ab797c433f87a025e623f",
      "name": "Vikram Chawla",
      "age": 22,
      "region": "India",
      "email": "vikram.chawla@example.com",
      "phone": "+91-9003333333"
    }
  ]
  
);

// Print a message to the output window.
console.log("Documents inserted successfully.");