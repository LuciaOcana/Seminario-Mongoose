const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/ea-mongoose';

// Conexion a la base de datos ea-mongoose
mongoose.connect(uri)
  .catch((error) => console.log(error));

mongoose.connetion.once('open', _ =>{
  console.log('Database in connected to', uri)
})
