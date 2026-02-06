import express from 'express';
import { createTask, listTasks, getTask, updateTask, deleteTask } from '../controllers/tasksController.js';

const router = express.Router();

router.post('/', createTask);
router.get('/', listTasks);
router.get('/:id', getTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
