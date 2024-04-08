var MasterSkull = 0, MasterSkullLvl = 0,
    Legion = 0, Legionlvl = 0, LegionP = 0,
    Souleather = 0, SouleatherLvL = 0, SouleatherSTR = 0,
    CatacombB = 10, CArrowD = 0, CExtraAC = 0, E1, E2, E3, E4, E5,
    Combatdmg = 0, Enchants = 0, Overload = 0,
    Bestiary = 0, SellectedArrowDmg = 1,
    MagicalPower = 0,

    BlazePetB = 0, BlazePetFmngB = 0, EDragPetB = 0, EDragPetStrg = 0, EDragPetCC = 0, EDragPetCD = 0,
    GDragPetB = 0, GDragPetStrg = 0, GDragPetAS = 0,


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
    Universe,
    DamageType,
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
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
    }
}

var Weapons = {
    Damage: 0,
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Star: 0,
    MasterStar: 0,
    Reforge: "Non",
    Recomb: 0,
    Rarity: null,
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
    Hyper_Cleaver: {
        Damage: 175,
        Strength: 100,
        Crit_Damage: 100,
        Bonus_Attack_Speed: 0,
        Rarity: 4,
    },
    Giant_Cleaver: {
        Damage: 235,
        Strength: 120,
        Crit_Damage: 120,
        Bonus_Attack_Speed: 0,
        Rarity: 4,
    },
    Livid_Dagger: {
        Damage: 210,
        Strength: 60,
        Crit_Damage: 50,
        Bonus_Attack_Speed: 50,
        Rarity: 5,
    },
    FOT: {
        Damage: 160,
        Strength: 300,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Rarity: 5,
    },
}

var Gears = {
    Strength: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Helmet: {
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
        Star: 0,
        MasterStar: 0,
        Reforge: "Non",
        Recomb: 0,
        Rarity: null,
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
    Non: {
        Strength: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
    },
    Fortuitous: {
        Strength: 20 / 100,
        Crit_Damage: 20 / 100,
        Bonus_Attack_Speed: 0,
    },
    Silky: {
        Strength: 0,
        Crit_Damage: 22.8,
        Bonus_Attack_Speed: 0,
    },
    Itchy: {
        Strength: 7.2,
        Crit_Damage: 8.4,
        Bonus_Attack_Speed: 2.15,
    },

}

var Pets = {
    BlazePetB: 0,
    BlazePetFmngB: 0,

    EDragPetB: 0,
    EDragPetStrg: 0,
    EDragPetCC: 0,
    EDragPetCD: 0,

    GDragPetB: 0,
    GDragPetStrg: 0,
    GDragPetAS: 0,
    Non: {
        BlazePetB: 0,
        BlazePetFmngB: 0,

        EDragPetB: 0,
        EDragPetStrg: 0,
        EDragPetCC: 0,
        EDragPetCD: 0,

        GDragPetB: 0,
        GDragPetStrg: 0,
        GDragPetAS: 0,
    },
    Ender_Dragon: {
        BlazePetB: 0,
        BlazePetFmngB: 0,

        EDragPetB: 0.1,
        EDragPetStrg: 50,
        EDragPetCC: 10,
        EDragPetCD: 60,

        GDragPetB: 0,
        GDragPetStrg: 0,
        GDragPetAS: 0,
    },
    Frozen_Blaze: {
        BlazePetB: 0.4,
        BlazePetFmngB: 30,

        EDragPetB: 0,
        EDragPetStrg: 0,
        EDragPetCC: 0,
        EDragPetCD: 0,

        GDragPetB: 0,
        GDragPetStrg: 0,
        GDragPetAS: 0,
    },
    Golden_Dragon: {
        BlazePetB: 0,
        BlazePetFmngB: 0,

        EDragPetB: 0,
        EDragPetStrg: 0,
        EDragPetCC: 0,
        EDragPetCD: 0,

        GDragPetB: 2.5,
        GDragPetStrg: 140,
        GDragPetAS: 50,
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
var ofa
