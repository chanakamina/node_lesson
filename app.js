import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middlewares/logger.js';
import tasksRouter from './routes/tasks.js';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded
app.use(logger);


// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

app.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

// API routes for tasks
app.use('/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
