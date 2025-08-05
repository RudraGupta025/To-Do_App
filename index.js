// Basic Express boilerplate code with express.json() middleware
const express = require('express');
const cors = require('cors');
const { created_todo, updated_todo } = require('./types');
const { todo } = require('./db');
const { z } = require("zod");
// Initialize the Express app

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5174'  // Adjust if your React app uses a different port
}));

// POST route to create a new todo
app.post('/todos', async (req, res) => {
    const createpayload = req.body;
    const parsepayload = created_todo.safeParse(createpayload);

    if (!parsepayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong input",
            error: parsepayload.error.errors  // optional: send Zod error details
        });
    }

    await todo.create({
        title: createpayload.title,
        description: createpayload.description,
        completed: false
    });

    res.json({ msg: "Todo created" });
});

// GET route to fetch all todos
app.get('/todos', async (_req, res) => {
    const todos = await todo.find({});
    res.json({ todos });
});
 
// PUT route to mark a todo as completed
app.put('/completed', async (req, res) => {
    const updatepayload = req.body;
    const parsepayload = updated_todo.safeParse(updatepayload);

    if (!parsepayload.success) {
        return res.status(411).json({
            msg: "You sent the wrong inputs",
            error: parsepayload.error.errors  // optional
        });
    }

    await todo.updateOne(
        { _id: updatepayload.id },  // ✅ correct use of _id
        { completed: true }
    );

    res.json({ msg: "Todo marked as completed" });
});

// Start the server
app.listen(3003, () => {
    console.log('✅ Server running on http://localhost:3003');
});
