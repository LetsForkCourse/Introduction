const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database");
const path = require("path");

const app = express();
const port = 9090;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../website')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../website/index.html'));
});

app.get("/messages", (req, res) => {
  db.all("SELECT * FROM messages", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post("/messages", (req, res) => {
  const { username, message } = req.body;
  if (!username || !message) {
    res.status(400).json({ error: "Both username and message are required." });
    return;
  }
  db.run(
    "INSERT INTO messages (username, message) VALUES (?, ?)",
    [username, message],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: "Message sent successfully." });
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
