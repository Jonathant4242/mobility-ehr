import express from 'express';
import routes from './controllers/routes.js';
import { notFound, errorHandler } from './middleware/errors.js';

const app = express();
const port = process.env.PORT || 3000;

// Configure templates and public files.
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('public'));

// Connect the application's routes.
app.use('/', routes);

// Handle missing pages, then any errors raised by the application.
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