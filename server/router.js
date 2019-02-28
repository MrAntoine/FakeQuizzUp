const express = require("express");

const bodyParser = require("body-parser");
const router = express.Router();

const db = require('./db/mongoose.js');
const Users = db.users;
const Question = db.questions;
const Quizzes = db.quizzSchema





router

router
  .use(express.static('resources'))
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({
    extended: true
  })) // for parsing application/x-www-form-urlencoded
  .get("/users", (req, res) => {
    Users
      .find({})
      .exec((err, data) => {
        if (err) console.log("error", err);
        else res.json(data);
      });
  })
  .get('/question', (req, res) => {
    Question.find()
          .exec((err, data) => {
            if (err)
              return res.status(500).send(err);
            else
              res.json(data);
          })
  })
  .get('/quizz', (req, res) => {
    Quizzes.find()
          .exec((err, data) => {
            if (err)
              return res.status(500).send(err);
            else
              res.json(data);
          })
  }).
get("/quizz/:id", (req, res) => {
    Quizzes.questions.findOne({
        _id: req.params.id
    }).exec((err, data) => {
        if (err) return res.status(500).send(err);
        else res.json(data);
    });
  })  

  
  
  .post("/newquestion", (req, res) => {
    const q = new Question(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"+err));
  })
  .post("/newquizz", (req, res) => {
    const q = new Quizzes(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"+err));
  })   
  .post("/newusers", (req, res) => {
    const q = new Users(req.body);    // The json object is the body of the request
    q.save()                          // Save the object.
     .then(item => res.json(item))     // send the object in response
     .catch(err => res.status(400).send("unable to save to database"));
  })
      
  .use((req, res) => {
    res.status(400);
    res.json({
      error: "Bad request"
    });
  });


module.exports = router;
