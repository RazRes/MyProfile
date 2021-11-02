// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser')
// const MongoClient = require('mongodb').MongoClient
// const connectionString = 'mongodb+srv://RazRes:RazRes2021@cluster0.kmv39.mongodb.net/Crud?retryWrites=true&w=majority'
// const http = require('http')
// const cors = require('cors');
// MongoClient.connect(connectionString, {
//   useUnifiedTopology: true
// })
//   .then(client => {
//     console.log('Connected to Database')
//     const db = client.db('my-first-node-project')
//     const crudCollection = db.collection('quotes')
//     app.set('view engine', 'ejs')
//     app.use(bodyParser.urlencoded({extended: true}))
//     app.use(express.static('public'))
//     app.use(bodyParser.json())
//
//     //GET Method !!! ======================================================================
//     app.get('/', (req, res) => {
//       const cursor = db.collection('quotes').find().toArray().then(results => {
//         // res.render('src/app/app.component.html', {quotes: results})
//         res.sendFile(__dirname + '/src/app/app.component.html')
//       }).catch(error => {
//         console.error(error)
//       })
//       // res.sendFile(__dirname + '/index.html')
//     })
//     //POST Method !!!======================================================================
//     app.post('/quotes', (req, res) => {
//       crudCollection.insertOne(req.body).then(result => {
//         res.redirect('/')
//       })
//         .catch(error => console.error(error))
//     })
//
//     //PUT Method !!! ======================================================================
//     app.put('/quotes', (req, res) => {
//       crudCollection.findOneAndUpdate(
//         {  name: 'Razvan'},
//         {
//           $set: {
//             name: req.body.name,
//             quote: req.body.quote
//           }
//         },
//         {
//           upsert: false
//         }
//       ).then(result => {
//         res.json('Success')
//       }).catch(error => console.error(error))
//
//     })
//
//     //DELETE Method ==============================================================================
//     app.delete('/quotes', (req,res) =>{
//       crudCollection.deleteOne(
//         {name: req.body.name}
//       )
//         .then(result => {
//           if (result.deletedCount === 0) {
//             return res.json('No quote to delete')
//           }
//           res.json(`Deleted Darth Vader's quote`)
//         }).catch(error => console.error(error))
//     })
//
//     app.listen(3000, function () {
//       console.log('listening on 3000')
//     })
//     app.use(cors({
//       origin: ['https://www.google.com/'],
//       methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
//     }));
//   })
//   .catch(error => console.error(error))
