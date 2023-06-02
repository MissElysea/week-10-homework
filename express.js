const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const items = [];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    const { name, price } = req.body;
    const id = Math.random().toString(36).substr(2, 9);
    const newItem = { id, name, price };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    const item = items.find(item => item.id === id);
    if (item) {
        res.status(404).json({ error: 'Item not found' });
    } else {
        res.json(item);
    }
 });

 app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  const item = items.find(item => item.id === id);
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    item.name = name;
    item.price = price;
    res.json(item);
  }
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
  } else {
    const deletedItem = items.splice(index, 1)[0];
    res.json(deletedItem);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});