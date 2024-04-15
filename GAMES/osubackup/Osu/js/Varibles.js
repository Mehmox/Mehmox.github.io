var Test_Mod = false;
var windowW = (window.innerWidth - 920) / 2;
var mousePosX, mousePosY;

const HCount_Down = document.getElementById("CountDown"),
    Daire_butun_alan = document.getElementById("Daire_butun_alan"),
    Daire_Tiklama_alani = document.getElementById("Daire_Tiklama_alani"),
    Daire_Skor = document.getElementById("Daire_Skor"),

    HCurrnet_BPM = document.getElementById("Current-BPM"),
    HTotal_Circle = document.getElementById("Total-Circle"),
    HCombo = document.getElementById("COMBO"),
    HScore = document.getElementById("SCORE"),
    HPercent = document.getElementById("PERCENT");

var Updateid,
    BaseLoopid;

var circleX, circleY,
    circleH = 62,
    circleW = 62,
    Daire_butun_alan_boyutu = (200 - circleW) / 2;

var Delay = 0, Start_Countdown_Second = Delay;

const mode = localStorage.getItem("Game_Mode");

var OD = localStorage.getItem("Game_OD"),
    AR = localStorage.getItem("Game_AR"),
    CS = localStorage.getItem("Game_CS");

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
    Circle_Clickble = false,
    Player_Clicked = false,
    Accuracy = 100;

var Objects = {}
var Object_counter = 1;
function SetVeribles() {// Setting map varibles
    for (let i = 1; i < Object_counter; i++) {
        delete Objects["Map_Object" + Object_counter]
        Object_counter++;
    }
    for (let i = 1; i <= 30; i++) {
        Objects["Map_Object" + i] = Map1["Map_Object" + i];
    }
    console.log(Objects)
    for (let i = 1; i <= 10; i++) {
        Object_datas["Engine" + i] = {
            CirclePoint: undefined,
            Timing_50id: undefined,
            Timing_100id: undefined,
            Timing_300id: undefined,
            Timing_100id2: undefined,
            Timing_50id2: undefined,
        };
    }
    console.log(Object_datas)
}

var Object_datas = {

}