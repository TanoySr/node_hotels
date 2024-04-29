const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 


// const Person = require('./models/person');
//const Menu = require('./models/menu');







const personRoutes = require('./routes/personRoutes') ;
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuitemsRoutes') ;
app.use('/menu', menuRoutes);

const table_place_Routes = require('./routes/tablePlaceRouter') ;
app.use('/table_palce', table_place_Routes);


app.listen(3000,()=>{
   console.log('listening on port 3000');
})
