const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
global.TextEncoder = require("util").TextEncoder;

const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const PORT = 3001;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/home', taskRoutes);
app.use('/register', userRoutes);
// app.use('/login', loginRoutes);

app.listen(PORT, () => console.log(`Servidor rodando -> ${PORT}`));