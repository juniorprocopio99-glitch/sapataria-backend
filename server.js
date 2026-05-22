const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(cors());
app.use(express.json());

const supabase = createClient(
  'COLE_A_URL_DO_SUPABASE',
  'COLE_A_CHAVE_PUBLICAVEL'
);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/produtos', async (req, res) => {
  const { data, error } = await supabase
    .from('produtos')
    .select('*');

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

app.listen(3001, () => {
  console.log('Servidor online');
});