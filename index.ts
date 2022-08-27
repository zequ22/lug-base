import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Que te pasa calabaza?");
})

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App listening on port: ${port}`))