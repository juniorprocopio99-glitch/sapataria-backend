const express = require('express');
const cors = require('cors');
const supabase = require('./supabase');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/produtos', async (req, res) => {
  const { data, error } = await supabase
    .from('produtos')
    .select('*');

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor online na porta ${PORT}`);
});