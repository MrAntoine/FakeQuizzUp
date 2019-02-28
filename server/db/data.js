db.quizzes.drop();
db.quizzes.insert([
       {
        "name":"Random informations",
        "icon":"quizz3/icon.jpg",
        "keywords":["one","two","three"],
        "questions":[
            {"question":"What is the release date for “Back to the future” ",
                "img":null,
                "imgAnswers":[],
                "txtAnswers":["July 3,1986","July 3, 1985","August 23, 1985","August 23, 1986"],
                "solutions":[1],
                "points":1},
            {"question":"Who have created \"Wayne’s World",
                "img":null,
                "imgAnswers":[],
                "txtAnswers":["Martin Scorsese","Penelope Spheeris ","Gregg Araki","Alfred Hitchcock"],
                "solutions":[0],
                "points":1},
            {"question":"Which of his images are art?",
                "img":null,
                "imgAnswers":["quizz3/one.jpg","quizz3/two.jpg","quizz3/three.jpg","quizz3/four.jpg"],
                "txtAnswers":[],
                "solutions":[0,1,2,3],
                "points":1},
            {"question":"What is this?",
                "img":"quizz3/five.jpg",
                "imgAnswers":[],
                "txtAnswers":["a Sculpture","A painting","an optical illusion graffiti","a building"],
                "solutions":[0,1],
                "points":1}]
    }

]);
    