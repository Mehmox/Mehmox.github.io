let Default;
let ComposterSpeedlvl = 0, MultiDroplvl = 0, FuelCaplvl = 0, OrganicMatterCaplvl = 0, CostReductionlvl = 0;
let ProcessTimePer, ProcessFuelRequried, ProcessOrganicRequried;
let ComposterSpeedPercent, MultiDrop, FuelCap, OrganicMatterCap, CostReduction;
let Seed;
let Fuel, Organic, ProcessAmount;
let TProcessSecond, Hour, Minute, Second;
let fo;
let Sellp, time;
let min, max;
let dg = document.getElementById;
window.onload = display;
document.querySelectorAll('input[type="range"]').forEach((input) => {
    input.addEventListener('mousedown', () => window.getSelection().removeAllRanges());
});
function display() {
    ComposterSpeedlvl = parseInt(document.getElementById("ComposterSpeedlvl").value);
    MultiDroplvl = parseInt(document.getElementById("MultiDroplvl").value);
    FuelCaplvl = parseInt(document.getElementById("FuelCaplvl").value);
    OrganicMatterCaplvl = parseInt(document.getElementById("OrganicMatterCaplvl").value);
    CostReductionlvl = parseInt(document.getElementById("CostReductionlvl").value);
    Sellp = parseInt(document.getElementById("Sellp").value);

    document.getElementById("Speed").innerHTML = ComposterSpeedlvl;
    document.getElementById("Fortune").innerHTML = MultiDroplvl;
    document.getElementById("Fuel").innerHTML = FuelCaplvl;
    document.getElementById("Organic").innerHTML = OrganicMatterCaplvl;
    document.getElementById("Reduce").innerHTML = CostReductionlvl;
    {//Calculate
        Sellp *= (1 - 0.0114);
        //-------------------------------------------------------------------//
        ProcessTimePer = 600;
        ProcessOrganicRequried = 4000;
        ProcessFuelRequried = 2000;
        //-------------------------------------------------------------------//
        ComposterSpeedPercent = ComposterSpeedlvl * 20;
        MultiDrop = 1 + MultiDroplvl * 3 / 100;
        FuelCap = 100000 + FuelCaplvl * 30000;
        OrganicMatterCap = 40000 + OrganicMatterCaplvl * 20000;
        Seed = OrganicMatterCap / 25600;
        CostReduction = CostReductionlvl;
        ProcessOrganicRequried *= ((100 - CostReduction) / 100);
        ProcessFuelRequried *= ((100 - CostReduction) / 100);
        //-------------------------------------------------------------------//
        ProcessTimePer /= (1 + ComposterSpeedPercent / 100);
        Fuel = (FuelCap / ProcessFuelRequried);
        Organic = (OrganicMatterCap / ProcessOrganicRequried);
        if (Fuel < Organic) {
            ProcessAmount = Fuel;
            fo = true;
        } else {
            ProcessAmount = Organic;
            fo = false;
        }
        ProcessTimePer = Math.ceil(ProcessTimePer);
        TProcessSecond = Second = Math.ceil(ProcessTimePer * ProcessAmount);
        while (TProcessSecond % 60 !== 0) { TProcessSecond++; }
        Minute = parseInt(Second / 60);
        Second = Second - Minute * 60;
        Hour = parseInt(Minute / 60);
        Minute = Minute - Hour * 60;
        min = parseInt(ProcessAmount);
        max = parseInt(ProcessAmount * MultiDrop);
        //-------------------------------------------------------------------//
        time = 43200 / TProcessSecond;
        //-------------------------------------------------------------------//
    }

    {//Print
        document.getElementById("output1S").innerHTML = `ProcessTimePer`
        document.getElementById("output1N").innerHTML = `600 > ${ProcessTimePer}`
        document.getElementById("output2S").innerHTML = `ProcessOrganicRequried`
        document.getElementById("output2N").innerHTML = `4000 > ${ProcessOrganicRequried}`
        document.getElementById("output3S").innerHTML = `ProcessFuelRequried`
        document.getElementById("output3N").innerHTML = `2000 > ${ProcessFuelRequried}`
        document.getElementById("output4S").innerHTML = `OrganicMatterCap`
        document.getElementById("output4N").innerHTML = `100000 > ${OrganicMatterCap}`
        document.getElementById("output5S").innerHTML = `FuelCap`
        document.getElementById("output5N").innerHTML = `40000 > ${FuelCap}`
        document.getElementById("output6S").innerHTML = `Organic`
        document.getElementById("output6N").innerHTML = `${Seed}`
        document.getElementById("output7S").innerHTML = `ProcessAmount`
        document.getElementById("output7N").innerHTML = `${min} - ${max}`
        document.getElementById("output8S").innerHTML = `TMinute`
        document.getElementById("output8N").innerHTML = `${TProcessSecond / 60}M  = ${Hour}H ${Minute}M ${Second}S`
        if (fo) { document.getElementById("output9").innerHTML = `LvL up your fuel capacity.`; }
        else { document.getElementById("output9").innerHTML = `LvL up your organic matter capacity.`; }
        document.getElementById("output10S").innerHTML = `1x Min Profit`
        document.getElementById("output10N").innerHTML = `${parseInt(ProcessAmount * Sellp)}`
        document.getElementById("output11S").innerHTML = `1x Max Profit`
        document.getElementById("output11N").innerHTML = `${parseInt(ProcessAmount * MultiDrop * Sellp)}`
        document.getElementById("output12S").innerHTML = `12H Min Profit`
        document.getElementById("output12N").innerHTML = `${parseInt(ProcessAmount * Sellp * time)}`
        document.getElementById("output13S").innerHTML = `12H Max Profit`
        document.getElementById("output13N").innerHTML = `${parseInt(ProcessAmount * MultiDrop * Sellp * time)}`
    }
}