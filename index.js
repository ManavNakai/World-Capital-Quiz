import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

let quiz = [];

db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {};
let time = 0;

// GET home page
app.get("/", (req, res) => {
  totalCorrect = 0;
  time++;
  if(time==1) currentQuestion=nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

// POST the answer
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  console.log(answer);
  time=0;
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() == answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
    currentQuestion=nextQuestion();
  }
  else console.log("Wrong answer! Final Score: " + totalCorrect);
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  console.log(randomCountry);
  return(randomCountry);
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
