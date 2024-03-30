document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener('mousedown', () => window.getSelection().removeAllRanges());
});
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
    Universe = document.getElementById("UniverseType").value
    DamageType = document.getElementById("DamageType").value
    ClassName = document.getElementById("ClassType").value

    Combatlvl = parseInt(document.getElementById("rageinput1").value)
    Catacomblvl = parseInt(document.getElementById("rageinput2").value)
    Classlvl = parseInt(document.getElementById("rageinput3").value)

    Stats.BASE.Strength = parseInt(document.getElementById("BaseSTR").value)
    Bestiary = parseInt(document.getElementById("BestiarySTR").value)
    Stats.BASE.Crit_Damage = parseInt(document.getElementById("BaseCritD").value)
    MagicalPower = parseInt(document.getElementById("MP").value)
    AccesoryReforgeName = document.getElementById("MPR").value

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
    if (parseInt(document.getElementById("WeaponStarRange").value) < 6)
        Weapons.Star = parseInt(document.getElementById("WeaponStarRange").value)
    else {
        Weapons.Star = 5
        Weapons.MasterStar = parseInt(document.getElementById("WeaponStarRange").value) - Weapons.Star
    }
    Weapons.Reforge = document.getElementById("WeaponReforge").value
    if (document.getElementById("WeaponRecomb").checked)
        Weapons.Recomb = 1
    else
        Weapons.Recomb = 0

    //Helmet
    if (parseInt(document.getElementById("HelmetStarRange").value) < 6)
        Gears.Helmet.Star = parseInt(document.getElementById("HelmetStarRange").value)
    else {
        Gears.Helmet.Star = 5
        Gears.Helmet.MasterStar = parseInt(document.getElementById("HelmetStarRange").value) - Gears.Helmet.Star
    }
    Gears.Helmet.Reforge = document.getElementById("HelmetReforge").value
    if (document.getElementById("HelmetRecomb").checked)
        Gears.Helmet.Recomb = 1
    else
        Gears.Helmet.Recomb = 0

    //Chest Plate
    if (parseInt(document.getElementById("ChestPStarRange").value) < 6)
        Gears.ChestPlate.Star = parseInt(document.getElementById("ChestPStarRange").value)
    else {
        Gears.ChestPlate.Star = 5
        Gears.ChestPlate.MasterStar = parseInt(document.getElementById("ChestPStarRange").value) - Gears.ChestPlate.Star
    }
    Gears.ChestPlate.Reforge = document.getElementById("ChestPReforge").value
    if (document.getElementById("ChestPRecomb").checked)
        Gears.ChestPlate.Recomb = 1
    else
        Gears.ChestPlate.Recomb = 0


    //Leggings
    if (parseInt(document.getElementById("LeggingsStarRange").value) < 6)
        Gears.Leggings.Star = parseInt(document.getElementById("LeggingsStarRange").value)
    else {
        Gears.Leggings.Star = 5
        Gears.Leggings.MasterStar = parseInt(document.getElementById("LeggingsStarRange").value) - Gears.Leggings.Star
    }
    Gears.Leggings.Reforge = document.getElementById("LeggingsReforge").value
    if (document.getElementById("LeggingsRecomb").checked)
        Gears.Leggings.Recomb = 1
    else
        Gears.Leggings.Recomb = 0

    //Boots
    if (parseInt(document.getElementById("BootsStarRange").value) < 6)
        Gears.Boots.Star = parseInt(document.getElementById("BootsStarRange").value)
    else {
        Gears.Boots.Star = 5
        Gears.Boots.MasterStar = parseInt(document.getElementById("BootsStarRange").value) - Gears.Boots.Star
    }
    Gears.Boots.Reforge = document.getElementById("BootsReforge").value
    if (document.getElementById("BootsRecomb").checked)
        Gears.Boots.Recomb = 1
    else
        Gears.Boots.Recomb = 0



    //Equipment (1)
    if (parseInt(document.getElementById("Equipment(1)StarRange").value) < 6)
        Gears.Equipment1.Star = parseInt(document.getElementById("Equipment(1)StarRange").value)
    else {
        Gears.Equipment1.Star = 5
        Gears.Equipment1.MasterStar = parseInt(document.getElementById("Equipment(1)StarRange").value) - Gears.Equipment1.Star
    }
    Gears.Equipment1.Reforge = document.getElementById("Equipment(1)Reforge").value
    if (document.getElementById("Equipment(1)Recomb").checked)
        Gears.Equipment1.Recomb = 1
    else
        Gears.Equipment1.Recomb = 0

    //Equipment (2)
    if (parseInt(document.getElementById("Equipment(2)StarRange").value) < 6)
        Gears.Equipment2.Star = parseInt(document.getElementById("Equipment(2)StarRange").value)
    else {
        Gears.Equipment2.Star = 5
        Gears.Equipment2.MasterStar = parseInt(document.getElementById("Equipment(2)StarRange").value) - Gears.Equipment2.Star
    }
    Gears.Equipment2.Reforge = document.getElementById("Equipment(2)Reforge").value
    if (document.getElementById("Equipment(2)Recomb").checked)
        Gears.Equipment2.Recomb = 1
    else
        Gears.Equipment2.Recomb = 0

    //Equipment (3)
    if (parseInt(document.getElementById("Equipment(3)StarRange").value) < 6)
        Gears.Equipment3.Star = parseInt(document.getElementById("Equipment(3)StarRange").value)
    else {
        Gears.Equipment3.Star = 5
        Gears.Equipment3.MasterStar = parseInt(document.getElementById("Equipment(3)StarRange").value) - Gears.Equipment3.Star
    }
    Gears.Equipment3.Reforge = document.getElementById("Equipment(3)Reforge").value
    if (document.getElementById("Equipment(3)Recomb").checked)
        Gears.Equipment3.Recomb = 1
    else
        Gears.Equipment3.Recomb = 0

    //Equipment (4)
    if (parseInt(document.getElementById("Equipment(4)StarRange").value) < 6)
        Gears.Equipment4.Star = parseInt(document.getElementById("Equipment(4)StarRange").value)
    else {
        Gears.Equipment4.Star = 5
        Gears.Equipment4.MasterStar = parseInt(document.getElementById("Equipment(4)StarRange").value) - Gears.Equipment4.Star
    }
    Gears.Equipment4.Reforge = document.getElementById("Equipment(4)Reforge").value
    if (document.getElementById("Equipment(4)Recomb").checked)
        Gears.Equipment4.Recomb = 1
    else
        Gears.Equipment4.Recomb = 0

    Weapons.Rarity = Weapons[WeaponID].Rarity
    Gears.Helmet.Rarity = Gears.Helmet[HelmetID].Rarity
    Gears.ChestPlate.Rarity = Gears.ChestPlate[ChestPID].Rarity
    Gears.Leggings.Rarity = Gears.Leggings[LeggingsID].Rarity
    Gears.Boots.Rarity = Gears.Boots[BootsID].Rarity
    Gears.Equipment1.Rarity = Gears.Equipment1[Equipment1ID].Rarity
    Gears.Equipment2.Rarity = Gears.Equipment2[Equipment2ID].Rarity
    Gears.Equipment3.Rarity = Gears.Equipment3[Equipment3ID].Rarity
    Gears.Equipment4.Rarity = Gears.Equipment4[Equipment4ID].Rarity
}
function EditHTML() {
    // if (Gears.Helmet.DNH) { }

}
function Calculate() {
    GetData()// Priority 1
    EditHTML()// Priority 2
    {// Pets Priority 2
        Pets.BlazePetB = Pets[Pet].BlazePetB
        Pets.BlazePetFmngB = Pets[Pet].BlazePetFmngB

        Pets.EDragPetB = Pets[Pet].EDragPetB
        Pets.EDragPetStrg = Pets[Pet].EDragPetStrg
        Pets.EDragPetCC = Pets[Pet].EDragPetCC
        Pets.EDragPetCD = Pets[Pet].EDragPetCD

        Pets.GDragPetB = Pets[Pet].GDragPetB
        Pets.GDragPetStrg = Pets[Pet].GDragPetStrg
        Pets.GDragPetAS = Pets[Pet].GDragPetAS
        Pets.GDragPetCD = Pets[Pet].GDragPetCD
    }
    {// Enchants Dungeon Priority 3
        if (Universe === "Dungeon") {
            Overload = 0;
            E1 = 0;  //Power 7
            E2 = 0;
            E3 = 0;
            E4 = 0;
            E5 = 0;
        }
    }
    {// Enchants World Priority 3
        if (Universe === "World") {
            Overload = 0;
            E1 = 0;  //Power 6
            E2 = 0;
            E3 = 0;
            E4 = 0;
            E5 = 0;
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
        if (Universe === "Dungeon") {
            if (ClassName === "Archer") {
                CArrowD = (50 + Classlvl * 1.6 + 50) / 100;
                CExtraAC = (50 + Classlvl + 50) / 100;
            }
            if (ClassName === "Berserk") { }
            if (ClassName === "Mage") { }
        }
        CatacombB /= 100;
        Legion = Legionlvl * LegionP * 0.07 / 100;
        Souleather = SouleatherLvL * SouleatherSTR * 2;
        if (DamageType === "Bow") { Overload /= 10; }
        else { Overload = 0; SellectedArrowDmg = 0; }
        Enchants = (E1 + E2 + E3 + E4 + E5 + Combatdmg) / 100;
        switch (MasterSkullLvl) {
            case 5:
                MasterSkull += 1;
                break;
            case 6:
                MasterSkull += 2;
                break;
            case 7:
                MasterSkull += 3;
                break;
        }
        MasterSkull = (MasterSkull + MasterSkullLvl) / 100;
        // console.log(MagicalPower)
        // MagicalPower = 1 * 719.28 * Math.pow((Math.log10(0.0019 * (MagicalPower) + 1)), 1.2)
        // console.log(MagicalPower)
    }
    {// Gear Reforge Priority 5
        if (Gears.Helmet.Reforge === "Ancient")
            Gears.Helmet.Crit_Damage = Catacomblvl
        else
            Gears.Helmet.Crit_Damage = 0

        if (Gears.ChestPlate.Reforge === "Ancient")
            Gears.ChestPlate.Crit_Damage = Catacomblvl
        else
            Gears.ChestPlate.Crit_Damage = 0


        if (Gears.Leggings.Reforge === "Ancient")
            Gears.Leggings.Crit_Damage = Catacomblvl
        else
            Gears.Leggings.Crit_Damage = 0


        if (Gears.Boots.Reforge === "Ancient")
            Gears.Boots.Crit_Damage = Catacomblvl
        else
            Gears.Boots.Crit_Damage = 0
    }
    {// GEAR Priority 6
        if (Universe === "Dungeon") {// GEAR Prepare World
            var isWorld = 0
        } else var isWorld = 1

        if (Universe === "Dungeon" || Universe === "World") {// GEAR Prepare Dungeon
            Weapons.Damage = Weapons[WeaponID].Damage * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB;

            Weapons.Strength = Weapons[WeaponID].Strength * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Strength;
            Weapons.Crit_Damage = Weapons[WeaponID].Crit_Damage * (1 + Weapons.Star / 50 * isWorld) + Pets.BlazePetFmngB + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Crit_Damage;
            Weapons.Bonus_Attack_Speed = Weapons[WeaponID].Bonus_Attack_Speed * (1 + Weapons.Star / 50 * isWorld) + Reforges[Weapons.Reforge][Weapons.Rarity + Weapons.Recomb].Bonus_Attack_Speed;

            //Armor
            Gears.Helmet.Strength = Gears.Helmet[HelmetID].Strength * (1 + Gears.Helmet.Star / 50 * isWorld) + Reforges[Gears.Helmet.Reforge][Gears.Helmet.Rarity + Gears.Helmet.Recomb].Strength
            Gears.Helmet.Crit_Damage += Gears.Helmet[HelmetID].Crit_Damage * (1 + Gears.Helmet.Star / 50 * isWorld) + Reforges[Gears.Helmet.Reforge][Gears.Helmet.Rarity + Gears.Helmet.Recomb].Crit_Damage
            Gears.Helmet.Bonus_Attack_Speed += Gears.Helmet[HelmetID].Bonus_Attack_Speed * (1 + Gears.Helmet.Star / 50 * isWorld) + Reforges[Gears.Helmet.Reforge][Gears.Helmet.Rarity + Gears.Helmet.Recomb].Bonus_Attack_Speed
            Gears.Helmet.isfloorhelmet = Gears.Helmet[HelmetID].isfloorhelmet

            Gears.ChestPlate.Strength = Gears.ChestPlate[ChestPID].Strength * (1 + Gears.ChestPlate.Star / 50 * isWorld) + Reforges[Gears.ChestPlate.Reforge][Gears.ChestPlate.Rarity + Gears.ChestPlate.Recomb].Strength
            Gears.ChestPlate.Crit_Damage += Gears.ChestPlate[ChestPID].Crit_Damage * (1 + Gears.ChestPlate.Star / 50 * isWorld) + Reforges[Gears.ChestPlate.Reforge][Gears.ChestPlate.Rarity + Gears.ChestPlate.Recomb].Crit_Damage
            Gears.ChestPlate.Bonus_Attack_Speed += Gears.ChestPlate[HelmetID].Bonus_Attack_Speed * (1 + Gears.ChestPlate.Star / 50 * isWorld) + Reforges[Gears.ChestPlate.Reforge][Gears.ChestPlate.Rarity + Gears.ChestPlate.Recomb].Bonus_Attack_Speed

            Gears.Leggings.Strength = Gears.Leggings[LeggingsID].Strength * (1 + Gears.Leggings.Star / 50 * isWorld) + Reforges[Gears.Leggings.Reforge][Gears.Leggings.Rarity + Gears.Leggings.Recomb].Strength
            Gears.Leggings.Crit_Damage += Gears.Leggings[LeggingsID].Crit_Damage * (1 + Gears.Leggings.Star / 50 * isWorld) + Reforges[Gears.Leggings.Reforge][Gears.Leggings.Rarity + Gears.Leggings.Recomb].Crit_Damage
            Gears.Leggings.Bonus_Attack_Speed += Gears.Leggings[HelmetID].Bonus_Attack_Speed * (1 + Gears.Leggings.Star / 50 * isWorld) + Reforges[Gears.Leggings.Reforge][Gears.Leggings.Rarity + Gears.Leggings.Recomb].Bonus_Attack_Speed

            Gears.Boots.Strength = Gears.Boots[BootsID].Strength * (1 + Gears.Boots.Star / 50 * isWorld) + Reforges[Gears.Boots.Reforge][Gears.Boots.Rarity + Gears.Boots.Recomb].Strength
            Gears.Boots.Crit_Damage += Gears.Boots[BootsID].Crit_Damage * (1 + Gears.Boots.Star / 50 * isWorld) + Reforges[Gears.Boots.Reforge][Gears.Boots.Rarity + Gears.Boots.Recomb].Crit_Damage
            Gears.Boots.Bonus_Attack_Speed += Gears.Boots[HelmetID].Bonus_Attack_Speed * (1 + Gears.Boots.Star / 50 * isWorld) + Reforges[Gears.Boots.Reforge][Gears.Boots.Rarity + Gears.Boots.Recomb].Bonus_Attack_Speed

            //Equipments
            Gears.Equipment1.Strength = Gears.Equipment1[Equipment1ID].Strength * (1 + Gears.Equipment1.Star / 50 * isWorld) + Reforges[Gears.Equipment1.Reforge][Gears.Equipment1.Rarity + Gears.Equipment1.Recomb].Strength
            Gears.Equipment1.Crit_Damage += Gears.Equipment1[Equipment1ID].Crit_Damage * (1 + Gears.Equipment1.Star / 50 * isWorld) + Reforges[Gears.Equipment1.Reforge][Gears.Equipment1.Rarity + Gears.Equipment1.Recomb].Crit_Damage
            Gears.Equipment1.Bonus_Attack_Speed += Gears.Equipment1[HelmetID].Bonus_Attack_Speed * (1 + Gears.Equipment1.Star / 50 * isWorld) + Reforges[Gears.Equipment1.Reforge][Gears.Equipment1.Rarity + Gears.Equipment1.Recomb].Bonus_Attack_Speed

            Gears.Equipment2.Strength = Gears.Equipment2[Equipment2ID].Strength * (1 + Gears.Equipment2.Star / 50 * isWorld) + Reforges[Gears.Equipment2.Reforge][Gears.Equipment2.Rarity + Gears.Equipment2.Recomb].Strength
            Gears.Equipment2.Crit_Damage += Gears.Equipment2[Equipment2ID].Crit_Damage * (1 + Gears.Equipment2.Star / 50 * isWorld) + Reforges[Gears.Equipment2.Reforge][Gears.Equipment2.Rarity + Gears.Equipment2.Recomb].Crit_Damage
            Gears.Equipment2.Bonus_Attack_Speed += Gears.Equipment2[HelmetID].Bonus_Attack_Speed * (1 + Gears.Equipment2.Star / 50 * isWorld) + Reforges[Gears.Equipment2.Reforge][Gears.Equipment2.Rarity + Gears.Equipment2.Recomb].Bonus_Attack_Speed

            Gears.Equipment3.Strength = Gears.Equipment3[Equipment3ID].Strength * (1 + Gears.Equipment3.Star / 50 * isWorld) + Reforges[Gears.Equipment3.Reforge][Gears.Equipment3.Rarity + Gears.Equipment3.Recomb].Strength
            Gears.Equipment3.Crit_Damage += Gears.Equipment3[Equipment3ID].Crit_Damage * (1 + Gears.Equipment3.Star / 50 * isWorld) + Reforges[Gears.Equipment3.Reforge][Gears.Equipment3.Rarity + Gears.Equipment3.Recomb].Crit_Damage
            Gears.Equipment3.Bonus_Attack_Speed += Gears.Equipment3[HelmetID].Bonus_Attack_Speed * (1 + Gears.Equipment3.Star / 50 * isWorld) + Reforges[Gears.Equipment3.Reforge][Gears.Equipment3.Rarity + Gears.Equipment3.Recomb].Bonus_Attack_Speed

            Gears.Equipment4.Strength = Gears.Equipment4[Equipment4ID].Strength * (1 + Gears.Equipment4.Star / 50 * isWorld) + Reforges[Gears.Equipment4.Reforge][Gears.Equipment4.Rarity + Gears.Equipment4.Recomb].Strength
            Gears.Equipment4.Crit_Damage += Gears.Equipment4[Equipment4ID].Crit_Damage * (1 + Gears.Equipment4.Star / 50 * isWorld) + Reforges[Gears.Equipment4.Reforge][Gears.Equipment4.Rarity + Gears.Equipment4.Recomb].Crit_Damage
            Gears.Equipment4.Bonus_Attack_Speed += Gears.Equipment4[HelmetID].Bonus_Attack_Speed * (1 + Gears.Equipment4.Star / 50 * isWorld) + Reforges[Gears.Equipment4.Reforge][Gears.Equipment4.Rarity + Gears.Equipment4.Recomb].Bonus_Attack_Speed
        }

        if (Universe === "Dungeon" && Gears.Helmet.isfloorhelmet === true) {
            Gears.Helmet.Strength *= 2;
            Gears.Helmet.Crit_Damage *= 2;
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
                Gears.Helmet.Strength *= (1 + Pets.BlazePetB);
                Gears.Helmet.Crit_Damage *= (1 + Pets.BlazePetB);
            }
            if (ChestPID === "Frozen_Blaze") {
                Gears.ChestPlate.Strength *= (1 + Pets.BlazePetB);
                Gears.ChestPlate.Crit_Damage *= (1 + Pets.BlazePetB);
            }
            if (LeggingsID === "Frozen_Blaze") {
                Gears.Leggings.Strength *= (1 + Pets.BlazePetB);
                Gears.Leggings.Crit_Damage *= (1 + Pets.BlazePetB);
            }
            if (BootsID === "Frozen_Blaze") {
                Gears.Boots.Strength *= (1 + Pets.BlazePetB);
                Gears.Boots.Crit_Damage *= (1 + Pets.BlazePetB);
            }
        }
        if (Universe === "Dungeon") {
            Weapons.Damage *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);
            Weapons.Strength *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);
            Weapons.Crit_Damage *= (1 + CatacombB + Weapons.Star / 10 + Weapons.MasterStar / 20);

            Gears.Helmet.Strength *= (1 + CatacombB + Gears.Helmet.Star / 10 + Gears.Helmet.MasterStar / 20);
            Gears.Helmet.Crit_Damage *= (1 + CatacombB + Gears.Helmet.Star / 10 + Gears.Helmet.MasterStar / 20);

            Gears.ChestPlate.Strength *= (1 + CatacombB + Gears.ChestPlate.Star / 10 + Gears.ChestPlate.MasterStar / 20);
            Gears.ChestPlate.Crit_Damage *= (1 + CatacombB + Gears.ChestPlate.Star / 10 + Gears.ChestPlate.MasterStar / 20);

            Gears.Leggings.Strength *= (1 + CatacombB + Gears.Leggings.Star / 10 + Gears.Leggings.MasterStar / 20);
            Gears.Leggings.Crit_Damage *= (1 + CatacombB + Gears.Leggings.Star / 10 + Gears.Leggings.MasterStar / 20);

            Gears.Boots.Strength *= (1 + CatacombB + Gears.Boots.Star / 10 + Gears.Boots.MasterStar / 20);
            Gears.Boots.Crit_Damage *= (1 + CatacombB + Gears.Boots.Star / 10 + Gears.Boots.MasterStar / 20);

            Gears.Equipment1.Strength *= (1 + CatacombB + Gears.Equipment1.Star / 10 + Gears.Equipment1.MasterStar / 20);
            Gears.Equipment1.Crit_Damage *= (1 + CatacombB + Gears.Equipment1.Star / 10 + Gears.Equipment1.MasterStar / 20);

            Gears.Equipment2.Strength *= (1 + CatacombB + Gears.Equipment2.Star / 10 + Gears.Equipment2.MasterStar / 20);
            Gears.Equipment2.Crit_Damage *= (1 + CatacombB + Gears.Equipment2.Star / 10 + Gears.Equipment2.MasterStar / 20);

            Gears.Equipment3.Strength *= (1 + CatacombB + Gears.Equipment3.Star / 10 + Gears.Equipment3.MasterStar / 20);
            Gears.Equipment3.Crit_Damage *= (1 + CatacombB + Gears.Equipment3.Star / 10 + Gears.Equipment3.MasterStar / 20);

            Gears.Equipment4.Strength *= (1 + CatacombB + Gears.Equipment4.Star / 10 + Gears.Equipment4.MasterStar / 20);
            Gears.Equipment4.Crit_Damage *= (1 + CatacombB + Gears.Equipment4.Star / 10 + Gears.Equipment4.MasterStar / 20);

        }

        //Tota Stats
        Stats.Strength = Gears.Strength =
            Weapons.Strength + Gears.Helmet.Strength + Gears.ChestPlate.Strength + Gears.Leggings.Strength + Gears.Boots.Strength +
            Gears.Equipment1.Strength + Gears.Equipment2.Strength + Gears.Equipment3.Strength + Gears.Equipment4.Strength +
            TReforges[AccesoryReforgeName].Strength * MagicalPower;

        Stats.Crit_Damage = Gears.Crit_Damage =
            Weapons.Crit_Damage + Gears.Helmet.Crit_Damage + Gears.ChestPlate.Crit_Damage + Gears.Leggings.Crit_Damage + Gears.Boots.Crit_Damage +
            Gears.Equipment1.Crit_Damage + Gears.Equipment2.Crit_Damage + Gears.Equipment3.Crit_Damage + Gears.Equipment4.Crit_Damage +
            TReforges[AccesoryReforgeName].Crit_Damage * MagicalPower;

        Stats.Bonus_Attack_Speed = Gears.Bonus_Attack_Speed =
            Weapons.Bonus_Attack_Speed + Gears.Helmet.Bonus_Attack_Speed + Gears.ChestPlate.Bonus_Attack_Speed + Gears.Leggings.Bonus_Attack_Speed + Gears.Boots.Bonus_Attack_Speed +
            Gears.Equipment1.Bonus_Attack_Speed + Gears.Equipment2.Bonus_Attack_Speed + Gears.Equipment3.Bonus_Attack_Speed + Gears.Equipment4.Bonus_Attack_Speed +
            TReforges[AccesoryReforgeName].Bonus_Attack_Speed * MagicalPower;

        if (Universe === "Dungeon") {
            Stats.Strength += Stats.BASE.Strength + Pets.EDragPetStrg + Pets.GDragPetStrg;
            Stats.Crit_Damage += Stats.BASE.Crit_Damage + Pets.EDragPetCD;
            Stats.Bonus_Attack_Speed += Stats.BASE.Bonus_Attack_Speed;

            Stats.Strength *= (1 + MasterSkull);

            Stats.E.Damage = Weapons.Damage + BlessingofStoneDamage;
            Stats.E.Strength = Stats.Strength + BlessingofPowerNumber;
            Stats.E.Crit_Damage = Stats.Crit_Damage + BlessingofPowerNumber;

            Stats.E.Strength *= (1 + BlessingofTimePercent);
            Stats.E.Crit_Damage *= (1 + BlessingofPowerPercent);

            Stats.E.Strength *= (1 + Legion);
            Stats.E.Crit_Damage *= (1 + Legion);
            Stats.E.Bonus_Attack_Speed *= (1 + Legion);
        }
        if (Universe === "World") {
            Stats.E.Damage = Weapons.Damage;

            Stats.Strength += Stats.BASE.Strength + Pets.EDragPetStrg + Pets.GDragPetStrg;
            Stats.Crit_Damage += Stats.BASE.Crit_Damage + Pets.EDragPetCD;

            Stats.E.Strength = Stats.Strength * (1 + Legion);
            Stats.E.Crit_Damage = Stats.Crit_Damage * (1 + Legion);
            Stats.E.Bonus_Attack_Speed = Stats.Bonus_Attack_Speed * (1 + Legion);
        }
        Stats.E.Strength *= (1 + Pets.EDragPetB);
        Stats.E.Crit_Damage *= (1 + Pets.EDragPetB);
        Stats.E.Bonus_Attack_Speed *= (1 + Pets.EDragPetB);
    }
    {// Prepare After Gear Priority 7
        Stats.Bonus_Attack_Speed = Weapons.Bonus_Attack_Speed;
        Stats.E.Bonus_Attack_Speed = (Stats.Bonus_Attack_Speed + Pets.GDragPetAS) * (1 + Legion) * (1 + Pets.EDragPetB) / 100;
    }
    {// Dmg-DPS Priority 8
        {// DmgBase
            DmgMin = DmgMax = DPSMin = DPSMax = (5 + Weapons.Damage + SellectedArrowDmg) * (1 + (Stats.E.Strength + Bestiary) / 100) * (1 + Stats.E.Crit_Damage / 100) * (1 + Enchants) * (1 + Pets.GDragPetB) * (1 + CArrowD) + Souleather;
        }
        {// DmgMin

        }
        {// DmgMax
            DmgMax *= (1 + Overload);
        }
        {// DPSMin
            DPSMin *= 2;
            DPSMin *= (1 + Stats.E.Bonus_Attack_Speed);
        }
        {// DPSMax
            DPSMax *= 3;
            DPSMax *= (1 + Overload);
            DPSMax *= (1 + Stats.E.Bonus_Attack_Speed);
        }
    }
    {// Print Damage  Priority 9
        if (Universe === "Dungeon") {
            if (DamageType === "Bow") {
                document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                        CatacombB: +%${(CatacombB * 100).toFixed(0)}<br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                          CArrowD: +%${(CArrowD * 100).toFixed(1)}<br>
                         CExtraAC: +%${(CExtraAC * 100).toFixed(0)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                         Overload: +%${(Overload * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.E.Bonus_Attack_Speed * 100).toFixed(1)}<br>
                      MasterSkull: +%${(MasterSkull * 100).toFixed(0)}
                `);
            } else {
                document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                        CatacombB: +%${(CatacombB * 100).toFixed(0)}<br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                          CArrowD: +%${(CArrowD * 100).toFixed(1)}<br>
                         CExtraAC: +%${(CExtraAC * 100).toFixed(0)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.E.Bonus_Attack_Speed * 100).toFixed(1)}<br>
                      MasterSkull: +%${(MasterSkull * 100).toFixed(0)}
                `);
            }
            document.getElementById("Blessings").innerHTML = (`Blessingof: <br>
                 Strength Percent:  +%${(BlessingofTimePercent * 100).toFixed(1)}<br>
              Crit Damage Percent:  +%${(BlessingofPowerPercent * 100).toFixed(1)}<br>
                     Power Number:  +${BlessingofPowerNumber.toFixed(1)}<br>
                     Stone Damage:  +${BlessingofStoneDamage.toFixed(1)}<br>
           Blessing Multiplictive:  +%${(BlessingMultiplictive * 100).toFixed(0)}
                `);
        }
        if (Universe === "World") {
            if (DamageType === "Bow") {
                document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                         Overload: +%${(Overload * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.E.Bonus_Attack_Speed * 100).toFixed(1)}
                `);
            }
            else {
                document.getElementById("Buffs").innerHTML = (`Buffs: <br>
                         Enchants: +%${(Enchants * 100).toFixed(1)}<br>
                           Legion: +%${(Legion * 100).toFixed(0)}<br>
                     Attack Speed: +%${(Stats.E.Bonus_Attack_Speed * 100).toFixed(1)}
                `);
            }
            document.getElementById("Blessings").innerHTML = (`
                `);
        }
        document.getElementById("Gear").innerHTML = (`
                           Weapon: <br>
                         Strength: ${Weapons.Strength.toFixed(2)}<br>
                       CritDamage: ${Weapons.Crit_Damage.toFixed(2)}<br><br>

                           Helmet: <br>
                         Strength: ${Gears.Helmet.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Helmet.Crit_Damage.toFixed(2)}<br><br>

                       ChestPlate: <br>
                         Strength: ${Gears.ChestPlate.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.ChestPlate.Crit_Damage.toFixed(2)}<br><br>

                         Leggings: <br>
                         Strength: ${Gears.Leggings.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Leggings.Crit_Damage.toFixed(2)}<br><br>

                            Boots: <br>
                         Strength: ${Gears.Boots.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Boots.Crit_Damage.toFixed(2)}
                `);
        document.getElementById("Equipment").innerHTML = (`
                    Equipment (1): <br>
                         Strength: ${Gears.Equipment1.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Equipment1.Crit_Damage.toFixed(2)}<br><br>

                    Equipment (2): <br>
                         Strength: ${Gears.Equipment2.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Equipment2.Crit_Damage.toFixed(2)}<br><br>

                    Equipment (3): <br>
                         Strength: ${Gears.Equipment3.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Equipment3.Crit_Damage.toFixed(2)}<br><br>

                    Equipment (4): <br>
                         Strength: ${Gears.Equipment4.Strength.toFixed(2)}<br>        
                       CritDamage: ${Gears.Equipment4.Crit_Damage.toFixed(2)}
                `);

        document.getElementById("Gear").title = (`
                       Gear Total:
                         Strength: ${Gears.Strength.toFixed(2)}      
                       CritDamage: ${Gears.Crit_Damage.toFixed(2)}
                    Gear Total Without Weapon
                         Strength: ${(Gears.Strength - Weapons.Strength).toFixed(2)}   
                       CritDamage: ${(Gears.Crit_Damage - Weapons.Crit_Damage).toFixed(2)}
                `);

        document.getElementById("Stats").innerHTML = (`Start Last<br>
                           Damage: ${Weapons.Damage.toFixed(2)}              E Damage: ${(Stats.E.Damage + SellectedArrowDmg + 5).toFixed(2)}<br>
                         Strength: ${Stats.Strength.toFixed(2)}              E Strength: ${Stats.E.Strength.toFixed(2)}<br>
                      Crit Damage: ${Stats.Crit_Damage.toFixed(2)}        E Crit Damage: ${Stats.E.Crit_Damage.toFixed(2)}<br>
                `);
    }
    {// Print  Priority 9
        document.getElementById("Result").innerHTML = (`
                           DmgMin: ${parseInt(DmgMin).toLocaleString('en-US')}
                           DmgMax: ${parseInt(DmgMax).toLocaleString('en-US')}<br>
                           DPSMin: ${parseInt(DPSMin).toLocaleString('en-US')}
                           DPSMax: ${parseInt(DPSMax).toLocaleString('en-US')}
                  `);
    }
    output()
}
