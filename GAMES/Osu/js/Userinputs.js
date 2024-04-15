function userKeyin() {
    window.addEventListener("keydown", function (event) { UserEvent(event.key + "Down") }
    )
}

function userKeyout() {
    window.addEventListener("keyup", function (event) { UserEvent(event.key + "Up") })
}

function userMouseposition() {
    window.addEventListener('mousemove',
        function (event) {
            mousePosX = event.clientX - windowW; mousePosY = 1079 - event.clientY - windowH;
        }
    )
}