const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    for(let i=0; i<players.length; i++){
        let newplayer ={}
        newplayer.name= players[i]
        newplayer.image = `./images/super-${i+1}.png`
        newplayer.strength = getRandomStrength()
        if(i%2==0){
            newplayer.type = "hero"
        }
        else{
            newplayer.type = "villain"
        }
        detailedPlayers.push(newplayer);
    }
    // Type your code here

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    return Math.ceil(Math.random() * 100)
    // Note: You can use Math.random() and Math.ceil()
}

const buildPlayers = (players, type) => {
    let fragment = '';
    

    // Loop through players and accumulate HTML template
    for(let i=0; i<players.length; i++){
        if(players[i].type==type){
            let items = `
            <div class="player">
          <img src="${players[i].image}" alt="">
          <div class="name">${players[i].name}</div>
          <div class="strength">${players[i].strength}</div>
        </div>`
        fragment += items;
        }
    }
    // depending of type of player(hero|villain)
    // Type your code here

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}