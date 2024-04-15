var MasterSkull = 0, MasterSkullLvl = 0,
    Legion = 0, Legionlvl = 0, LegionP = 0,
    Souleather = 0, SouleatherLvL = 1, SouleatherSTR = 90,
    CatacombB = 10, CArrowD = 0, CExtraAC = 0, E1, E2, E3, E4, E5,
    Combatdmg = 0, Enchants = 0, Overload = 0,
    Bestiary = 0, SellectedArrowDmg = 1,
    MagicalPower = 0,


    BlessingofTimelvl = 0,
    BlessingofPowerlvl = 0,
    BlessingofStonelvl = 0,
    BlessingMultiplictive = 0,

    BlessingofDamagePercent = 0, BlessingofDamageNumber = 0,
    BlessingofPowerPercent = 0, BlessingofPowerNumber = 0,
    BlessingofStoneDamage = 0, BlessingofTimePercent = 0;

var DmgMin, DmgMax, DPSMin, DPSMax, N = 4, i = 0,
    Combatlvl = parseInt(document.getElementById("rageinput1").value),
    Catacomblvl = parseInt(document.getElementById("rageinput2").value),
    Classlvl = 0,
    DamageType,
    Universe,
    ClassName,
    WeaponName,
    HelmetName, Equipment1Name,
    ChestPName, Equipment2Name,
    LeggingsName, Equipment3Name,
    BootsName, Equipment4Name,
    Pet,
    AccesoryReforgeName;


var Stats = {
    Damage: 0,
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    BASE: {
        Strength: 0,
        Crit_Damage: 0,
    },
    E: {
        Damage: 0,
        Strength: 0,
    }
}

var Weapons = {
    Damage: 0,
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Rarity: undefined,

    Reforge: "Non",
    Recomb: 0,
    Star: 0,
    MasterStar: 0,

    Hand: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Rarity: 0,
        Bonus_Attack_Speed: 0,
    },
    Term: {
        Damage: 310,
        Strength: 50,
        Crit_Damage: 250,
        Bonus_Attack_Speed: 40,
        Rarity: 5,
    },
    Juju: {
        Damage: 310,
        Strength: 40,
        Crit_Damage: 110,
        Bonus_Attack_Speed: 0,
        Rarity: 4,
    },
    GS: {
        Damage: 500,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: 5,
    },
    Giant_Cleaver: {
        Damage: 235,
        Strength: 120,
        Crit_Damage: 120,
        Bonus_Attack_Speed: 0,
        Rarity: 4,
    },
    Hyper_Cleaver: {
        Damage: 175,
        Strength: 100,
        Crit_Damage: 100,
        Bonus_Attack_Speed: 0,
        Rarity: 4,
    },
    Super_Cleaver: {
        Damage: 105,
        Strength: 20,
        Crit_Damage: 20,
        Bonus_Attack_Speed: 0,
        Rarity: 3,
    },
    Cleaver: {
        Damage: 40,
        Strength: 10,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: 2,
    },
    FOT: {
        Damage: 160,
        Strength: 300,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: 5,
    },
    Livid_Dagger: {
        Damage: 210,
        Strength: 60,
        Crit_Damage: 50,
        Bonus_Attack_Speed: 50,
        Rarity: 5,
    },
    Artisanal: {
        Damage: 40,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: 3,
    },
}

var Gears = {
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Helmet: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        isfloorhelmet: false,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
            isfloorhelmet: false,
        },
        DNH: {
            Strength: 40,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 6,
            isfloorhelmet: true,
        },
        Necron: {
            Strength: 40,
            Crit_Damage: 30,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
            isfloorhelmet: false,
        },
        Frozen_Blaze: {
            Strength: 40,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
            isfloorhelmet: false,
        },
        Unstable_Dragon: {
            Strength: 0,
            Crit_Damage: 15,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
            isfloorhelmet: false,
        },
    },
    ChestPlate: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Necron: {
            Strength: 40,
            Crit_Damage: 30,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Frozen_Blaze: {
            Strength: 40,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Unstable_Dragon: {
            Strength: 0,
            Crit_Damage: 15,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
    },
    Leggings: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Necron: {
            Strength: 40,
            Crit_Damage: 30,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Frozen_Blaze: {
            Strength: 40,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Unstable_Dragon: {
            Strength: 0,
            Crit_Damage: 15,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
    },
    Boots: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Necron: {
            Strength: 40,
            Crit_Damage: 30,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Frozen_Blaze: {
            Strength: 40,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
        Unstable_Dragon: {
            Strength: 0,
            Crit_Damage: 15,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
    },
    Equipment1: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Bone: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 4,
        },
    },
    Equipment2: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Assassin: {
            Strength: 20,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 4,
        },
        FAssassin: {
            Strength: 25,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 5,
        },
    },
    Equipment3: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Adaptive: {
            Strength: 5,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 4,
        },
    },
    Equipment4: {
        Damage: 0,
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: undefined,

        Reforge: "Non",
        Recomb: 0,
        Star: 0,
        MasterStar: 0,
        Naked: {
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 0,
        },
        Soulweaver: {
            Strength: 10,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
            Rarity: 4,
        },
    },

}

var Reforges = {
    Non: {
        Armor_Compatibility: true,
        Sword_Compatibility: true,
        Bow_Compatibility: true,
        Equipment_Compatibility: true,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
    },
    Fierce: {
        Armor_Compatibility: true,
        Sword_Compatibility: false,
        Bow_Compatibility: false,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 2,
            Crit_Damage: 4,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 4,
            Crit_Damage: 7,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 6,
            Crit_Damage: 10,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 8,
            Crit_Damage: 14,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 10,
            Crit_Damage: 18,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 12,
            Crit_Damage: 24,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 12,
            Crit_Damage: 24,
            Bonus_Attack_Speed: 0,
        },
    },
    Ancient: {
        Armor_Compatibility: true,
        Sword_Compatibility: false,
        Bow_Compatibility: false,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 4,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 8,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 12,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 18,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 25,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 35,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 35,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
    },
    Hasty: {
        Armor_Compatibility: false,
        Sword_Compatibility: false,
        Bow_Compatibility: true,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 3,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 5,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 7,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 10,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 15,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 20,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 20,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
    },
    Precise: {
        Armor_Compatibility: false,
        Sword_Compatibility: false,
        Bow_Compatibility: true,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 3,
            Crit_Damage: 5,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 7,
            Crit_Damage: 10,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 12,
            Crit_Damage: 18,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 18,
            Crit_Damage: 32,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 25,
            Crit_Damage: 50,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 34,
            Crit_Damage: 70,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 34,
            Crit_Damage: 70,
            Bonus_Attack_Speed: 0,
        },
    },
    Spiritual: {
        Armor_Compatibility: false,
        Sword_Compatibility: false,
        Bow_Compatibility: true,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 4,
            Crit_Damage: 10,
            Bonus_Attack_Speed: 0,
        },
        2: {// UNCOMMON
            Strength: 8,
            Crit_Damage: 15,
            Bonus_Attack_Speed: 0,
        },
        3: {// RARE
            Strength: 14,
            Crit_Damage: 23,
            Bonus_Attack_Speed: 0,
        },
        4: {// EPICK
            Strength: 20,
            Crit_Damage: 37,
            Bonus_Attack_Speed: 0,
        },
        5: {// LEGENDRY
            Strength: 28,
            Crit_Damage: 55,
            Bonus_Attack_Speed: 0,
        },
        6: {// MYTHIC
            Strength: 38,
            Crit_Damage: 75,
            Bonus_Attack_Speed: 0,
        },
        7: {// MYTHIC+
            Strength: 38,
            Crit_Damage: 75,
            Bonus_Attack_Speed: 0,
        },
    },
    Spicy: {
        Armor_Compatibility: false,
        Sword_Compatibility: true,
        Bow_Compatibility: false,
        Equipment_Compatibility: false,
        0: {//0
            Strength: 0,
            Crit_Damage: 0,
            Bonus_Attack_Speed: 0,
        },
        1: {// COMMON
            Strength: 2,
            Crit_Damage: 25,
            Bonus_Attack_Speed: 1,
        },
        2: {// UNCOMMON
            Strength: 3,
            Crit_Damage: 35,
            Bonus_Attack_Speed: 2,
        },
        3: {// RARE
            Strength: 4,
            Crit_Damage: 45,
            Bonus_Attack_Speed: 4,
        },
        4: {// EPICK
            Strength: 7,
            Crit_Damage: 60,
            Bonus_Attack_Speed: 7,
        },
        5: {// LEGENDRY
            Strength: 10,
            Crit_Damage: 80,
            Bonus_Attack_Speed: 10,
        },
        6: {// MYTHIC
            Strength: 12,
            Crit_Damage: 100,
            Bonus_Attack_Speed: 15,
        },
        7: {// MYTHIC+
            Strength: 12,
            Crit_Damage: 100,
            Bonus_Attack_Speed: 15,
        },
    },
}

var TReforges = {
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Non: {
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        BStrength: 0,
        BCrit_Damage: 0,
        BBonus_Attack_Speed: 0,
    },
    Silky: {
        Strength: 0,
        Crit_Damage: 95 / 100,
        Bonus_Attack_Speed: 0,
        BStrength: 0,
        BCrit_Damage: 0,
        BBonus_Attack_Speed: 5,
    },
    Itchy: {
        Strength: 30 / 100,
        Crit_Damage: 35 / 100,
        Bonus_Attack_Speed: 30 / 100,
        BStrength: 15,
        BCrit_Damage: 15,
        BBonus_Attack_Speed: 0,
    },
    Fortuitous: {
        Strength: 20 / 100,
        Crit_Damage: 20 / 100,
        Bonus_Attack_Speed: 0,
        BStrength: 0,
        BCrit_Damage: 0,
        BBonus_Attack_Speed: 0,
    },
}

var Pets = {
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,

    PetArmorPercentBuff: 0,
    BlazePetFmngB: 0,

    PetStatPercentBuff: 0,
    EDragPetStrg: 0,
    EDragPetCC: 0,
    EDragPetCD: 0,

    GDragPetDmgB: 0,
    GDragPetStrg: 0,
    GDragPetStrgPercent: 0,
    GDragPetAS: 0,
    Non: {
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,

        PetArmorPercentBuff: 0,
        BlazePetFmngB: 0,

        PetStatPercentBuff: 0,

        GDragPetDmgB: 0,
        GDragPetStrgPercent: 0,
    },
    Ender_Dragon: {
        Strength: 50,
        Crit_Damage: 50 + 10,
        Bonus_Attack_Speed: 0,

        PetArmorPercentBuff: 0,
        BlazePetFmngB: 0,

        PetStatPercentBuff: 10,

        GDragPetDmgB: 0,
        GDragPetStrgPercent: 0,
    },
    Frozen_Blaze: {
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,

        PetArmorPercentBuff: 0.4,
        BlazePetFmngB: 30,

        PetStatPercentBuff: 10,

        GDragPetDmgB: 0,
        GDragPetStrgPercent: 0,
    },
    Golden_Dragon: {
        Strength: 120,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 50,

        PetArmorPercentBuff: 0,
        BlazePetFmngB: 0,

        PetStatPercentBuff: 0,

        GDragPetDmgB: 250,
        GDragPetStrgPercent: 5,
    }

}

var
    HelmetSC = Gears.Helmet,
    ChestPCS = Gears.ChestPlate,
    LegSC = Gears.Leggings,
    BootsSC = Gears.Boots,

    Equip1SC = Gears.Equipment1,
    Equip2SC = Gears.Equipment2,
    Equip3SC = Gears.Equipment3,
    Equip4SC = Gears.Equipment4;




//test
var
    MagicalPowerfandom,
    MagicalPowerofficial,
    ofa;