let u1 = {
  _uid: 1,
  name: 'toto',
  passwd: '123'
}

let q1 = {
  _id : 1,
  name: 'Movies',
  icon: 'quizz1/movies.png',
  keywords: ['kitchen', 'english'],
  questions: [{
    question: 'where is brian?',
    video: null,
    txtAnswers: ["in the living room", "in the kitchen", "in the garden", "in the bathroom"],
    imgAnswers: [],
    solutions: [1, 2],
    points: 3
  }, {
    question: 'Where is Jenny, the sister of Brian?',
    video: null,
    txtAnswers: [],
    imgAnswers: ["quizz1/bathroom.jpg", "quizz1/kitchen.jpg"],
    solutions: [0],
    points: 3
  }, {
    question: 'who is brian?',
    video: null,
    txtAnswers: ["a girl", "a boy"],
    imgAnswers: [],
    solutions: [0],
    points: 1
  }],
  published: true,
  ownerId: 1,
  scores: []
}

let q2 = {
  _id: 2,
  name: 'Light Painting',
  icon: 'quizz2/light_painting.jpg',
  keywords: ['Aix', 'Tourisme'],
  questions: [{
    question: 'where is Aix en Provence?',
    video: null,
    txtAnswers: ["In the north of France", "In the south of Italy", "In the south of France"],
    imgAnswers: [],
    solutions: [2],
    points: 1
  }, {
    question: 'What is the rotonde?',
    video: null,
    txtAnswers: [],
    imgAnswers: ['quizz2/granet1.jpg', 'quizz2/sauveur2.jpg', 'quizz2/aix.jpg', 'quizz2/rotonde.jpg'],
    solutions: [2, 3],
    points: 3
  }],
  published: true,
  ownerId: 1,
  scores: []
};


let quizzes = [q1, q2];
let users = [u1];
export {
  quizzes,
  users
};
