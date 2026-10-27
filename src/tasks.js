function getTaskCount(tasks) {
  if (!Array.isArray(tasks)) {
    return 0;
  }
  return tasks.length;
}

module.exports = { getTaskCount };