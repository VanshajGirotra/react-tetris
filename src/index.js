import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3535;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/', express.static(path.join(__dirname, '../assets')));
app.listen(PORT, () => {
  console.log('server listening on port ', PORT);
});
