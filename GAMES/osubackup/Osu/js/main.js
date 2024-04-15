window.onload = Start;

function Start() {
    Updateid = setInterval(Update, 5)
    SetVeribles();// Setting map varibles
    Circle_Set();// New target pos
    BaseLoop();
    //Use İnputs
    userKeyin(); userKeyout(); userMouseposition();
    //Use İnputs End
}
function Update() {
    if (Combo !== 0) HCombo.innerHTML = Combo + "X";
    else HCombo.innerHTML = Combo;
    HScore.innerHTML = Score;
    HPercent.innerHTML = Accuracy.toFixed(2);
    if (TotalCircleNum >= 29) reset()
}
function reset() {
    clearInterval(Updateid)
    clearTimeout(BaseLoopid)

    for (let i = 0; i < 10; i++)
        clearTimeout(i)


    Daire_butun_alan.style.opacity = 0;
    Start_Countdown_Second = Delay;
    Score = 0;
    TotalCircleNum = 1;
    Success_Hit = 0;
    Combo = 0;
    BPM_ms = 1000;
    Circle_Clickble = false;
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
            if (Circle_Clickble === true && Player_Clicked === false) {
                if (circleY + Daire_butun_alan_boyutu <= mousePosY && mousePosY <= circleY + Daire_butun_alan_boyutu + circleH) {
                    if (circleX + Daire_butun_alan_boyutu <= mousePosX && mousePosX <= circleX + Daire_butun_alan_boyutu + circleW) {
                        if (Object_datas["Engine" + Object_num].CirclePoint === 300 || Object_datas["Engine" + Object_num].CirclePoint === 100 || Object_datas["Engine" + Object_num].CirclePoint === 50) Score += Object_datas["Engine" + Object_num].CirclePoint * (1 + Combo);

                        clearTimeout(Object_datas["Engine" + Object_num].Timing_0id)
                        clearTimeout(Object_datas["Engine" + Object_num].Timing_50id)
                        clearTimeout(Object_datas["Engine" + Object_num].Timing_100id)
                        clearTimeout(Object_datas["Engine" + Object_num].Timing_300id)
                        clearTimeout(Object_datas["Engine" + Object_num].Timing_100id2)
                        clearTimeout(Object_datas["Engine" + Object_num].Timing_50id2)
                        Daire_butun_alan.style.opacity = 0;
                        Daire_Skor.style.left = circleX + Daire_butun_alan_boyutu + 8 + "px";
                        Daire_Skor.style.bottom = circleY + Daire_butun_alan_boyutu + 20 + "px";
                        Objects["Map_Object" + TotalCircleNum].Score_Animation_id = setInterval(ScoreHide, 20)
                        if (Object_datas["Engine" + Object_num].CirclePoint === 300 || Object_datas["Engine" + Object_num].CirclePoint === 100 || Object_datas["Engine" + Object_num].CirclePoint === 50) Daire_Skor.innerText = Object_datas["Engine" + Object_num].CirclePoint;
                        else Daire_Skor.innerText = " 0";
                        Circle_Clickble = false;
                        Combo++;
                        Success_Hit++;
                        hitsound();
                    }
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
        case 'zDown':
            Objectevent();
            break;
    }
}