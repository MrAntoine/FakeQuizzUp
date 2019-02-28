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
                "txtAnswers":["July 3, 1985","July 3,1986","August 23, 1985","August 23, 1986"],
                "solutions":[1],
                "points":1},
            {"question":"Who have created \"Wayne’s World",
                "img":null,
                "imgAnswers":[],
                "txtAnswers":["Penelope Spheeris ","Martin Scorsese","Gregg Araki","Alfred Hitchcock"],
                "solutions":[1],
                "points":1},
            {"question":"Which of his images are art?",
                "img":null,
                "imgAnswers":["quizz3/one.jpg","quizz3/two.jpg","quizz3/three.jpg","quizz3/four.jpg"],
                "txtAnswers":[],
                "solutions":[1,2,3,4],
                "points":1},
            {"question":"What is this?",
                "img":"quizz3/five.jpg",
                "imgAnswers":[],
                "txtAnswers":["A painting","an optical illusion graffiti","a Sculpture","a building"],
                "solutions":[2],
                "points":1}]
    }

]);
    