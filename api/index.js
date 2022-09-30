const express = require("express");
const app = express();
const Joi = require("joi");
const cors = require("cors");

const { books } = require("./books.json");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:isbn", (req, res) => {
  const book = books.find((c) => c.isbn === req.params.isbn);

  if (!book) return res.status(404).send("was not found");

  res.send(book);
  console.log(req.params);
});

///TODO:
// app.get("/api/books/?search=:key", (req, res) => {
//   const result =
// });

const validationAction = (book) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
  });
  return schema.validate(book);
};

app.post("/api/books", (req, res) => {
  //validation
  const { error } = validationAction(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //post new book
  const book = {
    isbn: req.body.isbn,
    title: req.body.title,
    subtitle: req.body.subtitle,
    author: req.body.author,
    published: req.body.published,
    publisher: req.body.publisher,
    pages: req.body.pages,
    description: req.body.description,
    website: req.body.website,
  };
  books.push(book);
  res.send(book);
});

app.put("/api/books/:isbn", (req, res) => {
  const book = books.find((c) => c.isbn === req.params.isbn);
  if (!book) return res.status(404).send("was not found");

  //validation
  const { error } = validationAction(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //update
  book.name = req.body.name;
  res.send(book);
});

app.delete("/api/books/:isbn", (req, res) => {
  //   const book = books.find((c) => c.id === parseInt(req.params.id));
  const book = books.find((c) => c.isbn === parseInt(req.params.isbn));
  if (!book) return res.status(404).send("was not found");

  //delete
  const index = books.indexOf(book);
  books.splice(index, 1);

  res.send(book);
});

//PORT
const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on port ${port}...`));
