function Prepare() {
    inptkey.addEventListener('change', async function () {
        localStorage.setItem(key, this.value);
        pull();
    });
    nickinpt.addEventListener('change', async () => pull());
    profileslct.addEventListener('change', () => {
        ProfileID = profileslct.value;
        API = APIBD[ProfileID].members[uuidd];
        console.log(API);
        ExptoLvL();
        Calculate();
    });
    allslct.forEach(element => {
        if (element !== profileslct)
            element.addEventListener('change', () => Calculate());
    });
}
function OrganiseVars() {
    targets.forEach(element => {
        AllItems[element] = {};
    });
    for (let i = 0; i < BDItems.length; i++) {
        targets.forEach(element => {
            if (BDItems[i].category === element) {
                AllItems[element][BDItems[i].id] = BDItems[i];
            }
        });
    }
}

async function pull() {
    nickinpt.classList.add('disabled');
    profileslct.classList.add('disabled');
    nick = nickinpt.value;
    ProfileID = 2;
    await getUuid();
    await getPlayerData();
    nickinpt.classList.remove('disabled');
    profileslct.classList.remove('disabled');
    setSelect();
}
async function setSelect() {
    for (let i = profileslct.length; i > 1; i--) {
        profileslct[i - 1].remove();
    };
    for (let i = 0; i < APIBD.length; i++) {
        let newoption = document.createElement('option')
        newoption.innerText = APIBD[i].cute_name;
        newoption.value = i;
        profileslct.appendChild(newoption);
    };
}
function ExptoLvL() {
    try {
        Profile.skills["CATACOMB"].selected_dungeon_class = API.dungeons.selected_dungeon_class;
    } catch (error) {
        console.log("This Profile has no selected dungeon class")
    }
    for (let SkillName in Profile.skills) {
        try {
            if (SkillName === "CATACOMB") {
                continue;
            }
            for (let j = 0;
                BDSkills[SkillName].levels[j].totalExpRequired <
                API.player_data.experience["SKILL_" + SkillName]; j++) {

                Profile.skills[SkillName].level = BDSkills[SkillName].levels[j].level;
            }
        } catch (error) {
            console.log(`This Profile has no ${SkillName} Level`)
        }
    }
    // console.log(Profile.skills);
}
async function SetAPIData() {

}

async function Calculate() {
    // SetAPIData();
    TestVar++;
    console.log(`Calculate: ${TestVar}`);
    // deneme();
    DamageType = document.getElementById("DamageType").value;
    Universe = document.getElementById("Universe").value;
    // Pets = API.pets_data.pets;
    {
        // GearIDlist.weapon = "Aurora_Staff"
        // {
        //     {
        //         try {
        //             GearIDlist.helmet = whatIwant.armor.boots.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.helmet = ""
        //         }
        //         try {
        //             GearIDlist.chestplate = whatIwant.armor.leggings.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.chestplate = ""
        //         }
        //         try {
        //             GearIDlist.leggings = whatIwant.armor.chestplate.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.leggings = ""
        //         }
        //         try {
        //             GearIDlist.boots = whatIwant.armor.helmet.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.boots = ""
        //         }
        //     }
        //     {
        //         try {
        //             GearIDlist.necklace = whatIwant.equipment.necklace.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.necklace = ""
        //         }
        //         try {
        //             GearIDlist.cloak = whatIwant.equipment.cloak.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.cloak = ""
        //         }
        //         try {
        //             GearIDlist.belt = whatIwant.equipment.belt.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.belt = ""
        //         }
        //         try {
        //             GearIDlist.gloves = whatIwant.equipment.gloves.tag.ExtraAttributes.id
        //         } catch (error) {
        //             GearIDlist.gloves = ""
        //         }
        //     }
        // }
        // if (whatIwant.pets[0].active === true) {
        //     Petstring = whatIwant.pets[0].display_name
        //     Pet = ""
        //     for (let i = 0; i < Petstring.length; i++)
        //         if (Petstring[i] !== " ")
        //             Pet += Petstring[i]
        //         else
        //             Pet += "_"
        // } else
        //     Pet = ""

        // console.log("weapon: " + GearIDlist.weapon)
        // console.log("helmet: " + GearIDlist.helmet)
        // console.log("chestplate: " + GearIDlist.chestplate)
        // console.log("leggings: " + GearIDlist.leggings)
        // console.log("boots: " + GearIDlist.boots)
        // console.log("necklace: " + GearIDlist.necklace)
        // console.log("cloak: " + GearIDlist.cloak)
        // console.log("belt: " + GearIDlist.belt)
        // console.log("gloves: " + GearIDlist.gloves)
        // console.log(Pet)

        // petset()
        // gearset()
        // abicasechecker()
        // Magicalpowercal()
        // masterskullchecker()
    }
    // deneme();
}