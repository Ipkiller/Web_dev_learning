const express = require("express");
const app = express();
const port = 3000;

app.get(express.static("public"));

app.post("/", (req, res) => {
  console.log("Api called");
  res.render('index',{api: 'called'});
});
// app.get('/', (req, res) => {
//   res.sendFile('index.ejs', { root: __dirname + '/public' });
//   console.log('Html file sent');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
