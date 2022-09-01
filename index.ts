import express from 'express';
import { FB40 } from './src/model';

const app = express();

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(FB40("apache"));
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`))