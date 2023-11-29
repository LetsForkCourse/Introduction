const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:"); // Используем in-memory базу данных

db.serialize(() => {
  db.run(
    "CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, message TEXT)"
  );
});

module.exports = db;
