var Test_Mod = false;
var windowW = (window.innerWidth - 1130) / 2;
var windowH = (window.innerHeight - 846) / 2;
var mousePosX, mousePosY;

const
    Daire_butun_alan1 = document.getElementById("Daire_butun_alan1"),
    Daire_Tiklama_alani1 = document.getElementById("Daire_Tiklama_alani1"),
    Daire_Skor1 = document.getElementById("Daire_Skor1"),

    Daire_butun_alan2 = document.getElementById("Daire_butun_alan2"),
    Daire_Tiklama_alani2 = document.getElementById("Daire_Tiklama_alani2"),
    Daire_Skor2 = document.getElementById("Daire_Skor2"),

    Daire_butun_alan3 = document.getElementById("Daire_butun_alan3"),
    Daire_Tiklama_alani3 = document.getElementById("Daire_Tiklama_alani3"),
    Daire_Skor3 = document.getElementById("Daire_Skor3"),

    Daire_butun_alan4 = document.getElementById("Daire_butun_alan4"),
    Daire_Tiklama_alani4 = document.getElementById("Daire_Tiklama_alani4"),
    Daire_Skor4 = document.getElementById("Daire_Skor4"),

    // Circles = document.gete("Circle"),

    HCount_Down = document.getElementById("CountDown"),
    HCurrnet_BPM = document.getElementById("Current-BPM"),
    HTotal_Circle = document.getElementById("Total-Circle"),
    HCombo = document.getElementById("COMBO"),
    HScore = document.getElementById("SCORE"),
    HPercent = document.getElementById("PERCENT");

var Updateid,
    BaseLoopid;

var Delay = 0, Start_Countdown_Second = Delay;

const mode = localStorage.getItem("Game_Mode");

var OD = localStorage.getItem("Game_OD"),
    AR = localStorage.getItem("Game_AR"),
    CS = localStorage.getItem("Game_CS");

var circleX,
    circleY,
    circleW = 228 - 19 * CS,
    circleH = 228 - 19 * CS,
    Daire_butun_alan_boyutu = 228;

Daire_Tiklama_alani1.style.width = circleW + "px";
Daire_Tiklama_alani1.style.height = circleH + "px";

Daire_butun_alan1.style.width = circleW * CS + "px"
Daire_butun_alan1.style.height = circleH * CS + "px"
Daire_butun_alan1.style.backgroundSize = 200 * CS + "px"


const
    score_before_ms = 0 * OD,
    score_300_ms = 200 - 10 * OD,
    score_100_ms = 140 - 8 * OD,
    score_50_ms = 80 - 6 * OD;

var Score = 0,
    TotalCircleNum = 1,
    CurrentCircleNum = 1,
    Success_Hit = 0,
    Combo = 0,
    BPM_ms = 1000,
    inputBPM = parseInt(localStorage.getItem("inputBPM")),
    Player_Clicked = false,
    Accuracy = 100;

function SetVeribles() {// Setting map varibles
    if (typeof Obje !== 'undefined') {
        delete Obje;
    }
    window.Obje = {}
    for (let i = 1; i <= 30; i++) {
        Obje[i] = Map1[i];
    }
    // console.log(Obje)
}

































// var EngineObjects = {}
// var Engine_counter = 0;
// for (let i = 1; i < Engine_counter; i++) {
//     delete EngineObjects[i]
// } Engine_counter = 0;
// for (let i = 1; i <= 10; i++) {
//     EngineObjects[i] = {

//     };
//     Engine_counter++;
// }
// console.log(Object_Datas)