// Game Key Down Momnets
function playermomentKeyUp(key) {
    switch (key) {
        case 'wUp':
        case 'WUp':
        case "ArrowUpUp":
            Up = false;
            Animationcap = 0;
            break;
        case 'sUp':
        case 'SUp':
        case "ArrowDownUp":
            Down = false;
            Animationcap = 0;
            break;
        case 'dUp':
        case 'DUp':
        case "ArrowRightUp":
            Right = false;
            AnimationRight = false;
            if (Left === true) { Flip = true; PlayerPov = 'L' }
            else Animationcap = 0;
            break;
        case 'aUp':
        case 'AUp':
        case "ArrowLeftUp":
            Left = false;
            AnimationLeft = false;
            if (Right === true) { Flip = true; PlayerPov = 'R' }
            else Animationcap = 0;
            break;
    }
    if (Up === false && Down === false && Right === false && Left === false) {
        AnimationRight = false;
        AnimationLeft = false;
        if (PlayerPov === 'R') document.getElementById("player").src = "img/Rred.png";
        else document.getElementById("player").src = "img/Lred.png";
    }
}
// Game Key Down Momnets
function playermomentKeyDown(key) {
    switch (key) {
        case 'wDown':
        case 'WDown':
        case "ArrowUpDown":
            Up = true;
            if (PlayerPov === 'R') AnimationRight = true;
            else AnimationLeft = true;
            break;
        case 'sDown':
        case 'SDown':
        case "ArrowDownDown":
            Down = true;
            if (PlayerPov === 'R') AnimationRight = true;
            else AnimationLeft = true;
            break;
        case 'dDown':
        case 'DDown':
        case "ArrowRightDown":
            Right = true;
            AnimationRight = true;
            if (Left === false) PlayerPov = 'R';
            break;
        case 'aDown':
        case 'ADown':
        case "ArrowLeftDown":
            Left = true;
            AnimationLeft = true;
            if (Right === false) PlayerPov = 'L';
            break;
        case "eDown":
        case "EDown":
            AbiltyUse();
            break;






        case 'mDown':
        case 'MDown':
            if (Soundopen) {
                Soundopen = false;
                document.getElementById("mute").src = "img/Mute.png";
                document.getElementById("mute").style.opacity = 100;
                document.getElementById("mute").style.zIndex = 100;
            }
            else {
                Soundopen = true;
                document.getElementById("mute").src = "";
                document.getElementById("mute").style.opacity = 0;
                document.getElementById("mute").style.zIndex = 0;
            }
            break;
        case 'bDown':
        case 'BDown':
            MarketMenu();
            break;
        case 'cDown':
        case 'CDown':
            CollectionMenu();
            break;
        case 'vDown':
        case 'VDown':
            Eray();
            break;
        case 'hDown':
        case 'HDown':
            HTPMenu();
            break;
        case 'zDown':
        case 'ZDown':
            if (Backgroundnum === 1) {
                Backgroundnum = 2;
                document.getElementById("map").style.backgroundImage = "url('img/Grass.png')";
                document.getElementById("map").style.backgroundRepeat = "no-repeat";
            } else {
                Backgroundnum = 1;
                document.getElementById("map").style.backgroundImage = "url('img/Cafeteria.png')";
                document.getElementById("map").style.backgroundRepeat = "cover";
            }
            break;
        case "EscapeDown":
        case "EnterDown":
            window.location = "index.html";
            break;
    }
}


// Geting Player Input
function PlayerinputDown() {
    window.addEventListener("keydown", function (event) { playermomentKeyDown(event.key + "Down") }
    )
}
function PlayerinputUp() {
    window.addEventListener("keyup", function (event) { playermomentKeyUp(event.key + "Up") })
}