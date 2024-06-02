function getUuid() {
    return axios.get(`https://playerdb.co/api/player/minecraft/${nick}`)
        .then((response) => {
            uuid = response.data.data.player.id;
            // console.log("uuid:" + uuid);
        })
        .catch((err) => {
            console.log(err);
        })
}
function getPlayerData() {
    return axios.get(`https://api.hypixel.net/v2/skyblock/profiles?key=${localStorage.getItem(key)}&uuid=${uuid}`)
        .then((response) => {
            uuidd = "";
            for (let i = 0; i < uuid.length; i++) {
                if (uuid[i] !== "-")
                    uuidd += uuid[i];
            }
            APIBD = response.data.profiles;
            // console.log(APIBD)
        })
        .catch((err) => {
            if (err.response.status === 403)
                console.log("Key expired");
            else
                console.log(err);
        })
}
function getSkillData() {
    return axios.get("https://api.hypixel.net/v2/resources/skyblock/skills")
        .then((response) => {
            BDSkills = response.data.skills;
            // console.log(BDSkills);
        })
        .catch((err) => {
            console.log(err);
        })
}
function getItemData() {
    return axios.get("https://api.hypixel.net/v2/resources/skyblock/items")
        .then((response) => {
            BDItems = response.data.items;
            // console.log("ItemBD: ", BDItems);
        })
        .catch((err) => {
            console.log(err);
        })
}
async function start() {
    Prepare();
    await getSkillData();
    await getItemData();
    OrganiseVars();
    await pull();
}
window.onload = start()