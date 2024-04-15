// Sound effecst
// CoinPickup Sound
function CoinPickup() {
    let audio = new Audio('mp3/CoinPickup.mp3')
    audio.volume = 0.2;
    audio.play();
}
// Buy Sound
function BuySound() {
    let audio = new Audio('mp3/BuySound.mp3')
    audio.volume = 0.2;
    audio.play();
}
// Money Lose Sound 
function MoneyLose() {
    let audio = new Audio('mp3/MoneyLose.mp3')
    audio.volume = 0.2;
    audio.play();
}