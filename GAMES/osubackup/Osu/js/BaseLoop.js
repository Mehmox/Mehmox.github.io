function BaseLoop() {
    if (Start_Countdown_Second === 0) {
        clearInterval(Objects["Map_Object" + TotalCircleNum].Out_line_Animation_id)
        Daire_Skor.style.opacity = "0%";
        HCount_Down.innerHTML = "";
        windowW = (window.innerWidth - 920) / 2;
        Player_Clicked = false;
        ComboReset();// Combo reset
        Circle_Set();// Sets new target pos
        if (TotalCircleNum % 5 === 0) Daire_Tiklama_alani.innerText = 5;
        else Daire_Tiklama_alani.innerText = TotalCircleNum % 5;// Inner target "Map_Object" + TotalCircleNum>
        HTotal_Circle.innerHTML = TotalCircleNum;// Total target "Map_Object" + TotalCircleNum>
        Accuracy = (1 + Success_Hit) / TotalCircleNum * 100;
        TotalCircleNum++;
        Objects["Map_Object" + TotalCircleNum].Out_line_Animation_id = setInterval(Circle__background_outline, BPM_ms / 21);
        BPM_UPDATE();// BPM_ms calculate
        HCurrnet_BPM.innerHTML = "Currrent<br>BPM:" + (1000 / (BPM_ms) * 60).toFixed(0);
        Objectevent();//Hit_Faze control
    }
    else {
        Start_Countdown_Second--;
        HCount_Down.innerHTML = Start_Countdown_Second + 1;
    }
    BaseLoopid = setTimeout(BaseLoop, BPM_ms);
}
function Timing() {//Hit_Faze control
    function Score_Before() {
        Hit_Faze = 0;
        Timing_0id = setTimeout(() => { Hit_Faze = 50; Score50_Before(); }, Objects["Map_Object" + TotalCircleNum].Timing_0id * OD)
    }
    function Score50_Before() {
        // console.log("for 50")
        Timing_50id = setTimeout(() => { Hit_Faze = 100; Score100_Before(); }, 200 - Objects["Map_Object" + TotalCircleNum].Timing_50id * OD)
    }
    function Score100_Before() {
        // console.log("for 100")
        Timing_100id = setTimeout(() => { Hit_Faze = 300; Score_300(); }, 140 - Objects["Map_Object" + TotalCircleNum].Timing_100id * OD)
    }
    function Score_300() {
        // console.log("for 300")
        Timing_300id = setTimeout(() => { Hit_Faze = 100; Score100_After(); }, 80 - Objects["Map_Object" + TotalCircleNum].Timing_300id * OD + BPM_ms);
    }
    function Score100_After() {
        // console.log("for 100")
        Timing_100id2 = setTimeout(() => { Hit_Faze = 50; Score50_After(); }, 140 - Objects["Map_Object" + TotalCircleNum].Timing_100id * OD);
    }
    function Score50_After() {
        // console.log("for 50")
        Timing_50id2 = setTimeout(Hit_Faze = 0, 200 - Objects["Map_Object" + TotalCircleNum].Timing_0id * OD);
    }
}
function Circle__background_outline() {
    if (Objects["Map_Object" + TotalCircleNum].Out_line_Animation_var > 63 ||
        Circle_Clickble === false) {
        Daire_butun_alan.style.backgroundSize = ("0%");
        clearInterval(Objects["Map_Object" + TotalCircleNum].Out_line_Animation_id)
    }
    if (Circle_Clickble === true) {
        Daire_butun_alan.style.backgroundSize = (100 - Objects["Map_Object" + TotalCircleNum].Out_line_Animation_var + "%");
        Objects["Map_Object" + TotalCircleNum].Out_line_Animation_var += 3;
    }

}
function Circle_Set() {// Sets new target pos
    if (Test_Mod === true) {
        circleY = 200;
        circleX = 200;
    } else {
        circleY = Objects["Map_Object" + TotalCircleNum].Y * TotalCircleNum;
        circleX = Objects["Map_Object" + TotalCircleNum].X * TotalCircleNum;
    }
    Daire_butun_alan.style.left = circleX + "px";
    Daire_butun_alan.style.bottom = circleY + "px";
    Daire_butun_alan.style.opacity = 100;
}
function ScoreHide() {
    Daire_Skor.style.opacity = 100 - Objects["Map_Object" + TotalCircleNum].Score_Animation_var + "%";
    if (Objects["Map_Object" + TotalCircleNum].Score_Animation_var > 90) {
        clearInterval(Objects["Map_Object" + TotalCircleNum].Score_Animation_id)
    }
    Objects["Map_Object" + TotalCircleNum].Score_Animation_var += 10;
}
function ComboReset() {// Combo reset
    if (Circle_Clickble === true && Combo !== 0) { Combo = 0; ComboresetSound(); }
    Circle_Clickble = true;
}


function BPM_UPDATE() {// BPM_ms calculate
    if (inputBPM < 30 && Test_Mod === false) { inputBPM = 30; }
    if (mode === 'H') { BPM_ms = 1000 / ((inputBPM) / 60); }
    else BPM_ms = 1000 / ((inputBPM + Combo) / 60);
}