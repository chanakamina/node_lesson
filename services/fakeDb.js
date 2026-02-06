const db = new Map();

function ensure(collection) {
  if (!db.has(collection)) db.set(collection, []);
  return db.get(collection);
}

export default {
  list(collection) {
    return [...ensure(collection)];
  },

  findById(collection, id) {
    return ensure(collection).find(item => item.id === id) || null;
  },

  create(collection, item) {
    ensure(collection).push(item);
    return item;
  },

  updateById(collection, id, patch) {
    const arr = ensure(collection);
    const idx = arr.findIndex(i => i.id === id);
    if (idx === -1) return null;
    arr[idx] = { ...arr[idx], ...patch };
    return arr[idx];
  },

  deleteById(collection, id) {
    const arr = ensure(collection);
    const idx = arr.findIndex(i => i.id === id);
    if (idx === -1) return false;
    arr.splice(idx, 1);
    return true;
  }
};
