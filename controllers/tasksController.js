import tasksService, { STATUS } from '../services/tasksService.js';

export async function createTask(req, res) {
  const { name, description, status } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  if (status && !Object.values(STATUS).includes(status)) {
    return res.status(400).json({ error: 'invalid status' });
  }
  const task = tasksService.create({ name, description, status });
  return res.status(201).json(task);
}

export async function listTasks(req, res) {
  const tasks = tasksService.list();
  return res.json(tasks);
}

export async function getTask(req, res) {
  const { id } = req.params;
  const task = tasksService.find(id);
  if (!task) return res.status(404).json({ error: 'not found' });
  return res.json(task);
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const patch = req.body;
  if (patch.status && !Object.values(STATUS).includes(patch.status)) {
    return res.status(400).json({ error: 'invalid status' });
  }
  const updated = tasksService.update(id, patch);
  if (!updated) return res.status(404).json({ error: 'not found' });
  return res.json(updated);
}

export async function deleteTask(req, res) {
  const { id } = req.params;
  const ok = tasksService.delete(id);
  if (!ok) return res.status(404).json({ error: 'not found' });
  return res.status(204).send();
}
