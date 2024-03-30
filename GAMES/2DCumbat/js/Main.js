window.onload = Start;
let Wawe = 1;
let Mobs = [
    {
        Type: "Balloon",
        HP: 10,
        Speed: 15,
        Armor: 2
    },
    {
        Type: "Speedy_Balloon",
        HP: "8",
        Speed: 60,
        Armor: 2
    }
], DefenseTowers = [
    {
        type: "Minigun",
        LVL: 1,
        LVL_up_Cost: 150,
        DMG: 2,
        AttackSpeed: 200,
        try: this.LVL
    }
]
function Start() {
    // setInterval(Game(), 5)
    NewWaweSetup();
}
let mobs;
let EnemyDiv = document.getElementById("Enemy");
let i = 0;
function Game() {
    mobs = document.createElement("img");
    mobs.src = "img/Baloon.png"
    mobs.id = "Enemy" + i;
    mobs.className = "Moving-enemies";
    EnemyDiv.appendChild(mobs);
    document.getElementById("base").appendChild(EnemyDiv);
    i++;
}

function NewWaweSetup() {
    console.log(DefenseTowers.try)
}
