function TestModToggle() {
    if (Test_Mod === false) { Test_Mod = true; inputBPM = 120; }
    else { Test_Mod = false; inputBPM = localStorage.getItem("inputBPM"); }
}