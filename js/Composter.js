<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hypixel Skyblock</title>
    <link rel="stylesheet" href="css/Dmg.css">
    <link rel="icon" href="img/Minecrafticon.png" type="css/x-icon">
</head>

<body>
    <div>
        <table class="in_out_Table" id="output">
            <tr>
                <td style="display: flex; border: unset;">
                    <table>
                        <tr>
                            <td id="Buffs"></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td id="Blessings"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td style="display: flex; border: unset;">
                    <table>
                        <tr>
                            <td id="Gear" title="Gear"></td>
                        </tr>
                    </table>
                    <table>
                        <tr>
                            <td id="Equipment" title="Equipment"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td id="Stats"></td>
            </tr>
            <tr>
                <td id="Result"></td>
            </tr>
            <tr>
                <td id="Test Result"></td>
            </tr>
        </table>

        <table class="in_out_Table">
            <thead>
                <tr>
                    <td>
                        <select id="DamageType" onchange="Calculate()">
                            <option value="Mele" selected>Melee Damage</option>
                            <option value="Bow">Bow Damage</option>
                            <option value="Abilty">Ability Damage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="UniverseType" onchange="Calculate()">
                            <option value="World" selected>World</option>
                            <option value="Dungeon">Dungeon</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="ClassType" onchange="Calculate()">
                            <option value="Non" selected>Class</option>
                            <option value="Archer">Archer</option>
                            <option value="Berserk">Berserk</option>
                            <option value="Mage">Mage</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Combatlvl <span id="rageoutput1" class="rageoutput"></span><br>
                        <input id="rageinput1" type="range" min="0" max="60" value="53" oninput="Calculate()">
                    </td>
                </tr>
                <tr>
                    <td>Catacomblvl <span id="rageoutput2" class="rageoutput"></span><br>
                        <input id="rageinput2" type="range" min="0" max="50" value="0" oninput="Calculate()">
                    </td>
                </tr>
                <tr>
                    <td>Classlvl <span id="rageoutput3" class="rageoutput"></span><br>
                        <input id="rageinput3" type="range" min="0" max="50" value="0" oninput="Calculate()">
                    </td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>BASE Strength <input id="BaseSTR" type="number" value="210.25" onchange="Calculate()"></td>
                    <td>Bestiary Strength <input id="BestiarySTR" type="number" value="37" onchange="Calculate()"></td>
                    <td>BASE CritDamage <input id="BaseCritD" type="number" value="154" onchange="Calculate()"></td>
                </tr>
                <tr>
                    <td>Magical Power <input id="MP" type="number" value="0" min="0" onchange="Calculate()"></td>
                    <td>
                        <select id="MPR" onchange="Calculate()">
                            <option value="Non" selected>Non</option>
                            <option value="Fortuitous">Fortuitous</option>
                            <option value="Silky">Silky</option>
                            <option value="Itchy">Itchy</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Weapon" onchange="Calculate()">
                            <option value="Hand">Weapon</option>
                            <option value="Term">Term</option>
                            <option value="Hyper_Cleaver">Hyper Cleaver</option>
                            <option value="Giant_Cleaver">Giant Cleaver</option>
                            <option value="Livid_Dagger">Livid Dagger</option>
                            <option value="FOT" selected>Flower Of Truth</option>
                        </select>
                    </td>
                    <td>Star <input id="WeaponStarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="WeaponStar"></span></td>
                    <td>
                        <select id="WeaponReforge" onchange="Calculate()">
                            <option value="Non">Reforge</option>
                            <option value="Hasty">Hasty</option>
                            <option value="Precise">Precise</option>
                            <option value="Spiritual">Spiritual</option>
                            <option value="Spicy" selected>Spicy</option>
                        </select>
                        <label><input id="WeaponRecomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Helmet" onchange="Calculate()">
                            <option value="Naked" selected>Helmet</option>
                            <option value="Necron">Necron</option>
                            <option value="DNH">D Necron Head</option>
                            <option value="Frozen_Blaze">Frozen Blaze</option>
                            <option value="Unstable_Dragon">Unstable Dragon</option>
                        </select>
                    </td>
                    <td>Star <input id="HelmetStarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="HelmetStar"></span></td>
                    <td>
                        <select id="HelmetReforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                            <option value="Fierce">Fierce</option>
                            <option value="Ancient">Ancient</option>
                        </select>
                        <label><input id="HelmetRecomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="ChestP" onchange="Calculate()">
                            <option value="Naked" selected>ChestPlate</option>
                            <option value="Necron">Necron</option>
                            <option value="Frozen_Blaze">Frozen Blaze</option>
                            <option value="Unstable_Dragon">Unstable Dragon</option>
                        </select>
                    </td>
                    <td>Star <input id="ChestPStarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="ChestPStar"></span></td>
                    <td>
                        <select id="ChestPReforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                            <option value="Fierce">Fierce</option>
                            <option value="Ancient">Ancient</option>
                        </select>
                        <label><input id="ChestPRecomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Leggings" onchange="Calculate()">
                            <option value="Naked" selected>Leggings</option>
                            <option value="Necron">Necron</option>
                            <option value="Frozen_Blaze">Frozen Blaze</option>
                            <option value="Unstable_Dragon">Unstable Dragon</option>
                        </select>
                    </td>
                    <td>Star <input id="LeggingsStarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="LeggingsStar"></span></td>
                    <td>
                        <select id="LeggingsReforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                            <option value="Fierce">Fierce</option>
                            <option value="Ancient">Ancient</option>
                        </select>
                        <label><input id="LeggingsRecomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Boots" onchange="Calculate()">
                            <option value="Naked" selected>Boots</option>
                            <option value="Necron">Necron</option>
                            <option value="Frozen_Blaze">Frozen Blaze</option>
                            <option value="Unstable_Dragon">Unstable Dragon</option>
                        </select>
                    </td>
                    <td>Star <input id="BootsStarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="BootsStar"></span></td>
                    <td>
                        <select id="BootsReforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                            <option value="Fierce">Fierce</option>
                            <option value="Ancient">Ancient</option>
                        </select>
                        <label><input id="BootsRecomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Pets" onchange="Calculate()">
                            <option value="Non" selected>Pet</option>
                            <option value="Ender_Dragon">Ender
                                Dragon</option>
                            <option value="Frozen_Blaze">Frozen
                                Blaze</option>
                            <option value="Golden_Dragon">Golden
                                Dragon</option>
                        </select>
                    </td>
                </tr>

                <!-- Equipments -->
                <tr>
                    <td>
                        <select id="Equipment(1)" onchange="Calculate()">
                            <option value="Naked" selected>Equipment(1)</option>
                            <option value="Bone">Bone Necklace</option>
                        </select>
                    </td>
                    <td>Star <input id="Equipment(1)StarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="Equipment(1)Star"></span></td>
                    <td>
                        <select id="Equipment(1)Reforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                        </select>
                        <label><input id="Equipment(1)Recomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Equipment(2)" onchange="Calculate()">
                            <option value="Naked" selected>Equipment(2)</option>
                            <option value="Assassin">Shadow Assassin Cloak</option>
                            <option value="FAssassin">Shadow Assassin Cloak (Starred)</option>
                        </select>
                    </td>
                    <td>Star <input id="Equipment(2)StarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="Equipment(2)Star"></span></td>
                    <td>
                        <select id="Equipment(2)Reforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                        </select>
                        <label><input id="Equipment(2)Recomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Equipment(3)" onchange="Calculate()">
                            <option value="Naked" selected>Equipment(3)</option>
                            <option value="Adaptive">Adaptive Belt</option>
                        </select>
                    </td>
                    <td>Star <input id="Equipment(3)StarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="Equipment(3)Star"></span></td>
                    <td>
                        <select id="Equipment(3)Reforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                        </select>
                        <label><input id="Equipment(3)Recomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <select id="Equipment(4)" onchange="Calculate()">
                            <option value="Naked" selected>Equipment(4)</option>
                            <option value="Soulweaver">Soulweaver Gloves</option>
                        </select>
                    </td>
                    <td>Star <input id="Equipment(4)StarRange" type="range" value="0" min="0" max="10"
                            oninput="Calculate()"><span id="Equipment(4)Star"></span></td>
                    <td>
                        <select id="Equipment(4)Reforge" onchange="Calculate()">
                            <option value="Non" selected>Reforge</option>
                        </select>
                        <label><input id="Equipment(4)Recomb" type="checkbox" onchange="Calculate()">Recomb</label>
                    </td>
                </tr>
            </tbody>
            <!-- <tfoot>
            <tr>
                <td><label>MasterSkull<input type="number" min="0" max="7" value="0" onchange="Calculate()"></label>
                </td>
            </tr>
            <tr>
                <td><label>Legion<input type="number" min="0" max="20" value="0" onchange="Calculate()"></label>
                </td>
                <td><label>LegionPlayer<input type="number" min="0" max="20" value="0" onchange="Calculate()"></label>
                </td>
            </tr>
        </tfoot> -->
        </table>
    </div>

    <script src="js/deneme.js"></script>
    <script src="js/Varibles.js"></script>
    <script src="js/app.js"></script>
</body>

</html>
