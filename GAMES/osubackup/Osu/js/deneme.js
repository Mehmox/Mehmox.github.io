function Objectevent() {
    var key = TotalCircleNum % 10
    switch (key) {
        case 1:
            Slot_1(TotalCircleNum);
            break;
        case 2:
            Slot_2(TotalCircleNum);
            break;
        case 3:
            Slot_3(TotalCircleNum);
            break;
        case 4:
            Slot_4(TotalCircleNum);
            break;
        case 5:
            Slot_5(TotalCircleNum);
            break;
        case 6:
            Slot_6(TotalCircleNum);
            break;
        case 7:
            Slot_7(TotalCircleNum);
            break;
        case 8:
            Slot_8(TotalCircleNum);
            break;
        case 9:
            Slot_9(TotalCircleNum);
            break;
        case 0:
            Slot_10(TotalCircleNum);
            break;
    }
}
function Slot_1(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_2(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_3(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_4(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_5(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_6(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_7(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_8(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_9(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}
function Slot_10(Object_num) {
    Object_datas["Engine" + Object_num].CirclePoint = 0;
    Timing_0id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_Before(); }, score_before_ms)
    function Score50_Before() {
        Object_datas["Engine" + Object_num].Timing_50id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_Before(); }, score_50_ms)
    }
    function Score100_Before() {
        Object_datas["Engine" + Object_num].Timing_100id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 300; Score_300(); }, score_100_ms)
    }
    function Score_300() {
        Object_datas["Engine" + Object_num].Timing_300id = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 100; Score100_After(); }, score_300_ms + BPM_ms);
    }
    function Score100_After() {
        Object_datas["Engine" + Object_num].Timing_100id2 = setTimeout(() => { Object_datas["Engine" + Object_num].CirclePoint = 50; Score50_After(); }, score_100_ms);
    }
    function Score50_After() {
        Object_datas["Engine" + Object_num].Timing_50id2 = setTimeout(Object_datas["Engine" + Object_num].CirclePoint = 0, score_50_ms);
    }
}