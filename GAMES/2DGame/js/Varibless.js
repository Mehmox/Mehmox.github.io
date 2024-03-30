{// function Claculate(Universe, DmgType, Combatlvl, Catacomblvl, Classlvl, MasterSkull, Legion, LegionP, SouleatherLvL, SouleatherD, 
    // BlessingofPowerlvl, BlessingofStonelvl, BlessingofTimelvl, BlessingMultiplictive, 
    // BaseStrg, BaseCritdmg, AttackSpeed, ArrowDmg, Bestiary, Star) {
}
{// function Claculate(MasterSkull, Legion, LegionP, 
    // BlessingofPowerlvl, BlessingofStonelvl, BlessingofTimelvl, BlessingMultiplictive, 
    // BaseStrg, BaseCritdmg, AttackSpeed, Bestiary, Star) {
}
var MasterSkull = 0, Legion = 0, LegionP = 0, SouleatherLvL = 0, SouleatherSTR = 350,
    /*BaseStrg = 205.25, BaseCritdmg = 154, AttackSpeed = 0,*/
    /*Star = 50,*/
    ArrowDmg = 1, Bestiary = 37,
    Combatdmg = 0, CatacombB = 10, CArrowD = 0, CExtraAC = 0, E1, E2, E3, E4, E5, Enchants = 0, Overload = 0,

    BlazePetB = 0, BlazePetFmngB = 0, EDragPetB = 0, EDragPetStrg = 0, EDragPetCC = 0, EDragPetCD = 0,
    GDragPetB = 0, GDragPetStrg = 0, GDragPetAS = 0,

    /*WeapondmgL = 0, Strg = 0, StrgL = 0, Critdmg = 0, CritdmgL = 0,*/
    BlessingofPowerlvl = 0, BlessingofStonelvl = 0, BlessingofTimelvl = 0, BlessingMultiplictive = 0,
    BlessingofDamagePercent = 0, BlessingofDamageNumber = 0,
    BlessingofPowerPercent = 0, BlessingofPowerNumber = 0,
    BlessingofStoneDamage = 0, BlessingofTimePercent = 0;

var Stats = {
    Base: {
        Strenght: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
    },
    Strenght: 0,
    Crit_Damage: 0,
    Bonus_Attack_Speed: 0,
    Effective: {
        Strenght: 0,
        Crit_Damage: 0,
        Bonus_Attack_Speed: 0,
    }
}
var
    /*
    Weapondmg = 0, WeaponBASEdmg = 0,
        WeaponStrg = 0, WeaponBASEStrg = 0,
        WeaponCritD = 0, WeaponBASECritD = 0,
        HelmetStrg = 0, HelmetBASEStrg = 0,
        HelmetCritD = 0, HelmetBASECritD = 0,
        ChestPStrg = 0, ChestPBASEStrg = 0,
        ChestPCritD = 0, ChestPBASECritD = 0,
        LeggingsStrg = 0, LeggingsBASEStrg = 0,
        LeggingsCritD = 0, LeggingsBASECritD = 0,
        BootStrg = 0, BootBASEStrg = 0,
        BootCritD = 0, BootBASECritD = 0,
    */
    CloakStrg = 0, GearTotalStrg = 0, GearTotalCritD = 0,
    DmgMin, DmgMax, DPSMin, DPSMax, N = 4, i = 0,
    Combatlvl = parseInt(document.getElementById("rageinput1").value),
    Catacomblvl = parseInt(document.getElementById("rageinput2").value),
    Classlvl = parseInt(document.getElementById("rageinput3").value);

var Armors = {
    Helmet: {
        Necron: {
            Strenght: 0,
            Crit_Damage: 0,
            Base: {
                Strenght: 40,
                Crit_Damage: 30,
            },
            Star: 0,
        },
        Frozen_blaze: {
            Strenght: 0,
            Crit_Damage: 0,
            Base: {
                Strenght: 40,
                Crit_Damage: 0,
            },
        },
        Unstable_Dragon: {
            Strenght: 0,
            Crit_Damage: 0,
            Base: {
                Strenght: 10,
                Crit_Damage: 15,
            },
        },
    },
    ChestP: {

    },
    Leggings: {

    },
    Boots: {

    },
}

var Equipments = {

}
var Weapons = {
    Term: {
        Damage: 0,
        Strenght: 0,
        Crit_Damage: 0,
        Base: {
            Damage: 310,
            Strenght: 50,
            Crit_Damage: 250,
        },
    },
}

var Universe,
    DmgType,
    ClassType,
    WeaponType,
    HelmetType,
    ChestPType,
    LeggingsType,
    BootsType,
    Pet;
/*
204:
1527
3305 x2.16437459070072
5087 x3.331368696791094
 
 
5087-1527=3560
3305-1527=1778*2=3556
 
 
205:
1531
3309 x2.161332462442848
 
214:
1571
3349 x2.131763208147677
 
304:
1974
3752 x1,900709219858156
*/

function Try() {
    console.log("pass")
}