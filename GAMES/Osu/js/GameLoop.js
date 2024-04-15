function GameLoop() {
    if (Start_Countdown_Second === 0) {
        Circle_Set();// Sets new target pos
        try { clearInterval(Obje[CurrentCircleNum - 1].Out_line_Animation_id) } catch (error) { }
        Daire_Skor1.style.opacity = "0%";
        HCount_Down.innerHTML = "";
        windowW = (window.innerWidth - 1130) / 2;
        Player_Clicked = false;
        ComboReset();// Combo reset
        if (TotalCircleNum % 5 === 0) Daire_Tiklama_alani1.innerText = 5;
        else Daire_Tiklama_alani1.innerText = TotalCircleNum % 5;// Inner target  TotalCircleNum>
        HTotal_Circle.innerHTML = TotalCircleNum;// Total target  TotalCircleNum>
        Accuracy = (1 + Success_Hit) / TotalCircleNum * 100;
        // Obje[CurrentCircleNum].Out_line_Animation_id = setInterval(Circle__background_outline, BPM_ms / 21);
        BPM_UPDATE();// BPM_ms calculate
        HCurrnet_BPM.innerHTML = "Currrent<br>BPM:" + (1000 / (BPM_ms) * 60).toFixed(0);
        Engine();//Hit_Faze control
        TotalCircleNum++;
        CurrentCircleNum++;
    }
    else {
        Start_Countdown_Second--;
        HCount_Down.innerHTML = Start_Countdown_Second + 1;
    }
    if (CurrentCircleNum > 30) reset();
    else BaseLoopid = setTimeout(GameLoop, BPM_ms);
}
function ComboReset() {// Combo reset
    if (Obje[CurrentCircleNum].isClicble === true && Combo !== 0) { Combo = 0; ComboresetSound(); }
}
function Circle_Set() {// Sets new target pos
    if (Test_Mod === true) {
        circleY = 200;
        circleX = 200;
    } else {
        circleY = Obje[TotalCircleNum].Y * TotalCircleNum;
        circleX = Obje[TotalCircleNum].X * TotalCircleNum;
    }
    Daire_butun_alan1.style.left = circleX + "px";
    Daire_butun_alan1.style.bottom = circleY + "px";
    Daire_butun_alan1.style.opacity = 100;
}
function BPM_UPDATE() {// BPM_ms calculate
    if (inputBPM < 30 && Test_Mod === false) { inputBPM = 30; }
    if (mode === 'N') { BPM_ms = 1000 / ((inputBPM) / 60); }
    else BPM_ms = 1000 / ((inputBPM + Combo) / 60);
}