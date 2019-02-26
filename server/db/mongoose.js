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

mongoose.Schema.Types.ObjectId
// const QuestionSchema = Schema({
//   question:String
// })

// const QuestionSchema = new Schema({
  
//   title: {
//       type: String,
     
//   },
//   questions:[q]
//   content: {
//       type: String,
     
//   },
//   image: {
//       type: String
//   },


// },
// { versionKey: false });


const QuestionSchema = Schema({
  question:String
})

const QuizzSchema = new Schema({
  
 name:String,
 icon:String,
 keywords:[String],
  questions:[QuestionSchema],
  published:Boolean,
  owner:usersSchema,
  scores:[Number]



},
{ versionKey: false });








// exports
const Users = mongoose.model('Users', usersSchema);
const Question = mongoose.model('Questions', QuestionSchema);
const Quizz = mongoose.model('Quizzes',QuizzSchema)

module.exports = {};
module.exports.users = Users;
module.exports.questions = Question;
module.exports.quizzSchema = Quizz;
