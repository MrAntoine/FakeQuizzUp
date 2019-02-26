const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// db connexion
mongoose.connect('mongodb://localhost/quizz',{ useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected to", db.client.s.url);
});

// database collections
const usersSchema = Schema({
  name: String,
  password: String
});

const QuestionSchema = new Schema({
 
  title: {
      type: String,
     
  },
  content: {
      type: String,
     
  },
  image: {
      type: String
  },

},
{ versionKey: false });




// exports
const Users = mongoose.model('Users', usersSchema);
const Question = mongoose.model('Questions', QuestionSchema);

module.exports = {};
module.exports.users = Users;
module.exports.questions = Question;
