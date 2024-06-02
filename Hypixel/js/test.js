

function deneme() {
    let x = API.inventory.bag_contents.talisman_bag.data;
    const base64Data = x;//inanılmaz uzun nbt stringi
    console.log(base64Data)
    var atobdangecti = atob(base64Data);
    //console.log(atobdangecti)
    var nbtdengecti = nbt.parse(atobdangecti)
    //console.log(nbtdengecti)
    var jsonoldu = JSON.parse(nbtdengecti)
    console.log(jsonoldu)
}