const line = [
    "DamageType", "Universe", "Class",
    "Combatlvl", "Catacomblvl", "Classlvl",
    "Bestiary", "BASESTR", "BASECRITD",
    "BASEInt", "MP", "MPR",
    "LegionLvL", "LegionP", "MasterSkull",
    "Weapon", "WeaponStar", "WeaponReforge",
    "WeaponRecomb", "Helmet", "HelmetStar",
    "HelmetReforge", "HelmetRecomb", "ChestPlate",
    "ChestPlateStar", "ChestPlateReforge", "ChestPlateRecomb",
    "Leggings", "LeggingsStar", "LeggingsReforge",
    "LeggingsRecomb", "Boots", "BootsStar",
    "BootsReforge", "BootsRecomb", "Pet",
    "Equipment1", "Equipment1Star", "Equipment1Reforge", "Equipment1Recomb",
    "Equipment2", "Equipment2Star", "Equipment2Reforge", "Equipment2Recomb",
    "Equipment3", "Equipment3Star", "Equipment3Reforge", "Equipment3Recomb",
    "Equipment4", "Equipment4Star", "Equipment4Reforge", "Equipment4Recomb",
]
line.forEach(element => {



    if (typeof (document.getElementById(element).value) === Number) {
        localStorage[element] === undefined ?
            localStorage[element] = parseFloat(document.getElementById(element).value)
            : document.getElementById(element).value = localStorage[element]
    } else {
        localStorage[element] === undefined ?
            localStorage[element] = document.getElementById(element).value
            : document.getElementById(element).value = localStorage[element]
    }



});