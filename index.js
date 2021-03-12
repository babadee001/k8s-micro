import express from 'express';

import JokesRouter from './routes/jokes';


const app = express();


app.use('/', JokesRouter);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to scalac microservice');
});

app.get('*', (req, res) => {
  res.status(404).send({
    message: 'This route doesnt exist.'
  });
});

app.listen(port, () => {
  console.log('App listening on port', port);
});
