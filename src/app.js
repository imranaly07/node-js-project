const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
  res.render("index", {
    name: "imran",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});


  app.get("/projects", (req, res) => {
    res.render("projects");
  });

  app.get("/projects2", (req, res) => {
    res.render("projects2");
  });

  app.get("/projects3", (req, res) => {
    res.render("projects3");
  });
  app.get("/contact", (req, res) => {
    res.render("contact");
  });



// Handle 404 Not Found
app.use((req, res) => {
  res.status(404).render("404error", {
    errorcomment: "Page couldn't be found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
