function Engine() {
    var key = TotalCircleNum % 10 + 1
    switch (key) {
        // case 1:
        //     Piston_1(TotalCircleNum);
        //     break;
        // case 2:
        //     Piston_2(TotalCircleNum);
        //     break;
        // case 3:
        //     Piston_3(TotalCircleNum);
        //     break;
        // case 4:
        //     Piston_4(TotalCircleNum);
        //     break;
        // case 5:
        //     Piston_5(TotalCircleNum);
        //     break;
        // case 6:
        //     Piston_6(TotalCircleNum);
        //     break;
        // case 7:
        //     Piston_7(TotalCircleNum);
        //     break;
        // case 8:
        //     Piston_8(TotalCircleNum);
        //     break;
        // case 9:
        //     Piston_9(TotalCircleNum);
        //     break;
        // case 10:
        //     Piston_10(TotalCircleNum);
        //     break;
    }
}
function Piston_1(num) {
    Obje[num].CirclePoint = 0;
    Obje[num].Timing_beforeid = setTimeout(() => { Obje[num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Obje[num].Timing_50id = setTimeout(() => { Obje[num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Obje[num].Timing_100id = setTimeout(() => { Obje[num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Obje[num].Timing_300id = setTimeout(() => { Obje[num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Obje[num].Timing_100id2 = setTimeout(() => { Obje[num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Obje[num].Timing_50id2 = setTimeout(Obje[num].CirclePoint = 0, score_50_ms);
    }
}


function Circle__background_outline() {
    if (Obje[TotalCircleNum].Out_line_Animation_var > 63 ||
        Obje[CurrentCircleNum].isClicble === false) {
        Daire_butun_alan.style.backgroundSize = ("0%");
        clearInterval(Obje[CurrentCircleNum].Out_line_Animation_id)
    }
    if (Obje[CurrentCircleNum].isClicble === true) {
        Daire_butun_alan.style.backgroundSize = (100 - Obje[TotalCircleNum].Out_line_Animation_var + "%");
        Obje[TotalCircleNum].Out_line_Animation_var += 3;
    }

}

function ScoreHide() {
    Daire_Skor1.style.opacity = 100 - Obje[CurrentCircleNum].Score_Animation_var + "%";
    if (Obje[CurrentCircleNum].Score_Animation_var > 90) {
        clearInterval(Obje[CurrentCircleNum].Score_Animation_id)
    }
    Obje[CurrentCircleNum].Score_Animation_var += 10;
}