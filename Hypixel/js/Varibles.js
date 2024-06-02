const htmlbody = document.querySelector('body');
const inptkey = document.querySelector('#key')
const allslct = document.querySelectorAll('select');
const nickinpt = document.querySelector('#nick');
const profileslct = document.querySelector('#profile');
const manulbtn = document.querySelector('#manual');

var nick = "mehmox", ProfileID, uuid, uuidd;
if (localStorage.getItem(key) === null)
    localStorage.setItem(key, inptkey.value);
else
    inptkey.value = localStorage.getItem(key);
var APIBD, API, BDItems, BDSkills;
var isworking;
var TestVar = 0;

let AllItems = {};
let targets = [
    "HELMET", "CHESTPLATE", "LEGGINGS", "BOOTS",
    "NECKLACE", "CLOAK", "BELT", "BRACELET", "GLOVES",
    "SWORD", "LONGSWORD",
    "BOW", "WAND",
];
var Moblist = ["Zombie", "Spider", "Wolf", "Enderman"];
var ItemIDtoName = {
    POWER_WITHER_LEGGINGS: "Necron_LEGGINGS",
    PEED_WITHER_LEGGINGS: "Maxor_LEGGINGS",
    TANK_WITHER_LEGGINGS: "Goldor_LEGGINGS",
    WISE_WITHER_LEGGINGS: "Storm_LEGGINGS",
    WITHER_LEGGINGS: "Wither_LEGGINGS",
};
var Buffs = {
    BlessingofTimelvl: 0,
    BlessingofPowerlvl: 0,
    BlessingofStonelvl: 0,
    BlessingMultiplictive: 0,

    BlessingofDamagePercent: 0,
    BlessingofDamageNumber: 0,

    BlessingofPowerPercent: 0,
    BlessingofPowerNumber: 0,

    BlessingofStoneDamage: 0,
    BlessingofTimePercent: 0,
};
var Profile = {
    skills: {
        COMBAT: {
            level: 0,
        },
        CATACOMB: {
            level: 0,
            multipier: 10,
        },
        FORAGING: {
            level: 0,
        },
        ENCHANTING: {
            level: 0,
        },
        ALCHEMY: {
            level: 0,
        },
    },
};

//maybe it be diffrent
var MasterSkull = 0, MasterSkullLvl = 0,
    Legion = 0, Legionlvl = 0, LegionP = 0,
    Souleather = 0, SouleatherLvL = 1, SouleatherSTR = 0,
    CArrowD = 0, CExtraAC = 0,
    Bestiary = 0, SellectedArrowDmg = 1,
    MagicalPower = 0;

var DmgMin, DmgMax, DPS, N,
    DamageType, lock, Universe, ClassName, Pet,
    AccesoryReforgeName = "";

var oldProfile = {
    Damage: 0,
    Strength: 0,
    CritDamage: 0,
    Intelligence: 0,
    BaseAbilityDamage: 0,
    AbilityDamage: 0,
    Bestiary: {
    },
    weapon: {
        Damage: 0,
        Strength: 0,
        CritDamage: 0,
        Intelligence: 0,
        BaseAbilityDamage: 0,
        AbilityDamage: 0,
    },
};
var Pets = {
    "": {
        Damage: 0,
        Strength: 0,
        CritDamage: 0,
        Intelligence: 0,
        AbilityDamage: 0,
        Level: 0,
        MaxLevel: 100,
        tier: "",
        passive: {
            PetArmorBuff: 0,
            BlazePetFmngBuff: 0,
            PetStatPercentBuff: 0,
            PetEnchantBuff: 0,
            PetStrengthPercentBuff: 0,
        }
    },
};
var Enchants = {
    "": {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    },
    Overload: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
    },
};