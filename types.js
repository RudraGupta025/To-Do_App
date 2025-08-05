const { z } = require('zod');

const created_todo = z.object({
  title: z.string().min(1),
  description: z.string().min(1)
});

const updated_todo = z.object({
  id: z.string().min(1)
});

module.exports = {
  created_todo,
  updated_todo
};
