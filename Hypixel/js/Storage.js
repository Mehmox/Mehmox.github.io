{
    localStorage.DamageType === undefined ?
        localStorage.DamageType = document.getElementById("DamageType").value
        : document.getElementById("DamageType").value = localStorage.DamageType

    localStorage.Universe === undefined ?
        localStorage.Universe = document.getElementById("UniverseType").value
        : document.getElementById("UniverseType").value = localStorage.Universe

    localStorage.Class === undefined ?
        localStorage.Class = document.getElementById("ClassType").value
        : document.getElementById("ClassType").value = localStorage.Class
}


{
    localStorage.Combatlvl === undefined ?
        localStorage.Combatlvl = parseInt(document.getElementById("rageinput1").value)
        : document.getElementById("rageinput1").value = localStorage.Combatlvl

    localStorage.Catacomblvl === undefined ?
        localStorage.Catacomblvl = parseInt(document.getElementById("rageinput2").value)
        : document.getElementById("rageinput2").value = localStorage.Catacomblvl

    localStorage.Classlvl === undefined ?
        localStorage.Classlvl = parseInt(document.getElementById("rageinput3").value)
        : document.getElementById("rageinput3").value = localStorage.Classlvl
}
{
    localStorage.BASESTRG === undefined ?
        localStorage.BASESTRG = parseFloat(document.getElementById("BaseSTR").value)
        : document.getElementById("BaseSTR").value = localStorage.BASESTRG

    localStorage.Bestiary === undefined ?
        localStorage.Bestiary = parseInt(document.getElementById("BestiarySTR").value)
        : document.getElementById("BestiarySTR").value = localStorage.Bestiary

    localStorage.BASECRITD === undefined ?
        localStorage.BASECRITD = parseFloat(document.getElementById("BaseCritD").value)
        : document.getElementById("BaseCritD").value = localStorage.BASECRITD


    localStorage.MP === undefined ?
        localStorage.MP = parseInt(document.getElementById("MP").value)
        : document.getElementById("MP").value = localStorage.MP

    localStorage.MPR === undefined ?
        localStorage.MPR = document.getElementById("MPR").value
        : document.getElementById("MPR").value = localStorage.MPR


}

{
    {
        localStorage.Weapon === undefined ?
            localStorage.Weapon = document.getElementById("Weapon").value
            : document.getElementById("Weapon").value = localStorage.Weapon

        localStorage.WeaponStar === undefined ?
            localStorage.WeaponStar = parseInt(document.getElementById("WeaponStarRange").value)
            : document.getElementById("WeaponStarRange").value = localStorage.WeaponStar

        localStorage.WeaponReforge === undefined ?
            localStorage.WeaponReforge = document.getElementById("WeaponReforge").value
            : document.getElementById("WeaponReforge").value = localStorage.WeaponReforge

        // localStorage.WeaponRecomb === undefined ?
        //     localStorage.WeaponRecomb = document.getElementById("WeaponRecomb")
        //     : document.getElementById("WeaponRecomb") = localStorage.WeaponRecomb
    }
    {
        localStorage.Helmet === undefined ?
            localStorage.Helmet = document.getElementById("Helmet").value
            : document.getElementById("Helmet").value = localStorage.Helmet

        localStorage.HelmetStar === undefined ?
            localStorage.HelmetStar = document.getElementById("HelmetStarRange").value
            : document.getElementById("HelmetStarRange").value = localStorage.HelmetStar

        localStorage.HelmetReforge === undefined ?
            localStorage.HelmetReforge = document.getElementById("HelmetReforge").value
            : document.getElementById("HelmetReforge").value = localStorage.HelmetReforge

        // localStorage.HelmetRecomb === undefined ?
        //     localStorage.HelmetRecomb = document.getElementById("HelmetRecomb")
        //     : document.getElementById("HelmetRecomb") = localStorage.HelmetRecomb
    }
    {
        localStorage.ChestPlate === undefined ?
            localStorage.ChestPlate = document.getElementById("ChestP").value
            : document.getElementById("ChestP").value = localStorage.ChestPlate

        localStorage.ChestPlateStar === undefined ?
            localStorage.ChestPlateStar = document.getElementById("ChestPStarRange").value
            : document.getElementById("ChestPStarRange").value = localStorage.ChestPlateStar

        localStorage.ChestPlateReforge === undefined ?
            localStorage.ChestPlateReforge = document.getElementById("ChestPReforge").value
            : document.getElementById("ChestPReforge").value = localStorage.ChestPlateReforge

        // localStorage.ChestPlateRecomb === undefined ?
        //     localStorage.ChestPlateRecomb = document.getElementById("ChestPRecomb")
        //     : document.getElementById("ChestPRecomb") = localStorage.ChestPlateRecomb
    }
    {
        localStorage.Leggings === undefined ?
            localStorage.Leggings = document.getElementById("Leggings").value
            : document.getElementById("Leggings").value = localStorage.Leggings

        localStorage.LeggingsStar === undefined ?
            localStorage.LeggingsStar = document.getElementById("LeggingsStarRange").value
            : document.getElementById("LeggingsStarRange").value = localStorage.LeggingsStar

        localStorage.LeggingsReforge === undefined ?
            localStorage.LeggingsReforge = document.getElementById("LeggingsReforge").value
            : document.getElementById("LeggingsReforge").value = localStorage.LeggingsReforge

        // localStorage.LeggingsRecomb === undefined ?
        //     localStorage.LeggingsRecomb = document.getElementById("LeggingsRecomb")
        //     : document.getElementById("LeggingsRecomb") = localStorage.LeggingsRecomb
    }
    {
        localStorage.Boots === undefined ?
            localStorage.Boots = document.getElementById("Boots").value
            : document.getElementById("Boots").value = localStorage.Leggings

        localStorage.BootsStar === undefined ?
            localStorage.BootsStar = document.getElementById("BootsStarRange").value
            : document.getElementById("BootsStarRange").value = localStorage.BootsStar

        localStorage.BootsReforge === undefined ?
            localStorage.BootsReforge = document.getElementById("BootsReforge").value
            : document.getElementById("BootsReforge").value = localStorage.BootsReforge





        console.log(
            "local: " + localStorage.BootsRecomb +
            " html: " + document.getElementById("BootsRecomb").checked
        )

        // localStorage.BootsRecomb === undefined ?
        //     localStorage.BootsRecomb = document.getElementById("BootsRecomb").checked
        //     : document.getElementById("BootsRecomb").checked = localStorage.BootsRecomb

        console.log(
            "local: " + localStorage.BootsRecomb +
            " html: " + document.getElementById("BootsRecomb").checked
        )
    }
}
{
    localStorage.Pet === undefined ?
        localStorage.Pet = document.getElementById("Pets").value
        : document.getElementById("Pets").value = localStorage.Pet
}
{
    {
        localStorage.Equipment1 === undefined ?
            localStorage.Equipment1 = document.getElementById("Equipment(1)").value
            : document.getElementById("Equipment(1)").value = localStorage.Equipment1

        localStorage.Equipment1Star === undefined ?
            localStorage.Equipment1Star = document.getElementById("Equipment(1)StarRange").value
            : document.getElementById("Equipment(1)StarRange").value = localStorage.Equipment1Star

        localStorage.Equipment1Reforge === undefined ?
            localStorage.Equipment1Reforge = document.getElementById("Equipment(1)Reforge").value
            : document.getElementById("Equipment(1)Reforge").value = localStorage.Equipment1Reforge

        // localStorage.EquipmentRecomb === undefined ?
        //     localStorage.EquipmentRecomb = document.getElementById("Equipment()Recomb")
        //     : document.getElementById("Equipment()Recomb") = localStorage.EquipmentRecomb
    }
    {
        localStorage.Equipment2 === undefined ?
            localStorage.Equipment2 = document.getElementById("Equipment(2)").value
            : document.getElementById("Equipment(2)").value = localStorage.Equipment2

        localStorage.Equipment2Star === undefined ?
            localStorage.Equipment2Star = document.getElementById("Equipment(2)StarRange").value
            : document.getElementById("Equipment(2)StarRange").value = localStorage.Equipment2Star

        localStorage.Equipment2Reforge === undefined ?
            localStorage.Equipment2Reforge = document.getElementById("Equipment(2)Reforge").value
            : document.getElementById("Equipment(2)Reforge").value = localStorage.Equipment2Reforge

        // localStorage.EquipmentRecomb === undefined ?
        //     localStorage.EquipmentRecomb = document.getElementById("Equipment()Recomb")
        //     : document.getElementById("Equipment()Recomb") = localStorage.EquipmentRecomb
    }
    {
        localStorage.Equipment3 === undefined ?
            localStorage.Equipment3 = document.getElementById("Equipment(3)").value
            : document.getElementById("Equipment(3)").value = localStorage.Equipment3

        localStorage.Equipment3Star === undefined ?
            localStorage.Equipment3Star = document.getElementById("Equipment(3)StarRange").value
            : document.getElementById("Equipment(3)StarRange").value = localStorage.Equipment3Star

        localStorage.Equipment3Reforge === undefined ?
            localStorage.Equipment3Reforge = document.getElementById("Equipment(3)Reforge").value
            : document.getElementById("Equipment(3)Reforge").value = localStorage.Equipment3Reforge

        // localStorage.EquipmentRecomb === undefined ?
        //     localStorage.EquipmentRecomb = document.getElementById("Equipment()Recomb")
        //     : document.getElementById("Equipment()Recomb") = localStorage.EquipmentRecomb
    }
    {
        localStorage.Equipment4 === undefined ?
            localStorage.Equipment4 = document.getElementById("Equipment(4)").value
            : document.getElementById("Equipment(4)").value = localStorage.Equipment4

        localStorage.Equipment4Star === undefined ?
            localStorage.Equipment4Star = document.getElementById("Equipment(4)StarRange").value
            : document.getElementById("Equipment(4)StarRange").value = localStorage.Equipment4Star

        localStorage.Equipment4Reforge === undefined ?
            localStorage.Equipment4Reforge = document.getElementById("Equipment(4)Reforge").value
            : document.getElementById("Equipment(4)Reforge").value = localStorage.Equipment4Reforge

        // localStorage.EquipmentRecomb === undefined ?
        //     localStorage.EquipmentRecomb = document.getElementById("Equipment()Recomb")
        //     : document.getElementById("Equipment()Recomb") = localStorage.EquipmentRecomb
    }
}

/*

    localStorage. === undefined ?
        localStorage. = document.getElementById("abcdefg").value
        : document.getElementById("abcdefg").value = localStorage.

        
        */





