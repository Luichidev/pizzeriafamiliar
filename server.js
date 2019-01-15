//Install express server
const express = require('express'),
      path = require('path');

const app = express();

app.use(express.static('./dist/app-pizza-MDB'));

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/dist/app-pizza-MDB/index.html'));
});


app.listen(process.env.PORT || 8080, ()=> {
  console.log('Server started...')
});
