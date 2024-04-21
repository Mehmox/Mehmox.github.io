document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener('mousedown', () => window.getSelection().removeAllRanges());
});
function Aligner(String, length) {
    return "&nbsp;".repeat(Math.max(0, length - String.length)) + String;
}
Window.onload = Calculate();
function output() {
    document.getElementById("rageoutput1").innerHTML = document.getElementById("rageinput1").value;
    document.getElementById("rageoutput2").innerHTML = document.getElementById("rageinput2").value;
    document.getElementById("rageoutput3").innerHTML = document.getElementById("rageinput3").value;

    document.getElementById("WeaponStar").innerHTML = document.getElementById("WeaponStarRange").value;
    document.getElementById("HelmetStar").innerHTML = document.getElementById("HelmetStarRange").value;
    document.getElementById("ChestPStar").innerHTML = document.getElementById("ChestPStarRange").value;
    document.getElementById("LeggingsStar").innerHTML = document.getElementById("LeggingsStarRange").value;
    document.getElementById("BootsStar").innerHTML = document.getElementById("BootsStarRange").value;

    document.getElementById("Equipment(1)Star").innerHTML = document.getElementById("Equipment(1)StarRange").value;
    document.getElementById("Equipment(2)Star").innerHTML = document.getElementById("Equipment(2)StarRange").value;
    document.getElementById("Equipment(3)Star").innerHTML = document.getElementById("Equipment(3)StarRange").value;
    document.getElementById("Equipment(4)Star").innerHTML = document.getElementById("Equipment(4)StarRange").value;
}
function GetData() {
    DamageType = document.getElementById("DamageType").value
    Universe = document.getElementById("UniverseType").value
    ClassName = document.getElementById("ClassType").value

    Combatlvl = parseFloat(document.getElementById("rageinput1").value)
    Catacomblvl = parseFloat(document.getElementById("rageinput2").value)
    Classlvl = parseFloat(document.getElementById("rageinput3").value)

    Stats.BASE.Strength = parseFloat(document.getElementById("BaseSTR").value)
    Bestiary = parseFloat(document.getElementById("BestiarySTR").value)
    Stats.BASE.Crit_Damage = parseFloat(document.getElementById("BaseCritD").value)
    Stats.BASE.Intelligence = parseFloat(document.getElementById("BaseInt").value)
    MagicalPower = parseFloat(document.getElementById("MP").value)
    AccesoryReforgeName = document.getElementById("MPR").value
    Legionlvl = parseInt(document.getElementById("LegionLvL").value)
    LegionP = parseInt(document.getElementById("LegionP").value)
    MasterSkullLvl = parseInt(document.getElementById("MasterSkull").value)


    WeaponID = document.getElementById("Weapon").value
    HelmetID = document.getElementById("Helmet").value
    ChestPID = document.getElementById("ChestP").value
    LeggingsID = document.getElementById("Leggings").value
    BootsID = document.getElementById("Boots").value
    Pet = document.getElementById("Pets").value
    Equipment1ID = document.getElementById("Equipment(1)").value
    Equipment2ID = document.getElementById("Equipment(2)").value
    Equipment3ID = document.getElementById("Equipment(3)").value
    Equipment4ID = document.getElementById("Equipment(4)").value

    //Weapon
    if (parseFloat(document.getElementById("WeaponStarRange").value) < 6)
        Weapons.Star = parseFloat(document.getElementById("WeaponStarRange").value)
    else {
        Weapons.Star = 5
        Weapons.MasterStar = parseFloat(document.getElementById("WeaponStarRange").value) - Weapons.Star
    }
    Weapons.Reforge = document.getElementById("WeaponReforge").value
    if (document.getElementById("WeaponRecomb").checked)
        Weapons.Recomb = 1
    else
        Weapons.Recomb = 0

    //Helmet
    if (parseFloat(document.getElementById("HelmetStarRange").value) < 6)
        HelmetSC.Star = parseFloat(document.getElementById("HelmetStarRange").value)
    else {
        HelmetSC.Star = 5
        HelmetSC.MasterStar = parseFloat(document.getElementById("HelmetStarRange").value) - HelmetSC.Star
    }
    HelmetSC.Reforge = document.getElementById("HelmetReforge").value
    if (document.getElementById("HelmetRecomb").checked)
        HelmetSC.Recomb = 1
    else
        HelmetSC.Recomb = 0

    //Chest Plate
    if (parseFloat(document.getElementById("ChestPStarRange").value) < 6)
        ChestPCS.Star = parseFloat(document.getElementById("ChestPStarRange").value)
    else {
        ChestPCS.Star = 5
        ChestPCS.MasterStar = parseFloat(document.getElementById("ChestPStarRange").value) - ChestPCS.Star
    }
    ChestPCS.Reforge = document.getElementById("ChestPReforge").value
    if (document.getElementById("ChestPRecomb").checked)
        ChestPCS.Recomb = 1
    else
        ChestPCS.Recomb = 0


    //Leggings
    if (parseFloat(document.getElementById("LeggingsStarRange").value) < 6)
        LegSC.Star = parseFloat(document.getElementById("LeggingsStarRange").value)
    else {
        LegSC.Star = 5
        LegSC.MasterStar = parseFloat(document.getElementById("LeggingsStarRange").value) - LegSC.Star
    }
    LegSC.Reforge = document.getElementById("LeggingsReforge").value
    if (document.getElementById("LeggingsRecomb").checked)
        LegSC.Recomb = 1
    else
        LegSC.Recomb = 0

    //Boots
    if (parseFloat(document.getElementById("BootsStarRange").value) < 6)
        BootsSC.Star = parseFloat(document.getElementById("BootsStarRange").value)
    else {
        BootsSC.Star = 5
        BootsSC.MasterStar = parseFloat(document.getElementById("BootsStarRange").value) - BootsSC.Star
    }
    BootsSC.Reforge = document.getElementById("BootsReforge").value
    if (document.getElementById("BootsRecomb").checked)
        BootsSC.Recomb = 1
    else
        BootsSC.Recomb = 0



    //Equipment (1)
    if (parseFloat(document.getElementById("Equipment(1)StarRange").value) < 6)
        Equip1SC.Star = parseFloat(document.getElementById("Equipment(1)StarRange").value)
    else {
        Equip1SC.Star = 5
        Equip1SC.MasterStar = parseFloat(document.getElementById("Equipment(1)StarRange").value) - Equip1SC.Star
    }
    Equip1SC.Reforge = document.getElementById("Equipment(1)Reforge").value
    if (document.getElementById("Equipment(1)Recomb").checked)
        Equip1SC.Recomb = 1
    else
        Equip1SC.Recomb = 0

    //Equipment (2)
    if (parseFloat(document.getElementById("Equipment(2)StarRange").value) < 6)
        Equip2SC.Star = parseFloat(document.getElementById("Equipment(2)StarRange").value)
    else {
        Equip2SC.Star = 5
        Equip2SC.MasterStar = parseFloat(document.getElementById("Equipment(2)StarRange").value) - Equip2SC.Star
    }
    Equip2SC.Reforge = document.getElementById("Equipment(2)Reforge").value
    if (document.getElementById("Equipment(2)Recomb").checked)
        Equip2SC.Recomb = 1
    else
        Equip2SC.Recomb = 0

    //Equipment (3)
    if (parseFloat(document.getElementById("Equipment(3)StarRange").value) < 6)
        Equip3SC.Star = parseFloat(document.getElementById("Equipment(3)StarRange").value)
    else {
        Equip3SC.Star = 5
        Equip3SC.MasterStar = parseFloat(document.getElementById("Equipment(3)StarRange").value) - Equip3SC.Star
    }
    Equip3SC.Reforge = document.getElementById("Equipment(3)Reforge").value
    if (document.getElementById("Equipment(3)Recomb").checked)
        Equip3SC.Recomb = 1
    else
        Equip3SC.Recomb = 0

    //Equipment (4)
    if (parseFloat(document.getElementById("Equipment(4)StarRange").value) < 6)
        Equip4SC.Star = parseFloat(document.getElementById("Equipment(4)StarRange").value)
    else {
        Equip4SC.Star = 5
        Equip4SC.MasterStar = parseFloat(document.getElementById("Equipment(4)StarRange").value) - Equip4SC.Star
    }
    Equip4SC.Reforge = document.getElementById("Equipment(4)Reforge").value
    if (document.getElementById("Equipment(4)Recomb").checked)
        Equip4SC.Recomb = 1
    else
        Equip4SC.Recomb = 0

    Weapons.Rarity = Weapons[WeaponID].Rarity
    HelmetSC.Rarity = HelmetSC[HelmetID].Rarity
    ChestPCS.Rarity = ChestPCS[ChestPID].Rarity
    LegSC.Rarity = LegSC[LeggingsID].Rarity
    BootsSC.Rarity = BootsSC[BootsID].Rarity
    Equip1SC.Rarity = Equip1SC[Equipment1ID].Rarity
    Equip2SC.Rarity = Equip2SC[Equipment2ID].Rarity
    Equip3SC.Rarity = Equip3SC[Equipment3ID].Rarity
    Equip4SC.Rarity = Equip4SC[Equipment4ID].Rarity
}
function EditHTML() {
    if (Universe !== "Dungeon") {
        ClassType.disabled = true
        rageinput3.disabled = true
    } else {
        ClassType.disabled = false
        rageinput3.disabled = false
    }
    let append = document.getElementById("Weapon")
    while (append.lastChild && append.lastChild.value !== "Hand") {
        append.removeChild(append.lastChild);
    }
    Weaponlist.forEach(element => {
        if (Weapons[element]["is" + DamageType] === true) {
            let newoption = document.createElement("option")
            newoption.value = element
            newoption.innerText = element
            append.appendChild(newoption)
        }
    });
}
function Calculate() {
    GetData()// Priority 0
    StoreData()// Priority 1
    EditHTML()// Priority 1
    {// Pets Priority 2
        Pets.Strength = Pets[Pet].Strength
        Pets.Crit_Damage = Pets[Pet].Crit_Damage
        Pets.Bonus_Attack_Speed = Pets[Pet].Bonus_Attack_Speed
        Pets.Intelligence = Pets[Pet].Intelligence

        Pets.PetArmorPercentBuff = Pets[Pet].PetArmorPercentBuff
        Pets.BlazePetFmngB = Pets[Pet].BlazePetFmngB
        if (Pet === "Frozen_Blaze" && Universe !== "Crimson")
            Pets.PetStatPercentBuff = 0
        else
            Pets.PetStatPercentBuff = Pets[Pet].PetStatPercentBuff / 100

        Pets.GDragPetDmgB = Pets[Pet].GDragPetDmgB
        Pets.GDragPetStrgPercent = Pets[Pet].GDragPetStrgPercent / 100
    }
    {// Enchants Priority 3
        {// Dungeon
            if (Universe === "Dungeon") {
                Overload = 0;
                E1 = 0;  //Power 7
                E2 = 0;
                E3 = 0;
                E4 = 0;
                E5 = 0;
            }
        }
        {// World
            if (Universe !== "Dungeon") {
                Overload = 0;
                E1 = 130;  //Power 6
                E2 = 45;
                E3 = 0;
                E4 = 0;
                E5 = 0;
            }
        }
    }
    {// Prepare Priority 4
        if (Combatlvl > 50) Combatdmg = (Combatlvl - 50 + 200);
        else Combatdmg = Combatlvl * 4;
        CatacombB = 10
        i = 0
        N = 4
        while (Catacomblvl != i) {
            CatacombB += N; i++;
            if (i % 5 === 0 && i < 35) { N += 1; }
            if (i % 5 === 0 && 35 <= i && i < 45) { N += 2; }
            if (i >= 45) { N += 1; }
        }
        function classreset() {
            CArrowD = 0;
            CExtraAC = 0;
        }
        Enchants = (E1 + E2 + E3 + E4 + E5 + Combatdmg + Pets.GDragPetDmgB) / 100;
        if (Universe === "Dungeon") {
            if (ClassName === "Non") {
                classreset()
            }
            if (ClassName === "Archer") {
                classreset()
                CArrowD = (50 + Classlvl * 1.6 + 50) / 100;
                CExtraAC = (50 + Classlvl + 50) / 100;
            }
            if (ClassName === "Berserk") {
                classreset()
                Enchants += (40 + Classlvl * 0.6 + 40) / 100;
            }
            if (ClassName === "Mage") {
                classreset()
            }
        }
        CatacombB /= 100;
        Souleather = SouleatherSTR * SouleatherLvL * 2;
        if (DamageType === "Bow") { Overload /= 10; SellectedArrowDmg = 1; }
        else { Overload = 0; SellectedArrowDmg = 0; }

        if (MagicalPower >= 250) {
            TReforges.Strength = TReforges[AccesoryReforgeName].BStrength
            TReforges.Crit_Damage = TReforges[AccesoryReforgeName].BCrit_Damage
            TReforges.Bonus_Attack_Speed = TReforges[AccesoryReforgeName].BBonus_Attack_Speed
        } else {
            TReforges.Strength = 0
            TReforges.Crit_Damage = 0
            TReforges.Bonus_Attack_Speed = 0
        }
        MagicalPower = 719.28 * Math.pow((Math.log(1 + (0.0019 * MagicalPower))), 1.2)
        Legion = Legionlvl * LegionP * 0.07 / 100;
        switch (MasterSkullLvl) {
            case 5:
                MasterSkull = (MasterSkullLvl + 1) / 100;
                break;
            case 6:
                MasterSkull = (MasterSkullLvl + 2) / 100;
                break;
            case 7:
                MasterSkull = (MasterSkullLvl + 3) / 100;
                break;
            default:
                MasterSkull = MasterSkullLvl / 100;
                break;
        }
    }
    {// Gear Reforge Priority 5
        if (HelmetSC.Reforge === "Ancient")
            HelmetSC.Crit_Damage = Catacomblvl
        else
            HelmetSC.Crit_Damage = 0

        if (ChestPCS.Reforge === "Ancient")
            ChestPCS.Crit_Damage = Catacomblvl
        else
            ChestPCS.Crit_Damage = 0


        if (LegSC.Reforge === "Ancient")
            LegSC.Crit_Damage = Catacomblvl
        else
            LegSC.Crit_Damage = 0


        if (BootsSC.Reforge === "Ancient")
            BootsSC.Crit_Damage = Catacomblvl
        else
            BootsSC.Crit_Damage = 0
    }
    {// GEAR Priority 6
        if (Universe === "Dungeon") {// GEAR Prepare World
            var isWorld = 0
        } else var isWorld = 1
        {// GEAR Prepare Dungeon
            Weapons.Damage = Weapons[WeaponID].Damage * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB;

            Weapons.Strength = Weapons[WeaponID].Strength * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Strength;
            Weapons.Crit_Damage = Weapons[WeaponID].Crit_Damage * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Crit_Damage;
            Weapons.Intelligence = Weapons[WeaponID].Intelligence * (1 + Weapons.Star / 50 * isWorld) + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Intelligence;
            Weapons.Bonus_Attack_Speed = Weapons[WeaponID].Bonus_Attack_Speed * (1 + Weapons.Star / 50 * isWorld) + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Bonus_Attack_Speed;

            //Armor
            HelmetSC.Strength = HelmetSC[HelmetID].Strength * (1 + HelmetSC.Star / 50 * isWorld) + Reforges[HelmetSC.Reforge][HelmetSC.Rarity + HelmetSC.Recomb].Strength
            HelmetSC.Crit_Damage += HelmetSC[HelmetID].Crit_Damage * (1 + HelmetSC.Star / 50 * isWorld) + Reforges[HelmetSC.Reforge][HelmetSC.Rarity + HelmetSC.Recomb].Crit_Damage
            HelmetSC.Intelligence = HelmetSC[HelmetID].Intelligence * (1 + HelmetSC.Star / 50 * isWorld) + Reforges[HelmetSC.Reforge][HelmetSC.Rarity + HelmetSC.Recomb].Intelligence
            HelmetSC.Bonus_Attack_Speed = HelmetSC[HelmetID].Bonus_Attack_Speed * (1 + HelmetSC.Star / 50 * isWorld) + Reforges[HelmetSC.Reforge][HelmetSC.Rarity + HelmetSC.Recomb].Bonus_Attack_Speed
            HelmetSC.isfloorhelmet = HelmetSC[HelmetID].isfloorhelmet

            ChestPCS.Strength = ChestPCS[ChestPID].Strength * (1 + ChestPCS.Star / 50 * isWorld) + Reforges[ChestPCS.Reforge][ChestPCS.Rarity + ChestPCS.Recomb].Strength
            ChestPCS.Crit_Damage += ChestPCS[ChestPID].Crit_Damage * (1 + ChestPCS.Star / 50 * isWorld) + Reforges[ChestPCS.Reforge][ChestPCS.Rarity + ChestPCS.Recomb].Crit_Damage
            ChestPCS.Intelligence = ChestPCS[ChestPID].Intelligence * (1 + ChestPCS.Star / 50 * isWorld) + Reforges[ChestPCS.Reforge][ChestPCS.Rarity + ChestPCS.Recomb].Intelligence
            ChestPCS.Bonus_Attack_Speed = ChestPCS[ChestPID].Bonus_Attack_Speed * (1 + ChestPCS.Star / 50 * isWorld) + Reforges[ChestPCS.Reforge][ChestPCS.Rarity + ChestPCS.Recomb].Bonus_Attack_Speed

            LegSC.Strength = LegSC[LeggingsID].Strength * (1 + LegSC.Star / 50 * isWorld) + Reforges[LegSC.Reforge][LegSC.Rarity + LegSC.Recomb].Strength
            LegSC.Crit_Damage += LegSC[LeggingsID].Crit_Damage * (1 + LegSC.Star / 50 * isWorld) + Reforges[LegSC.Reforge][LegSC.Rarity + LegSC.Recomb].Crit_Damage
            LegSC.Intelligence = LegSC[LeggingsID].Intelligence * (1 + LegSC.Star / 50 * isWorld) + Reforges[LegSC.Reforge][LegSC.Rarity + LegSC.Recomb].Intelligence
            LegSC.Bonus_Attack_Speed = LegSC[LeggingsID].Bonus_Attack_Speed * (1 + LegSC.Star / 50 * isWorld) + Reforges[LegSC.Reforge][LegSC.Rarity + LegSC.Recomb].Bonus_Attack_Speed

            BootsSC.Strength = BootsSC[BootsID].Strength * (1 + BootsSC.Star / 50 * isWorld) + Reforges[BootsSC.Reforge][BootsSC.Rarity + BootsSC.Recomb].Strength
            BootsSC.Crit_Damage += BootsSC[BootsID].Crit_Damage * (1 + BootsSC.Star / 50 * isWorld) + Reforges[BootsSC.Reforge][BootsSC.Rarity + BootsSC.Recomb].Crit_Damage
            BootsSC.Intelligence = BootsSC[BootsID].Intelligence * (1 + BootsSC.Star / 50 * isWorld) + Reforges[BootsSC.Reforge][BootsSC.Rarity + BootsSC.Recomb].Intelligence
            BootsSC.Bonus_Attack_Speed = BootsSC[BootsID].Bonus_Attack_Speed * (1 + BootsSC.Star / 50 * isWorld) + Reforges[BootsSC.Reforge][BootsSC.Rarity + BootsSC.Recomb].Bonus_Attack_Speed

            //Equipments
            Equip1SC.Strength = Equip1SC[Equipment1ID].Strength * (1 + Equip1SC.Star / 50 * isWorld) + Reforges[Equip1SC.Reforge][Equip1SC.Rarity + Equip1SC.Recomb].Strength
            Equip1SC.Crit_Damage += Equip1SC[Equipment1ID].Crit_Damage * (1 + Equip1SC.Star / 50 * isWorld) + Reforges[Equip1SC.Reforge][Equip1SC.Rarity + Equip1SC.Recomb].Crit_Damage
            Equip1SC.Intelligence = Equip1SC[Equipment1ID].Intelligence * (1 + Equip1SC.Star / 50 * isWorld) + Reforges[Equip1SC.Reforge][Equip1SC.Rarity + Equip1SC.Recomb].Intelligence
            Equip1SC.Bonus_Attack_Speed = Equip1SC[Equipment1ID].Bonus_Attack_Speed * (1 + Equip1SC.Star / 50 * isWorld) + Reforges[Equip1SC.Reforge][Equip1SC.Rarity + Equip1SC.Recomb].Bonus_Attack_Speed

            Equip2SC.Strength = Equip2SC[Equipment2ID].Strength * (1 + Equip2SC.Star / 50 * isWorld) + Reforges[Equip2SC.Reforge][Equip2SC.Rarity + Equip2SC.Recomb].Strength
            Equip2SC.Crit_Damage += Equip2SC[Equipment2ID].Crit_Damage * (1 + Equip2SC.Star / 50 * isWorld) + Reforges[Equip2SC.Reforge][Equip2SC.Rarity + Equip2SC.Recomb].Crit_Damage
            Equip2SC.Intelligence = Equip2SC[Equipment2ID].Intelligence * (1 + Equip2SC.Star / 50 * isWorld) + Reforges[Equip2SC.Reforge][Equip2SC.Rarity + Equip2SC.Recomb].Intelligence
            Equip2SC.Bonus_Attack_Speed = Equip2SC[Equipment2ID].Bonus_Attack_Speed * (1 + Equip2SC.Star / 50 * isWorld) + Reforges[Equip2SC.Reforge][Equip2SC.Rarity + Equip2SC.Recomb].Bonus_Attack_Speed

            Equip3SC.Strength = Equip3SC[Equipment3ID].Strength * (1 + Equip3SC.Star / 50 * isWorld) + Reforges[Equip3SC.Reforge][Equip3SC.Rarity + Equip3SC.Recomb].Strength
            Equip3SC.Crit_Damage += Equip3SC[Equipment3ID].Crit_Damage * (1 + Equip3SC.Star / 50 * isWorld) + Reforges[Equip3SC.Reforge][Equip3SC.Rarity + Equip3SC.Recomb].Crit_Damage
            Equip3SC.Intelligence = Equip3SC[Equipment3ID].Intelligence * (1 + Equip3SC.Star / 50 * isWorld) + Reforges[Equip3SC.Reforge][Equip3SC.Rarity + Equip3SC.Recomb].Intelligence
            Equip3SC.Bonus_Attack_Speed = Equip3SC[Equipment3ID].Bonus_Attack_Speed * (1 + Equip3SC.Star / 50 * isWorld) + Reforges[Equip3SC.Reforge][Equip3SC.Rarity + Equip3SC.Recomb].Bonus_Attack_Speed

            Equip4SC.Strength = Equip4SC[Equipment4ID].Strength * (1 + Equip4SC.Star / 50 * isWorld) + Reforges[Equip4SC.Reforge][Equip4SC.Rarity + Equip4SC.Recomb].Strength
            Equip4SC.Crit_Damage += Equip4SC[Equipment4ID].Crit_Damage * (1 + Equip4SC.Star / 50 * isWorld) + Reforges[Equip4SC.Reforge][Equip4SC.Rarity + Equip4SC.Recomb].Crit_Damage
            Equip4SC.Intelligence = Equip4SC[Equipment4ID].Intelligence * (1 + Equip4SC.Star / 50 * isWorld) + Reforges[Equip4SC.Reforge][Equip4SC.Rarity + Equip4SC.Recomb].Intelligence
            Equip4SC.Bonus_Attack_Speed = Equip4SC[Equipment4ID].Bonus_Attack_Speed * (1 + Equip4SC.Star / 50 * isWorld) + Reforges[Equip4SC.Reforge][Equip4SC.Rarity + Equip4SC.Recomb].Bonus_Attack_Speed
        }

        if (Universe === "Dungeon" && HelmetSC.isfloorhelmet === true) {
            HelmetSC.Strength *= 2;
            HelmetSC.Crit_Damage *= 2;
            HelmetSC.Intelligence *= 2;
        }
    }
    {// Blessings Priority 6
        BlessingMultiplictive = BlessingMultiplictive / 100;

        BlessingofDamagePercent = 0.032 * (1 + BlessingMultiplictive);
        BlessingofDamageNumber = 4.8 * (1 + BlessingMultiplictive);
        BlessingofStoneDamage = 6;// BlessingMultiplictive den etkilenmez sabit.

        BlessingofPowerPercent = BlessingofPowerlvl * BlessingofDamagePercent;
        BlessingofTimePercent = (BlessingofPowerlvl + BlessingofTimelvl) * BlessingofDamagePercent;

        BlessingofPowerNumber = BlessingofPowerlvl * BlessingofDamageNumber;

        BlessingofStoneDamage = BlessingofStonelvl * BlessingofStoneDamage;
    }
    {// Additional Priority 7
        {//FB?
            if (HelmetID === "Frozen_Blaze") {
                HelmetSC.Strength *= (1 + Pets.PetArmorPercentBuff);
                HelmetSC.Crit_Damage *= (1 + Pets.PetArmorPercentBuff);
            }
            if (ChestPID === "Frozen_Blaze") {
                ChestPCS.Strength *= (1 + Pets.PetArmorPercentBuff);
                ChestPCS.Crit_Damage *= (1 + Pets.PetArmorPercentBuff);
            }
            if (LeggingsID === "Frozen_Blaze") {
                LegSC.Strength *= (1 + Pets.PetArmorPercentBuff);
                LegSC.Crit_Damage *= (1 + Pets.PetArmorPercentBuff);
            }
            if (BootsID === "Frozen_Blaze") {
                BootsSC.Strength *= (1 + Pets.PetArmorPercentBuff);
                BootsSC.Crit_Damage *= (1 + Pets.PetArmorPercentBuff);
            }
        }
        if (Universe === "Dungeon") {
            Weapons.Damage *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);
            Weapons.Strength *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);
            Weapons.Crit_Damage *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);
            Weapons.Intelligence *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);

            HelmetSC.Strength *= (1 + CatacombB + HelmetSC.Star / 10 + HelmetSC.MasterStar / 20);
            HelmetSC.Crit_Damage *= (1 + CatacombB + HelmetSC.Star / 10 + HelmetSC.MasterStar / 20);
            HelmetSC.Intelligence *= (1 + CatacombB + HelmetSC.Star / 10 + HelmetSC.MasterStar / 20);

            ChestPCS.Strength *= (1 + CatacombB + ChestPCS.Star / 10 + ChestPCS.MasterStar / 20);
            ChestPCS.Crit_Damage *= (1 + CatacombB + ChestPCS.Star / 10 + ChestPCS.MasterStar / 20);
            ChestPCS.Intelligence *= (1 + CatacombB + ChestPCS.Star / 10 + ChestPCS.MasterStar / 20);

            LegSC.Strength *= (1 + CatacombB + LegSC.Star / 10 + LegSC.MasterStar / 20);
            LegSC.Crit_Damage *= (1 + CatacombB + LegSC.Star / 10 + LegSC.MasterStar / 20);
            LegSC.Intelligence *= (1 + CatacombB + LegSC.Star / 10 + LegSC.MasterStar / 20);

            BootsSC.Strength *= (1 + CatacombB + BootsSC.Star / 10 + BootsSC.MasterStar / 20);
            BootsSC.Crit_Damage *= (1 + CatacombB + BootsSC.Star / 10 + BootsSC.MasterStar / 20);
            BootsSC.Intelligence *= (1 + CatacombB + BootsSC.Star / 10 + BootsSC.MasterStar / 20);

            Equip1SC.Strength *= (1 + CatacombB + Equip1SC.Star / 10 + Equip1SC.MasterStar / 20);
            Equip1SC.Crit_Damage *= (1 + CatacombB + Equip1SC.Star / 10 + Equip1SC.MasterStar / 20);
            Equip1SC.Intelligence *= (1 + CatacombB + Equip1SC.Star / 10 + Equip1SC.MasterStar / 20);

            Equip2SC.Strength *= (1 + CatacombB + Equip2SC.Star / 10 + Equip2SC.MasterStar / 20);
            Equip2SC.Crit_Damage *= (1 + CatacombB + Equip2SC.Star / 10 + Equip2SC.MasterStar / 20);
            Equip2SC.Intelligence *= (1 + CatacombB + Equip2SC.Star / 10 + Equip2SC.MasterStar / 20);

            Equip3SC.Strength *= (1 + CatacombB + Equip3SC.Star / 10 + Equip3SC.MasterStar / 20);
            Equip3SC.Crit_Damage *= (1 + CatacombB + Equip3SC.Star / 10 + Equip3SC.MasterStar / 20);
            Equip3SC.Intelligence *= (1 + CatacombB + Equip3SC.Star / 10 + Equip3SC.MasterStar / 20);

            Equip4SC.Strength *= (1 + CatacombB + Equip4SC.Star / 10 + Equip4SC.MasterStar / 20);
            Equip4SC.Crit_Damage *= (1 + CatacombB + Equip4SC.Star / 10 + Equip4SC.MasterStar / 20);
            Equip4SC.Intelligence *= (1 + CatacombB + Equip4SC.Star / 10 + Equip4SC.MasterStar / 20);
        }

        {//Gear+Base+Pets Stats
            Gears.Strength =
                Weapons.Strength + HelmetSC.Strength + ChestPCS.Strength + LegSC.Strength + BootsSC.Strength +
                Equip1SC.Strength + Equip2SC.Strength + Equip3SC.Strength + Equip4SC.Strength +
                TReforges[AccesoryReforgeName].Strength * (MagicalPower * 1) + TReforges.Strength;

            Gears.Crit_Damage =
                Weapons.Crit_Damage + HelmetSC.Crit_Damage + ChestPCS.Crit_Damage + LegSC.Crit_Damage + BootsSC.Crit_Damage +
                Equip1SC.Crit_Damage + Equip2SC.Crit_Damage + Equip3SC.Crit_Damage + Equip4SC.Crit_Damage +
                TReforges[AccesoryReforgeName].Crit_Damage * (MagicalPower * 1) + TReforges.Crit_Damage;

            Gears.Bonus_Attack_Speed =
                Weapons.Bonus_Attack_Speed + HelmetSC.Bonus_Attack_Speed + ChestPCS.Bonus_Attack_Speed + LegSC.Bonus_Attack_Speed + BootsSC.Bonus_Attack_Speed +
                Equip1SC.Bonus_Attack_Speed + Equip2SC.Bonus_Attack_Speed + Equip3SC.Bonus_Attack_Speed + Equip4SC.Bonus_Attack_Speed +
                TReforges[AccesoryReforgeName].Bonus_Attack_Speed * (MagicalPower * 0.3) + TReforges.Bonus_Attack_Speed;

            Gears.Intelligence =
                Weapons.Intelligence + HelmetSC.Intelligence + ChestPCS.Intelligence + LegSC.Intelligence + BootsSC.Intelligence +
                Equip1SC.Intelligence + Equip2SC.Intelligence + Equip3SC.Intelligence + Equip4SC.Intelligence +
                TReforges[AccesoryReforgeName].Intelligence * (MagicalPower * 1.5) + TReforges.Intelligence;

            Stats.Strength = Gears.Strength + Stats.BASE.Strength + Pets.Strength;
            Stats.Crit_Damage = Gears.Crit_Damage + Stats.BASE.Crit_Damage + Pets.Crit_Damage;
            Stats.Intelligence = Gears.Intelligence + Stats.BASE.Intelligence + Pets.Intelligence;
            Stats.Bonus_Attack_Speed = (Gears.Bonus_Attack_Speed + Pets.Bonus_Attack_Speed) / 100
        }

        Stats.E.Damage = BlessingofStoneDamage;
        Stats.Strength += BlessingofPowerNumber;
        Stats.Crit_Damage += BlessingofPowerNumber;

        Stats.Strength *= (1 + BlessingofTimePercent);
        Stats.Crit_Damage *= (1 + BlessingofPowerPercent);

        Stats.Strength *= (1 + MasterSkull);

        Stats.Strength *= (1 + Legion);
        Stats.Crit_Damage *= (1 + Legion);
        Stats.Intelligence *= (1 + Legion);
        Stats.Bonus_Attack_Speed *= (1 + Legion);

        Stats.Strength *= (1 + Pets.PetStatPercentBuff) * (1 + Pets.GDragPetStrgPercent);
        Stats.Crit_Damage *= (1 + Pets.PetStatPercentBuff);
        Stats.Intelligence *= (1 + Pets.PetStatPercentBuff);
        Stats.Bonus_Attack_Speed *= (1 + Pets.PetStatPercentBuff);

        Stats.E.Damage += Weapons.Damage + SellectedArrowDmg + 5;
        Stats.E.Strength = Stats.Strength + Bestiary;
    }
    {// Dmg-DPS Priority 8
        if (DamageType !== "Ability") {
            {// DmgBase
                DmgMin = DmgMax = DPSMin = DPSMax =
                    Stats.E.Damage * (1 + Stats.E.Strength / 100) * (1 + Stats.Crit_Damage / 100) * (1 + Enchants) * (1 + CArrowD)
                ofa =
                    Stats.E.Damage * (1 + Stats.E.Strength / 100) * (1 + Stats.Crit_Damage / 100) * (1 + (3 + 2)) * (1 + CArrowD)
            }
            {// DmgMax
                DmgMax *= (1 + Overload);
            }
            {// DPSMin
                DPSMin *= 2;
                DPSMin *= (1 + Stats.Bonus_Attack_Speed);
            }
            {// DPSMax
                DPSMax *= 3;
                DPSMax *= (1 + Overload);
                DPSMax *= (1 + Stats.Bonus_Attack_Speed);
            }
        } else {
            DmgMin = DmgMax = DPSMin = DPSMax =
                10000 * (1 + Stats.Intelligence / 100 * 0.3) * (1 + 35 / 100)
                * (1 + Enchants)
        }

    }
    {// Print Damage  Priority 9
        if (Universe === "Dungeon") {
            document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                        CatacombB: +%${(CatacombB * 100).toFixed(0)}<br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                          CArrowD: +%${(CArrowD * 100).toFixed(1)}<br>
                         CExtraAC: +%${(CExtraAC * 100).toFixed(0)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                         Overload: +%${(Overload * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.Bonus_Attack_Speed * 100).toFixed(1)}<br>
                      MasterSkull: +%${(MasterSkull * 100).toFixed(0)}
                `);
            document.getElementById("Blessings").innerHTML = (`Blessingof: <br>
                 Strength Percent:  +%${(BlessingofTimePercent * 100).toFixed(1)}<br>
              Crit Damage Percent:  +%${(BlessingofPowerPercent * 100).toFixed(1)}<br>
                     Power Number:  +${BlessingofPowerNumber.toFixed(1)}<br>
                     Stone Damage:  +${BlessingofStoneDamage.toFixed(1)}<br>
           Blessing Multiplictive:  +%${(BlessingMultiplictive * 100).toFixed(0)}
                `);
        }
        if (Universe !== "Dungeon") {
            document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                         Overload: +%${(Overload * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.Bonus_Attack_Speed * 100).toFixed(1)}
                `);
            document.getElementById("Blessings").innerHTML = (`
                `);
        }
        document.getElementById("Gear").innerHTML = (`
                           Weapon: <br>
                         Strength: ${Weapons.Strength.toFixed(2)}<br>
                       CritDamage: ${Weapons.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${Weapons.Intelligence.toFixed(2)}<br><br>

                           Helmet: <br>
                         Strength: ${HelmetSC.Strength.toFixed(2)}<br>        
                       CritDamage: ${HelmetSC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${HelmetSC.Intelligence.toFixed(2)}<br><br>

                       ChestPlate: <br>
                         Strength: ${ChestPCS.Strength.toFixed(2)}<br>        
                       CritDamage: ${ChestPCS.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${ChestPCS.Intelligence.toFixed(2)}<br><br>

                         Leggings: <br>
                         Strength: ${LegSC.Strength.toFixed(2)}<br>        
                       CritDamage: ${LegSC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${LegSC.Intelligence.toFixed(2)}<br><br>

                            Boots: <br>
                         Strength: ${BootsSC.Strength.toFixed(2)}<br>        
                       CritDamage: ${BootsSC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${BootsSC.Intelligence.toFixed(2)}<br>
                `);
        document.getElementById("Equipment").innerHTML = (`
                    Equipment (1): <br>
                         Strength: ${Equip1SC.Strength.toFixed(2)}<br>        
                       CritDamage: ${Equip1SC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${Equip1SC.Intelligence.toFixed(2)}<br><br>

                    Equipment (2): <br>
                         Strength: ${Equip2SC.Strength.toFixed(2)}<br>        
                       CritDamage: ${Equip2SC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${Equip2SC.Intelligence.toFixed(2)}<br><br>

                    Equipment (3): <br>
                         Strength: ${Equip3SC.Strength.toFixed(2)}<br>        
                       CritDamage: ${Equip3SC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${Equip3SC.Intelligence.toFixed(2)}<br><br>

                    Equipment (4): <br>
                         Strength: ${Equip4SC.Strength.toFixed(2)}<br>        
                       CritDamage: ${Equip4SC.Crit_Damage.toFixed(2)}<br>
                     Intelligence: ${Equip4SC.Intelligence.toFixed(2)}<br>
                `);

        document.getElementById("Gear").title = (`
                       Gear Total:
                         Strength: ${Gears.Strength.toFixed(2)}      
                       CritDamage: ${Gears.Crit_Damage.toFixed(2)}
                     Intelligence: ${Gears.Intelligence.toFixed(2)}
                    Gear Total Without Weapon
                         Strength: ${(Gears.Strength - Weapons.Strength).toFixed(2)}   
                       CritDamage: ${(Gears.Crit_Damage - Weapons.Crit_Damage).toFixed(2)}
                     Intelligence: ${(Gears.Intelligence - Weapons.Intelligence).toFixed(2)}
                `);

        document.getElementById("Stats").innerHTML = (`Start Last<br>
                           Damage: ${Weapons.Damage.toFixed(2)}                E Damage: ${(Stats.E.Damage).toFixed(2)}<br>
                         Strength: ${Stats.Strength.toFixed(2)}              E Strength: ${(Stats.E.Strength).toFixed(2)}<br>
                      Crit Damage: ${Stats.Crit_Damage.toFixed(2)}         Intelligence: ${Stats.Intelligence.toFixed(2)}
                `);
    }
    {// Print  Priority 9
        document.getElementById("Result").innerHTML = (`
                           DmgMin: ${Math.floor(DmgMin).toLocaleString('tr-TR')}
                           DmgMax: ${Math.floor(DmgMax).toLocaleString('tr-TR')}<br>
                           DPSMin: ${Math.floor(DPSMin).toLocaleString('tr-TR')}
                           DPSMax: ${Math.floor(DPSMax).toLocaleString('tr-TR')}
                  `);
    }
    {// Print Text Priority 10
        document.getElementById("Test Result").innerHTML = (`
    Test Result <br>
    DmgMin: ${Math.floor(DmgMin).toLocaleString('tr-TR')}<br>
       OFA: ${Math.floor(ofa).toLocaleString('tr-TR')}<br>
SoulEater1: ${Math.floor(DmgMin + Souleather * (1 + Stats.E.Strength / 100)).toLocaleString('tr-TR')}<br>
SoulEater2: ${Math.floor(DmgMin + Souleather * (1 + Stats.E.Strength / 100) * 2).toLocaleString('tr-TR')}<br>
   `);
    }
    /*
        {// Print Text Priority 10
        document.getElementById("Test Result").innerHTML = (`
    Test Result <br>
           Ingame: ${Math.floor(915).toLocaleString('tr-TR')}<br>
             Code: ${Math.floor(DmgMin + Souleather * (1 + Stats.E.Strength / 100)).toLocaleString('tr-TR')}<br><br>

    SoulEater1-DmgMin: ${Math.floor(915 - DmgMin).toLocaleString('tr-TR')}<br>
SoulEater1-DmgMin +10: ${Math.floor(940 - DmgMin).toLocaleString('tr-TR')}<br>
                 Diff: ${Math.floor((940 - DmgMin) - (915 - DmgMin)).toLocaleString('tr-TR')}<br><br>

    SoulEater2-DmgMin: ${Math.floor(1229 - DmgMin).toLocaleString('tr-TR')}<br>
SoulEater2-DmgMin +10: ${Math.floor(1253 - DmgMin).toLocaleString('tr-TR')}<br>
                Diff : ${Math.floor((1253 - DmgMin) - (1229 - DmgMin)).toLocaleString('tr-TR')}<br><br>
   `);
    }
    */
    output()
}
function StoreData() {
    localStorage.DamageType = document.getElementById("DamageType").value
    localStorage.Universe = document.getElementById("UniverseType").value
    localStorage.Class = document.getElementById("ClassType").value

    localStorage.Combatlvl = parseInt(document.getElementById("rageinput1").value)
    localStorage.Catacomblvl = parseInt(document.getElementById("rageinput2").value)
    localStorage.Classlvl = parseInt(document.getElementById("rageinput3").value)

    localStorage.BASESTRG = parseInt(document.getElementById("BaseSTR").value)
    localStorage.Bestiary = parseInt(document.getElementById("BestiarySTR").value)
    localStorage.BASECRITD = parseInt(document.getElementById("BaseCritD").value)
    localStorage.BASEInt = parseInt(document.getElementById("BaseInt").value)
    localStorage.MP = parseInt(document.getElementById("MP").value)
    localStorage.MPR = document.getElementById("MPR").value

    localStorage.BASESTRG = parseFloat(document.getElementById("BaseSTR").value)
    localStorage.Bestiary = parseInt(document.getElementById("BestiarySTR").value)
    localStorage.BASECRITD = parseFloat(document.getElementById("BaseCritD").value)
    localStorage.MP = parseInt(document.getElementById("MP").value)
    localStorage.MPR = document.getElementById("MPR").value
    localStorage.Legion = parseInt(document.getElementById("LegionLvL").value)
    localStorage.LegionP = parseInt(document.getElementById("LegionP").value)
    localStorage.MasterSkull = parseInt(document.getElementById("MasterSkull").value)


    localStorage.Weapon = document.getElementById("Weapon").value
    localStorage.WeaponStar = parseInt(document.getElementById("WeaponStarRange").value)
    localStorage.WeaponReforge = document.getElementById("WeaponReforge").value
    localStorage.WeaponRecomb = document.getElementById("WeaponRecomb").checked

    localStorage.Helmet = document.getElementById("Helmet").value
    localStorage.HelmetStar = parseInt(document.getElementById("HelmetStarRange").value)
    localStorage.HelmetReforge = document.getElementById("HelmetReforge").value
    localStorage.HelmetRecomb = document.getElementById("HelmetRecomb").checked

    localStorage.ChestPlate = document.getElementById("ChestP").value
    localStorage.ChestPlateStar = document.getElementById("ChestPStarRange").value
    localStorage.ChestPlateReforge = document.getElementById("ChestPReforge").value
    localStorage.ChestPlateRecomb = document.getElementById("ChestPRecomb").checked

    localStorage.Leggings = document.getElementById("Leggings").value
    localStorage.LeggingsStar = document.getElementById("LeggingsStarRange").value
    localStorage.LeggingsReforge = document.getElementById("LeggingsReforge").value
    localStorage.LeggingsRecomb = document.getElementById("LeggingsRecomb").checked

    localStorage.Boots = document.getElementById("Boots").value
    localStorage.BootsStar = document.getElementById("BootsStarRange").value
    localStorage.BootsReforge = document.getElementById("BootsReforge").value
    localStorage.BootsRecomb = document.getElementById("BootsRecomb").checked

    localStorage.Pet = document.getElementById("Pets").value

    localStorage.Equipment1 = document.getElementById("Equipment(1)").value
    localStorage.Equipment1Star = document.getElementById("Equipment(1)StarRange").value
    localStorage.Equipment1Reforge = document.getElementById("Equipment(1)Reforge").value
    localStorage.Equipment1Recomb = document.getElementById("Equipment(1)Recomb").checked

    localStorage.Equipment2 = document.getElementById("Equipment(2)").value
    localStorage.Equipment2Star = document.getElementById("Equipment(2)StarRange").value
    localStorage.Equipment2Reforge = document.getElementById("Equipment(2)Reforge").value
    localStorage.Equipment2Recomb = document.getElementById("Equipment(2)Recomb").checked

    localStorage.Equipment3 = document.getElementById("Equipment(3)").value
    localStorage.Equipment3Star = document.getElementById("Equipment(3)StarRange").value
    localStorage.Equipment3Reforge = document.getElementById("Equipment(3)Reforge").value
    localStorage.Equipment3Recomb = document.getElementById("Equipment(3)Recomb").checked

    localStorage.Equipment4 = document.getElementById("Equipment(4)").value
    localStorage.Equipment4Star = document.getElementById("Equipment(4)StarRange").value
    localStorage.Equipment4Reforge = document.getElementById("Equipment(4)Reforge").value
    localStorage.Equipment4Recomb = document.getElementById("Equipment(4)Recomb").checked
}