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
        club: "Southampton and Liverpool",
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
    },
    {
        name: "Didier Drogba",
        club: "Chelsea",
        position: "Striker",
        nationality: "Cote d'Ivoire",
        image: "didier_drogba.jpeg"
    },
    {
        name: "Steven Gerrard",
        club: "Liverpool",
        position: "Midfielder",
        nationality: "England",
        image: "steven_gerrard.jpeg"
    },
    {
        name: "Ryan Giggs",
        club: "Manchester United",
        position: "Left midfielder",
        nationality: "Wales",
        image: "ryan_giggs.jpeg"
    },
    {
        name: "Thierry Henry",
        club: "Arsenal",
        position: "Forward",
        nationality: "France",
        image: "thierry_henry.jpeg"
    },
    {
        name: "Alan Shearer",
        club: "Blackburn and Newcastle",
        position: "Striker",
        nationality: "England",
        image: "alan_shearer.jpeg"
    },
    {
        name: "Petr Cech",
        club: "Chelsea and Arsenal",
        position: "Goalkeeper",
        nationality: "Czech",
        image: "petr_cech.jpeg"
    },
    {
        name: "Wayne Rooney",
        club: "Everton and Manchester United",
        position: "Forward",
        nationality: "England",
        image: "wayne_rooney.jpeg"
    },
    {
        name: "Patrick Vieira",
        club: "Arsenal and Manchester City",
        position: "Midfielder",
        nationality: "France",
        image: "patrick_vieira.jpeg"
    },
    {
        name: "Sergio Aguero",
        club: "Manchester City",
        position: "Striker",
        nationality: "Argentina",
        image: "sergio_aguero.jpeg"
    },
    {
        name: "David Beckham",
        club: "Manchester United",
        position: "Right Midfielder",
        nationality: "England",
        image: "david_beckham.jpeg"
    },
    {
        name: "Roy Keane",
        club: "Nottingham Forest and Manchester United",
        position: "Midfielder",
        nationality: "Ireland",
        image: "roy_keane.jpeg"
    },
    {
        name: "Dennis Bergkamp",
        club: "Arsenal",
        position: "Forward",
        nationality: "Netherlands",
        image: "dennis_bergkamp.jpeg"
    },
    {
        name: "David Silva",
        club: "Manchester City",
        position: "Midfielder",
        nationality: "Spain",
        image: "david_silva.jpeg"
    },
    {
        name: "Cesc Fabregas",
        club: "Arsenal and Chelsea",
        position: "Midfielder",
        nationality: "Spain",
        image: "cesc_fabregas.jpeg"
    },
    {
        name: "Harry Kane",
        club: "Tottenham",
        position: "Striker",
        nationality: "England",
        image: "harry_kane.jpeg"
    },
    {
        name: "Eden Hazard",
        club: "Chelsea",
        position: "Forward",
        nationality: "Belgium",
        image: "eden_hazard.jpeg"
    },
    {
        name: "Gareth Barry",
        club: "Aston Villa, Manchester City, Everton and West Brom",
        position: "Midfielder",
        nationality: "England",
        image: "gareth_barry.jpeg"
    },
    {
        name: "Mark Schwarzer",
        club: "Middlesbrough, Fulham, Chelsea and Leicester",
        position: "Goalkeeper",
        nationality: "Australia",
        image: "mark_schwarzer.jpeg"
    }


];

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");


    let unusedPlayers = [...players];
    let score = 0;
    let questionCount = 0;
    const totalQuestions = 10;
    let currentPlayer = null;
    let hintCounter = 0;

    function updatePlayer() {
        if (unusedPlayers.length === 0) {
            console.error("No players left to display.");
            return;
        }

        // selecting a random player from the unused players
        let randomIndex = Math.floor(Math.random() * unusedPlayers.length);
        currentPlayer = unusedPlayers[randomIndex];
        const playerImage = document.getElementById("player-image");

        // image load blurred 
        playerImage.className = "blurred";
        playerImage.src = `assets/images/players/${currentPlayer.image}`;


        // remove player from array 
        unusedPlayers.splice(randomIndex, 1);

        // clear feedback input field and hints
        document.getElementById("answer-box").value = '';
        document.getElementById("answer-box").focus();
        document.getElementById('feedback-message').textContent = '';
        document.getElementById('hint1').textContent = '';
        document.getElementById('hint2').textContent = '';
        document.getElementById('hint3').textContent = '';

        hintCounter = 0;

    }

    function updateScore(points) {
        score += points; //increment score by points
        document.getElementById('score').textContent = score;
    }

    function restartGame() {
        unusedPlayers = [...players]; // reset players array
        score = 0;
        questionCount = 0;
        updateScore(0);
        updatePlayer();
        document.querySelector('.submit-button').disabled = false;
        document.getElementById("answer-box").focus();
    }


    function revealHint() {
        hintCounter++;
        const playerImage = document.getElementById("player-image");

        if (hintCounter === 1) {
            document.getElementById('hint1').textContent = `Hint 1: Position - ${currentPlayer.position}`;
            playerImage.classList.replace("blurred", "reveal-1");

        } else if (hintCounter === 2) {
            document.getElementById('hint2').textContent = `Hint 2: Nationality - ${currentPlayer.nationality}`;
            playerImage.classList.replace("reveal-1", "reveal-2");

        } else if (hintCounter === 3) {
            document.getElementById('hint3').textContent = `Hint 3: Club - ${currentPlayer.club}`;
            playerImage.classList.replace("reveal-2", "reveal-3");

        } else if (hintCounter >= 4) {
            playerImage.classList.replace("reveal-3", "reveal-4");
            // correct answer displayed after image fully revealed
            document.getElementById('feedback-message').textContent = `Unlucky! The correct answer was ${currentPlayer.name}.`;
            setTimeout(nextImage, 3000);
        }
    }

    // points system, more hints = less points
    function calculatePoints(hintCounter) {
        switch (hintCounter) {
            case 0:
                return 4;
            case 1:
                return 3;
            case 2:
                return 2;
            case 3:
                return 1;
            default:
                return 0;
        }
    }

    function nextImage() {
        //increment the questions if the user is correct
        questionCount++;

        if (questionCount < totalQuestions) {
            updatePlayer();
        } else {
            setTimeout(function () {
                let playAgain = confirm(`There's the final whistle! Your score is ${score} out of ${totalQuestions * 4}.`);
                if (playAgain) {
                    restartGame();
                } else {
                    document.querySelector('.submit-button').disabled = true;
                }
            }, 2000);
        }

    }

    updatePlayer();
    updateScore(0);

    document.getElementById("answer-box").addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            document.querySelector('.submit-button').click();
        }
    })

    document.querySelector('.submit-button').addEventListener('click', function (event) {


        // get users answer
        let userAnswer = document.getElementById('answer-box').value.trim();

        // compare user answer with correct answer
        if (userAnswer.toLowerCase() === currentPlayer.name.toLowerCase()) {

            document.getElementById('feedback-message').textContent = "Shoots and scores! Well done!";

            // calculate points based on hints
            let points = calculatePoints(hintCounter);
            updateScore(points);

            // reveal unblurred image if user correct
            document.getElementById("player-image").classList.remove("blurred", "reveal-1", "reveal-2", "reveal-3");
            document.getElementById("player-image").classList.add("reveal-4");


            setTimeout(nextImage, 2000);

        } else {
            document.getElementById('feedback-message').textContent = "What a miss!";
            document.getElementById("answer-box").focus(); //keep focus in answer box after incorrect guesses
            if (hintCounter < 4) {
                revealHint(); // Hint for user if answer is incorrect
            } else {
                setTimeout(nextImage, 2000);
            }
        }

        console.log("Feedback message set");
    });

});