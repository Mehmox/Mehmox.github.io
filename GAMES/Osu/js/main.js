window.onload = Start;

function Start() {
    SetVeribles();// Setting map varibles
    Updateid = setInterval(Update, 5)
    GameLoop();
    //Use İnputs
    userKeyin(); userKeyout(); userMouseposition();
    //Use İnputs End
}
function Update() {
    if (Combo !== 0) HCombo.innerHTML = Combo + "X";
    else HCombo.innerHTML = Combo;
    HScore.innerHTML = Score;
    HPercent.innerHTML = Accuracy.toFixed(2);
}
function reset() {
    clearInterval(Updateid)
    clearTimeout(BaseLoopid)
    for (let i = 0; i < 50; i++) {
        clearTimeout(i)
        clearInterval(i)
    }
    Daire_butun_alan1.style.opacity = 0;
    Start_Countdown_Second = Delay;
    Score = 0;
    TotalCircleNum = 1;
    CurrentCircleNum = 1;
    Success_Hit = 0;
    Combo = 0;
    BPM_ms = 1000;
    Player_Clicked = false;
    Accuracy = 100;
    HCombo.innerHTML = Combo;
    HScore.innerHTML = Score;
    HPercent.innerHTML = Accuracy.toFixed(2);
    Start();
}
function UserEvent(key) {
    switch (key) {
        case "sDown":
        case "dDown":
        case "yDown":
        case "uDown":
            if (Obje[CurrentCircleNum].isClicble === false && Player_Clicked === true) {
                console.log("basılabilir değil")
                return
            }
            if (circleY + Daire_butun_alan_boyutu <= mousePosY && mousePosY <= circleY + Daire_butun_alan_boyutu + circleH) {
                if (circleX + Daire_butun_alan_boyutu <= mousePosX && mousePosX <= circleX + Daire_butun_alan_boyutu + circleW) {
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_0id) } catch (error) { }
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_50id) } catch (error) { }
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_100id) } catch (error) { }
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_300id) } catch (error) { }
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_100id2) } catch (error) { }
                    try { clearTimeout(Obje[CurrentCircleNum].Timing_50id2) } catch (error) { }
                    Daire_butun_alan1.style.opacity = 0;
                    Daire_Skor1.style.left = circleX + Daire_butun_alan_boyutu + 8 + "px";
                    Daire_Skor1.style.bottom = circleY + Daire_butun_alan_boyutu + 20 + "px";
                    // Obje[TotalCircleNum].Score_Animation_id = setInterval(ScoreHide, 20)
                    if (Obje[CurrentCircleNum].CirclePoint === 300 ||
                        Obje[CurrentCircleNum].CirclePoint === 100 ||
                        Obje[CurrentCircleNum].CirclePoint === 50)
                        Daire_Skor1.innerText = Obje[CurrentCircleNum].CirclePoint;
                    else Daire_Skor1.innerText = " 0";
                    Obje[CurrentCircleNum].isClicble = false;
                    Combo++;
                    Success_Hit++;
                    hitsound();
                }
            }
            if (Test_Mod === false) Player_Clicked = true;
            break;
        case "EscapeDown":
        case "bDown":
        case "EnterDown":
            window.location.href = "index.html";
            break;
        case "xDown":
        case "XDown":
            TestModToggle();
            break;
        case '"Down':
            reset();
            break;
    }
}