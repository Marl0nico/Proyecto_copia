import app from './server.js';
import connection from './database.js'

// Iniciar el servidor
app.listen(app.get('port'),()=>{
  console.log(`Server ok on http://localhost:${app.get('port')}`);
})

connection()
