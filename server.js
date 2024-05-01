const express = require('express');
const app = express();
const db = require('./db');

require('dotenv').config();


app.get('/', (req, res) => {
   res.send('Hello World!')
 });

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 



const personRoutes = require('./routes/personRoutes') ;
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuitemsRoutes') ;
app.use('/menu', menuRoutes);

const table_place_Routes = require('./routes/tablePlaceRouter') ;
app.use('/table_palce', table_place_Routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
   console.log('listening on port 3000');
})