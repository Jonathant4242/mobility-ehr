import express from 'express';
import routes from './controllers/routes.js';
import {notFound, errorHandler} from './middleware/errors.js';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

app.use('/', routes);

// Fallback handlers must run after routes and static assets.
app.use(notFound);
app.use(errorHandler);

app.listen(port, (error) => {
  if (error) {
    console.error('Unable to start the server:', error.message);
    process.exitCode = 1;
    return;
  }

  console.log(`Mobility EHR running at http://localhost:${port}`);
});
