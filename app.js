const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes'); // Importa las rutas

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Usar las rutas
app.use('/', itemRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
