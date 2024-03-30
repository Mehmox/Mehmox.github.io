function Coincord() {
    do {
        CoinY = parseInt(Math.random() * (919 - CoinHeight));
    } while (PlayerY <= CoinY && CoinY <= PlayerY + PlayerHeight || CoinY <= PlayerY && PlayerY <= CoinY + CoinHeight)
    do {
        CoinX = parseInt(Math.random() * (919 - CoinWidth));
    } while (PlayerX <= CoinX && CoinX <= PlayerX + PlayerWidth || CoinX <= PlayerX && PlayerX <= CoinX + CoinWidth)
}