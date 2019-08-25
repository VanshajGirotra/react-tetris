import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/build/clientbundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'clientbundle.js'));
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.listen(PORT, () => {
  console.log('server listening on port ', PORT);
});
