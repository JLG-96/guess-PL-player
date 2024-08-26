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

let randomPlayer = players[Math.floor(Math.random() * players.length)];

document.getElementById("player-image").src = `assets/images/players/${randomPlayer.image}`;