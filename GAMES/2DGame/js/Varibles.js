if (localStorage.getItem("DATA_Speed_lvl") === null) {
    localStorage.setItem("DATA_Speed_lvl", 0)
    localStorage.setItem("DATA_Speed_cost", 50)
}

if (localStorage.getItem("DATA_Fortune_lvl") === null) {
    localStorage.setItem("DATA_Fortune_lvl", 0)
    localStorage.setItem("DATA_Fortune_cost", 50)
}
if (localStorage.getItem("DATA_Reduction_lvl") === null) {
    localStorage.setItem("DATA_Reduction_lvl", 0)
    localStorage.setItem("DATA_Reduction_cost", 50)
}
if (localStorage.getItem("DATA_Shield_Cooldown_lvl") === null) {
    localStorage.setItem("DATA_Shield_Cooldown_lvl", 0)
    localStorage.setItem("DATA_Shield_Cooldown_cost", 150)
}
if (localStorage.getItem("DATA_Pasiff_lvl") === null) {
    localStorage.setItem("DATA_Pasiff_lvl", 0)
    localStorage.setItem("DATA_Pasiff_cost", 20000)
}
if (localStorage.getItem("DATA_Shield_Duraction_lvl") === null) {
    localStorage.setItem("DATA_Shield_Duraction_lvl", 0)
    localStorage.setItem("DATA_Shield_Duraction_cost", 150)
}

if (localStorage.getItem("DATA_Money") === null) localStorage.setItem("DATA_Money", 200)


var PlayerHeight = document.getElementById("player").clientHeight,
    PlayerWidth = document.getElementById("player").clientWidth;

var PlayerY = parseInt(window.innerHeight / 2 - window.innerHeight / 20),
    PlayerX = 1;

var PlayerPov = 'R';

var CoinWidth = document.getElementById("Coin").clientWidth,
    CoinHeight = document.getElementById("Coin").clientHeight;

var CoinY = parseInt(Math.random() * (919 - CoinHeight)),
    CoinX = parseInt(Math.random() * (919 - CoinWidth));

var fps = 18, fpsinput, fpsmultiplier, Gameloopid;

var Money = parseInt(localStorage.getItem("DATA_Money")), TotalCollect = 0;

var Spike = true;

var SpikeY = [],
    SpikeX = [];
var SpikeWidth = document.getElementById("Spike1").clientWidth,
    SpikeHeight = document.getElementById("Spike1").clientHeight;

var is_SpikeY_contact_PlayerY = false, is_SpikeY_contact_CoinY = false, is_SpikeY_contact_otherSpikesY = false, SpikeY_contact_counter = 0,
    is_SpikeX_contact_PlayerX = false, is_SpikeX_contact_CoinX = false, is_SpikeX_contact_otherSpikesX = false, SpikeX_contact_counter = 0;

var Right = false,
    Left = false,
    Up = false,
    Down = false;

var Backgroundnum = 1;

var Animationcap = 0,
    AnimationLeft = false,
    AnimationRight = false;

var Flip = false;

var ERAYMODU = false, ERAYMODUCap = 0;

// on/off
var Marketopen = false,
    Collectionopen = false,
    Soundopen = true,
    HTPOpen = true;

// Market items
var MarketItemList = [
    { Name: "Speed", Level: localStorage.getItem("DATA_Speed_lvl"), Cost: localStorage.getItem("DATA_Speed_cost"), },
    { Name: "Fortune", Level: localStorage.getItem("DATA_Fortune_lvl"), Cost: localStorage.getItem("DATA_Fortune_cost") },
    { Name: "Reduction", Level: localStorage.getItem("DATA_Reduction_lvl"), Cost: localStorage.getItem("DATA_Reduction_cost") },
    { Name: "Shield_Cooldown", Level: localStorage.getItem("DATA_Shield_Cooldown_lvl"), Cost: localStorage.getItem("DATA_Shield_Cooldown_cost") },
    { Name: "Pasiff", Level: localStorage.getItem("DATA_Pasiff_lvl"), Cost: localStorage.getItem("DATA_Pasiff_cost") },
    { Name: "Shield_Duraction", Level: localStorage.getItem("DATA_Shield_Duraction_lvl"), Cost: localStorage.getItem("DATA_Shield_Duraction_cost") }];
// Buffs
var MomentSpeed = 8 + parseInt(MarketItemList[0].Level),
    Fortune = MarketItemList[1].Level * 10,
    Reduction = MarketItemList[2].Level * 4;

if (MarketItemList[4].Level === 1) var Pasiff = "ON";
else var Pasiff = "OFF";

if ((MarketItemList[3].Level * 4) > 29)
    var ShieldCD = 0

else {
    var ShieldCD = 29 - MarketItemList[3].Level * 4,
        Shield = MarketItemList[5].Level;
}


