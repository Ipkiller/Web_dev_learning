use("crudDb");
// db.createCollection('users')
// db.users.insertOne({
//     name: 'Tony Doe',
//     email: 'example@gmail.com',
//     status: 'active',
//     age: 30,
// })

// db.users.insertMany(
//     [
//         {
//           "id": 1,
//           "name": "John Doe",
//           "age": 28,
//           "email": "john.doe@example.com",
//           "address": {
//             "street": "123 Main St",
//             "city": "Springfield",
//             "state": "IL",
//             "zip": "62704"
//           },
//           "phoneNumbers": [
//             {
//               "type": "home",
//               "number": "555-1234"
//             },
//             {
//               "type": "work",
//               "number": "555-5678"
//             }
//           ],
//           "isActive": true
//         },
//         {
//           "id": 2,
//           "name": "Jane Smith",
//           "age": 34,
//           "email": "jane.smith@example.com",
//           "address": {
//             "street": "456 Oak Ave",
//             "city": "Metropolis",
//             "state": "NY",
//             "zip": "10001"
//           },
//           "phoneNumbers": [
//             {
//               "type": "mobile",
//               "number": "555-8765"
//             }
//           ],
//           "isActive": false
//         },
//         {
//           "id": 3,
//           "name": "Emily Johnson",
//           "age": 22,
//           "email": "emily.johnson@example.com",
//           "address": {
//             "street": "789 Pine St",
//             "city": "Gotham",
//             "state": "NJ",
//             "zip": "07001"
//           },
//           "phoneNumbers": [
//             {
//               "type": "home",
//               "number": "555-4321"
//             },
//             {
//               "type": "mobile",
//               "number": "555-8765"
//             }
//           ],
//           "isActive": true
//         }
//       ]

// )
// let a = db.users.find();
// console.log(a.toArray());
let b = db.users.findOne();
console.log(b);


//Update and delete

// db.users.updateOne({age: 30}, {$set: {age: 44}});

db.users.updateMany({age: 30}, {$set: {age: 44}});


//delete
db.users.deleteMany ({age: 44});