// Market Menu on/off
function MarketMenu() {
    if (Marketopen === false) {
        Marketopen = true;
        document.getElementById("Market").style.zIndex = 100;
        document.getElementById("Market").style.opacity = 100;
    }
    else {
        Marketopen = false;
        document.getElementById("Market").style.zIndex = -1;
        document.getElementById("Market").style.opacity = 0;
    }
}
function ItemShop(Marketitem) {
    if (Marketitem != undefined && Money >= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100))) {
        switch (Marketitem) {
            case 0:
                if (MarketItemList[Marketitem].Level < 7 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    MomentSpeed += 1;
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
            case 1:
                if (MarketItemList[Marketitem].Level < 20 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    Fortune += 10;
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
            case 2:
                if (MarketItemList[Marketitem].Level < 20 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    Reduction += 4;
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
            case 3:
                if (MarketItemList[Marketitem].Level < 5 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
            case 4:
                if (Pasiff === "OFF" && MarketItemList[Marketitem].Level < 1 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    Pasiff = "ON";
                    setInterval(PasiffCoin, 1000)
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
            case 5:
                if (MarketItemList[Marketitem].Level < 3 || ERAYMODU === true) {
                    Money -= parseInt(MarketItemList[Marketitem].Cost / (1 + Reduction / 100));
                    MarketItemList[Marketitem].Level++;
                    if (Soundopen) BuySound();
                    MarketItemList[Marketitem].Cost = Math.floor(MarketItemList[Marketitem].Cost * 1.7);
                }
                break;
        }
        document.getElementById("Money").innerHTML = Money;
    }
}



//  Collection on/off 
function CollectionMenu() {
    if (Collectionopen === false) { Collectionopen = true; document.getElementById("Collection").style.zIndex = 100; }
    else { Collectionopen = false; document.getElementById("Collection").style.zIndex = -1; }
}
function Collections() {
    document.getElementById("Collection").innerHTML =
        (`
        Collections:<br>
        TotalCoinCollect: ${TotalCollect}<br>
        `)
}

//  How to play Menu on/off 
function HTPMenu() {
    if (HTPOpen === true) { HTPOpen = false; document.getElementById("Help").style.opacity = 0; }
    else { HTPOpen = true; document.getElementById("Help").style.opacity = 100; }
}