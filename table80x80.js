class Table80x80 {
    constructor() {
        this.table = document.getElementById("table80x80");
    }

    calculateHLBValue(span80input, tween80input) {
        return (4.7 * span80input / 100) + (17.0 * tween80input / 100);
    }

    calculateViscosity(HLB) {
        return -1.5285 * HLB + 62.6471;
    }

    calculateParticleSize(HLB) {
        return 62.3577 * HLB - 632.398;
    }

    calculateSurfaceTension(HLB) {
        return -0.9431 * HLB + 51.3259;
    }

    calculateZetaPotential(HLB) {
        return -2.5203 * HLB + 61.1255;
    }

    createTableRow(compositionRatio1, compositionRatio2) {

        var HLB = this.calculateHLBValue(compositionRatio1, compositionRatio2);
        var Viscosity = this.calculateViscosity(HLB);
        var ParticleSize = this.calculateParticleSize(HLB);
        var SurfaceTension = this.calculateSurfaceTension(HLB);
        var ZetaPotential = this.calculateZetaPotential(HLB);

        var row = this.table.insertRow(-1);

        var parameterCell = row.insertCell(0);
        var hlbCell = row.insertCell(1);
        var viscosityCell = row.insertCell(2);
        var sizeCell = row.insertCell(3);
        var tensionCell = row.insertCell(4);
        var potentialCell = row.insertCell(5);

        parameterCell.textContent = compositionRatio1 + ':' + compositionRatio2;
        hlbCell.textContent = HLB;
        viscosityCell.textContent = Viscosity;
        sizeCell.textContent = ParticleSize;
        tensionCell.textContent = SurfaceTension;
        potentialCell.textContent = ZetaPotential;
    }

    clearInputFields() {
        document.getElementById("compositionRatio1Table80x80").value = "";
        document.getElementById("compositionRatio2Table80x80").value = "";
    }
}

const table80x80 = new Table80x80();

document.getElementById("addButton80x80").addEventListener("click", () => {
    const compositionRatio1 = parseFloat(document.getElementById("compositionRatio1Table80x80").value);
    const compositionRatio2 = parseFloat(document.getElementById("compositionRatio2Table80x80").value);

    if (!isNaN(compositionRatio1) && !isNaN(compositionRatio2)) {
        table80x80.createTableRow(compositionRatio1, compositionRatio2);
        table80x80.clearInputFields();
    } else {
        alert("\n" +
            "Lütfen alanları boş bırakmayınız.");
    }
});
