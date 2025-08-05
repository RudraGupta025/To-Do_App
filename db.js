import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://beastkartik369:KARtik%40369@cluster0.sufwbf5.mongodb.net/todo');
const todoschema = new mongoose.Schema({
    title: String,
    description: String,
    Completed: Boolean
});
const todo = mongoose.model('todo', todoschema);
export { todo };