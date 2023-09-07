class Table60x80 {
    constructor() {
        this.table = document.getElementById("table60x80");
    }

    calculateHLBValue(span60input, tween60input) {
        return (4.3 * span60input / 100) + (17 * tween60input / 100);
    }

    calculateViscosity(HLB) {
        return -61.0079 * HLB + 976.5005;
    }

    calculateParticleSize(HLB) {
        return 120.7874 * HLB - 1518.1525;
    }

    calculateSurfaceTension(HLB) {
        return 1.5591 * HLB + 15.0794;
    }

    calculateZetaPotential(HLB) {
        return -16.3386 * HLB + 260.8842;
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
        document.getElementById("compositionRatio1Table60x80").value = "";
        document.getElementById("compositionRatio2Table60x80").value = "";
    }
}

const table60x80 = new Table60x80();

document.getElementById("addButton60x80").addEventListener("click", () => {
    const compositionRatio1 = parseFloat(document.getElementById("compositionRatio1Table60x80").value);
    const compositionRatio2 = parseFloat(document.getElementById("compositionRatio2Table60x80").value);

    if (!isNaN(compositionRatio1) && !isNaN(compositionRatio2)) {
        table60x80.createTableRow(compositionRatio1, compositionRatio2);
        table60x80.clearInputFields();
    } else {
        alert("Lütfen alanları boş bırakmayınız.");
    }
});
