let players = [{
        name: "Erling Haaland",
        club: "Manchester City",
        position: "Striker",
        nationality: "Norway",
        image: "erling_haaland.jpeg"
    },
    {
        name: "Kevin De Bruyne",
        club: "Manchester City",
        position: "Midfielder",
        nationality: "Belgium",
        image: "kevin_de_bruyne.jpeg"
    },
    {
        name: "Mohamed Salah",
        club: "Liverpool",
        position: "Right Winger",
        nationality: "Egypt",
        image: "mohamed_salah.jpeg"
    },
    {
        name: "Virgil Van Dijk",
        club: "Liverpool",
        position: "Centre-Back",
        nationality: "Netherlands",
        image: "virgil_van_dijk.jpeg"
    },
    {
        name: "Cole Palmer",
        club: "Chelsea",
        position: "Forward",
        nationality: "England",
        image: "cole_palmer.jpeg"
    },
    {
        name: "Son Heung-min",
        club: "Tottenham",
        position: "Forward",
        nationality: "South Korea",
        image: "heung-min_son.jpeg"
    },
    {
        name: "Bukayo Saka",
        club: "Arsenal",
        position: "Right Winger",
        nationality: "England",
        image: "bukayo_saka.jpeg"
    },
    {
        name: "Alisson Becker",
        club: "Liverpool",
        position: "Goalkeeper",
        nationality: "Brazil",
        image: "alisson_becker.jpeg"
    },
    {
        name: "William Saliba",
        club: "Arsenal",
        position: "Centre-Back",
        nationality: "France",
        image: "william_saliba.jpeg"
    },
    {
        name: "Jamie Vardy",
        club: "Leicester",
        position: "Striker",
        nationality: "England",
        image: "jamie_vardy.jpeg"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");


    let unusedPlayers = [...players];
    let score = 0;
    let questionCount = 0;
    const totalQuestions = 10;
    let currentPlayer = null;

    function updatePlayer() {
        if (unusedPlayers.length === 0) {
            console.error("No players left to display.");
            return;
        }

        // selecting a random player from the unused players
        let randomIndex = Math.floor(Math.random() * unusedPlayers.length);
        currentPlayer = unusedPlayers[randomIndex];

        document.getElementById("player-image").src = `assets/images/players/${currentPlayer.image}`;

        // remove player from array 
        unusedPlayers.splice(randomIndex, 1);

        // clear feedback and input field
        document.getElementById("answer-box").value = '';
        document.getElementById('feedback-message').textContent = '';
    }

    function updateScore() {
        document.getElementById('score').textContent = score;
    }

    function restartGame() {
        unusedPlayers = [...players]; // reset players array
        score = 0;
        questionCount = 0;
        updateScore();
        updatePlayer();
        document.querySelector('.submit-button').disabled = false;
    }

    updatePlayer();
    updateScore();

    document.querySelector('.submit-button').addEventListener('click', function (event) {
        event.preventDefault();


        // get users answer
        let userAnswer = document.getElementById('answer-box').value.trim();

        // compare user answer with correct answer
        if (userAnswer.toLowerCase() === currentPlayer.name.toLowerCase()) {

            document.getElementById('feedback-message').textContent = "Shoots and scores! Well done!";
            score++;
            updateScore();

        } else {

            document.getElementById('feedback-message').textContent = `What a miss! The correct answer was ${currentPlayer.name}.`;
        }


        //increment the questions
        questionCount++;

        if (questionCount < totalQuestions) {

            // Move to next player after 2 second delay
            setTimeout(updatePlayer, 2000);

        } else {
            setTimeout(function () {
                let playAgain = confirm(`There's the final whistle! Your score is ${score} out of ${totalQuestions}.`);
                if (playAgain) {
                    restartGame();
                } else {
                    document.querySelector('.submit-button').disabled = true;
                }
            }, 2000);
        }
        console.log("Feedback message set");
    });

});