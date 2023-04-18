// server.js
const express = require('express')

const app = express()

// Connect to MongoDB database
// mongoose.connect('mongodb://localhost/todo', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB!')
// }).catch((error) => {
//   console.error(error)
// })

app.get('/', (req, res)=>{
  res.send('Hello world')
})
// Define API endpoints
app.get('/api/todos', (req, res) => {
  // TODO: Implement getting all todos
})

app.get('/api/todos/:id', (req, res) => {
  // TODO: Implement getting a single todo by ID
})

app.post('/api/todos', (req, res) => {
  // TODO: Implement creating a new todo
})

app.put('/api/todos/:id', (req, res) => {
  // TODO: Implement updating an existing todo by ID
})

app.delete('/api/todos/:id', (req, res) => {
  // TODO: Implement deleting a todo by ID
})

// Start server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})
