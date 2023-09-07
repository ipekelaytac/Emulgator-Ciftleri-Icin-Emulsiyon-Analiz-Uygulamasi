class Table60x60 {
    constructor() {
        this.table = document.getElementById("table60x60");
    }

    calculateHLBValue(span60input, tween60input) {
        return (4.3 * span60input / 100) + (15.7 * tween60input / 100);
    }

    calculateViscosity(HLB) {
        return 6.7982 * HLB - 53.1208;
    }

    calculateParticleSize(HLB) {
        return 10.5263 * HLB + 172.3702;
    }

    calculateSurfaceTension(HLB) {
        return 1.2719 * HLB + 19.5024;
    }

    calculateZetaPotential(HLB) {
        return 4.5614 * HLB - 40.4774;
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
        document.getElementById("compositionRatio1Table60x60").value = "";
        document.getElementById("compositionRatio2Table60x60").value = "";
    }
}

const table60x60 = new Table60x60();

document.getElementById("addButton60x60").addEventListener("click", () => {
    const compositionRatio1 = parseFloat(document.getElementById("compositionRatio1Table60x60").value);
    const compositionRatio2 = parseFloat(document.getElementById("compositionRatio2Table60x60").value);

    if (!isNaN(compositionRatio1) && !isNaN(compositionRatio2)) {
        table60x60.createTableRow(compositionRatio1, compositionRatio2);
        table60x60.clearInputFields();
    } else {
        alert("Lütfen alanları boş bırakmayınız.");
    }
});
