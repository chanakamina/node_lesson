import { nanoid } from 'nanoid';
import fakeDb from './fakeDb.js';

const COLLECTION = 'tasks';

export const STATUS = Object.freeze({
  DONE: 'done',
  IN_PROGRESS: 'in-progress',
  TODO: 'todo'
});

export default {
  create({ name, description, status = STATUS.TODO }) {
    const id = nanoid();
    const task = { id, name, description, status };
    return fakeDb.create(COLLECTION, task);
  },

  list() {
    return fakeDb.list(COLLECTION);
  },

  find(id) {
    return fakeDb.findById(COLLECTION, id);
  },

  update(id, patch) {
    return fakeDb.updateById(COLLECTION, id, patch);
  },

  delete(id) {
    return fakeDb.deleteById(COLLECTION, id);
  }
};
