import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Server is readey!')
})

app.get("/api/jokes", (req, res) => {
  const jokes = [{
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!"
  }, {
    id: 2,
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
  }, {
    id: 3,
    joke: "Why did the bicycle fall over? Because it was two-tired!"

  },
  {
    id: 4,
    joke: "What do you call fake spaghetti? An impasta!"
  },
  {
    id: 4,
    joke: "Why did the tomato turn red? Because it saw the salad dressing!"
  },
  {
    id: 5,
    joke: "Why don't skeletons fight each other? They don't have the guts."
  },
  {
    id: 6,
    joke: "What do you call cheese that isn't yours? Nacho cheese."
  },
  {
    id: 7,
    joke: "Why did the math book look sad? Because it had too many problems."
  }];
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
