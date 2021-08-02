class Coche {
    public matricula: any;
    public marca: string;
    public color: string;
    public marcaRueda1: string;
    public marcaRueda2: string;
    public marcaRueda3: string;
    public marcaRueda4: string;
    public diametroRueda1: number;
    public diametroRueda2: number;
    public diametroRueda3: number;
    public diametroRueda4: number;

    public getMatricula() {
        return this.matricula;
    }
    public setMatricula(matricula: any) {
        this.matricula = matricula;
    }

    public getMarca() {
        return this.marca;
    }
    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getColor() {
        return this.color;
    }
    public setColor(color: string) {
        this.color = color;
    }

    public getRueda1() {
        return this.marcaRueda1;
    }
    public setRueda1(marcaRueda1: string) {
        this.marcaRueda1 = marcaRueda1;
    }
    public getRueda2() {
        return this.marcaRueda2;
    }
    public setRueda2(marcaRueda2: string) {
        this.marcaRueda2 = marcaRueda2;
    }
    public getRueda3() {
        return this.marcaRueda3;
    }
    public setRueda3(marcaRueda3: string) {
        this.marcaRueda3 = marcaRueda3;
    }
    public getRueda4() {
        return this.marcaRueda4;
    }
    public setRueda4(marcaRueda4: string) {
        this.marcaRueda4 = marcaRueda4;
    }

    public getDiametro1() {
        return this.diametroRueda1;
    }
    public setDiametro1(diametroRueda1: number) {
        this.diametroRueda1 = diametroRueda1;
    }

    public getDiametro2() {
        return this.diametroRueda2;
    }
    public setDiametro2(diametroRueda2: number) {
        this.diametroRueda2 = diametroRueda2;
    }

    public getDiametro3() {
        return this.diametroRueda3;
    }
    public setDiametro3(diametroRueda3: number) {
        this.diametroRueda3 = diametroRueda3;
    }

    public getDiametro4() {
        return this.diametroRueda4;
    }
    public setDiametro4(diametroRueda4: number) {
        this.diametroRueda4 = diametroRueda4;
    }
}

class EditorCoche extends Coche {
    public timeline: number;

    setTimeline(timeline: number) {
        this.timeline = timeline;
    }
    getTimeline() {
        return this.timeline;
    }
    getAllData(): string {
        return this.getMatricula() + "-" + this.getMarca() + "-" + this.getColor() + "-" + this.getTimeline();
    }
}
var editor = new EditorCoche();
editor.setMatricula(1702);
editor.setMarca("citroen");
editor.setColor("verde");
editor.setTimeline(4000);


// Validar Formulario Coche

var coches = [];

function validarMatricula(e) {
    e.preventDefault();
    var txtMatricula: any = (<HTMLInputElement>document.getElementById('matricula')).value;
    if (txtMatricula == null || !/^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/i.test(txtMatricula)) {
        document.getElementById("caja1").innerHTML = "Introduce cuatro números y tres letras";
        document.getElementById("matricula").style.border = "1px solid red";
        document.getElementById("caja1").style.border = "1px solid red";
        document.getElementById("caja1").style.fontSize = "18px";
    } else {
        document.getElementById("caja1").innerHTML = "Matrícula introducida";
        document.getElementById("matricula").style.border = "1px solid blue";
        document.getElementById("caja1").style.fontSize = "18px";
    }
}

function validarMarca(e) {
    e.preventDefault();
    var txtMarca: any = (<HTMLInputElement>document.getElementById('marca')).value;
    if (txtMarca == null || txtMarca.length < 4 || !/^[a-zA-Z]*$/i.test(txtMarca)) {
        document.getElementById("caja2").innerHTML = "Introduce mínimo cuatro letras";
        document.getElementById("marca").style.border = "1px solid red";
        document.getElementById("caja2").style.border = "1px solid red";
        document.getElementById("caja2").style.fontSize = "18px";
    } else {
        document.getElementById("caja2").innerHTML = "Marca introducida";
        document.getElementById("marca").style.border = "1px solid blue";
        document.getElementById("caja2").style.border = "transparent";
        document.getElementById("caja2").style.fontSize = "18px";
    }
}

function validarColor(e) {
    e.preventDefault();

    var txtColor: any = (<HTMLInputElement>document.getElementById('color')).value;

    if (txtColor == null || txtColor.length < 4 || !/^[a-zA-Z]*$/.test(txtColor)) {
        document.getElementById("caja3").innerHTML = "Introduce mínimo cuatro letras";
        document.getElementById("color").style.border = "1px solid red";
        document.getElementById("caja3").style.border = "1px solid red";
        document.getElementById("caja3").style.fontSize = "18px";
    } else {
        document.getElementById("caja3").innerHTML = "Color introducido";
        document.getElementById("color").style.border = "1px solid blue";
        document.getElementById("caja3").style.fontSize = "18px";
    }
}

function guardar(e) {
    e.preventDefault();

    validarMatricula(e);
    validarMarca(e);
    validarColor(e);

    var caja1 = (<HTMLInputElement>document.getElementById("caja1")).value;
    var caja2 = (<HTMLInputElement>document.getElementById("caja2")).value;
    var caja3 = (<HTMLInputElement>document.getElementById("caja3")).value;

    if (typeof (caja1) == "undefined" && typeof (caja2) == "undefined" && typeof (caja3) == "undefined") {
        var matricula = (<HTMLInputElement>document.getElementById("matricula")).value;
        var marca = (<HTMLInputElement>document.getElementById("marca")).value;
        var color = (<HTMLInputElement>document.getElementById("color")).value;

        if (matricula == "" && marca == "" && color == "") {
            document.getElementById("mensaje").style.display = "block";
            document.getElementById("caja1").style.display = "none";
            document.getElementById("caja2").style.display = "none";
            document.getElementById("caja3").style.display = "none";
            document.getElementById("listado").style.display = "none";
        }
    }

    // ***********************
    //     Listado Coche
    //************************  
    var coche = new Coche();
    coche.setMatricula(matricula);
    coche.setMarca(marca);
    coche.setColor(color);

    coches.push(coche);

    var list = "";
    for (var i = 0; i < coches.length; i++) {
        list = list + "<li>" + "Matrícula: " + coches[i].getMatricula() + "</li>"
        list = list + "<li>" + "Marca: " + coches[i].getMarca() + "</li>";
        list = list + "<li>" + "Color: " + coches[i].getColor() + "</li>" + "<br>";
    }
    var listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("matricula")).value = "";
    (<HTMLInputElement>document.getElementById("marca")).value = "";
    (<HTMLInputElement>document.getElementById("color")).value = "";
}

/*****************************************************************************/
class EditorRueda extends Coche {

    public timelineRueda: number;

    setTimelineRueda(timelineRueda: number) {
        this.timelineRueda = timelineRueda;
    }
    getTimelineRueda() {
        return this.timelineRueda;
    }
    getAllDataRueda(): string {
        return this.getRueda1() + "-" + this.getDiametro1() + "-" + this.getRueda2() + "-" + this.getDiametro2() + "-" + this.getRueda3() + "-" + this.getDiametro3() +this.getRueda4() + "-" + this.getDiametro4() + "-" + this.getTimelineRueda();
    }
}

var editorRueda = new EditorRueda();
editorRueda.setRueda1("RDC");
editorRueda.setRueda2("RDC");
editorRueda.setRueda3("RDC");
editorRueda.setRueda4("RDC");
editorRueda.setDiametro1(2);
editorRueda.setDiametro2(2);
editorRueda.setDiametro3(2);
editorRueda.setDiametro4(2);
editorRueda.setTimelineRueda(4000);


var ruedas = [];

// Validaciones Formulario Ruedas
//Rueda 1
function validarMarcaRueda1(e) {
    e.preventDefault();
    var txtMarcaRueda1: any = (<HTMLInputElement>document.getElementById('marcaRueda1')).value;
    if (txtMarcaRueda1 == null || txtMarcaRueda1.length < 3 || !/^[a-zA-Z]*$/i.test(txtMarcaRueda1)) {
        document.getElementById("caja4").innerHTML = "Introduce marca";
        document.getElementById("marcaRueda1").style.border = "1px solid red";
        document.getElementById("caja4").style.border = "1px solid red";
        document.getElementById("caja4").style.fontSize = "18px";
    } else {
        document.getElementById("caja4").innerHTML = "Marca introducida";
        document.getElementById("marcaRueda1").style.border = "1px solid blue";
        document.getElementById("caja4").style.border = "transparent";
        document.getElementById("caja4").style.fontSize = "18px";
    }
}

function validarDiametro1(e) {
    e.preventDefault();
    var txtDiametroRueda1: any = (<HTMLInputElement>document.getElementById('diametroRueda1')).value;
    if (txtDiametroRueda1 == null || !/^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/g.test(txtDiametroRueda1)) {
        document.getElementById("caja5").innerHTML = "Introduce diámetro rueda";
        document.getElementById("diametroRueda1").style.border = "1px solid red";
        document.getElementById("caja5").style.border = "1px solid red";
        document.getElementById("caja5").style.fontSize = "18px";
    } else {
        document.getElementById("caja5").innerHTML = "Diámetro introducido";
        document.getElementById("diametroRueda1").style.border = "1px solid blue";
        document.getElementById("caja5").style.border = "transparent";
        document.getElementById("caja5").style.fontSize = "18px";
    }
}
//Rueda 2
function validarMarcaRueda2(e) {
    e.preventDefault();
    var txtMarcaRueda2: any = (<HTMLInputElement>document.getElementById('marcaRueda2')).value;
    if (txtMarcaRueda2 == null || txtMarcaRueda2.length < 3 || !/^[a-zA-Z]*$/i.test(txtMarcaRueda2)) {
        document.getElementById("caja6").innerHTML = "Introduce marca";
        document.getElementById("marcaRueda2").style.border = "1px solid red";
        document.getElementById("caja6").style.border = "1px solid red";
        document.getElementById("caja6").style.fontSize = "18px";
    } else {
        document.getElementById("caja6").innerHTML = "Marca introducida";
        document.getElementById("marcaRueda2").style.border = "1px solid blue";
        document.getElementById("caja6").style.border = "transparent";
        document.getElementById("caja6").style.fontSize = "18px";
    }
}

function validarDiametro2(e) {
    e.preventDefault();
    var txtDiametroRueda2: any = (<HTMLInputElement>document.getElementById('diametroRueda2')).value;
    if (txtDiametroRueda2 == null || !/^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/g.test(txtDiametroRueda2)) {
        document.getElementById("caja7").innerHTML = "Introduce diámetro rueda";
        document.getElementById("diametroRueda2").style.border = "1px solid red";
        document.getElementById("caja7").style.border = "1px solid red";
        document.getElementById("caja7").style.fontSize = "18px";
    } else {
        document.getElementById("caja7").innerHTML = "Diámetro introducido";
        document.getElementById("diametroRueda2").style.border = "1px solid blue";
        document.getElementById("caja7").style.border = "transparent";
        document.getElementById("caja7").style.fontSize = "18px";
    }
}

// Rueda 3
function validarMarcaRueda3(e) {
    e.preventDefault();
    var txtMarcaRueda3: any = (<HTMLInputElement>document.getElementById('marcaRueda3')).value;
    if (txtMarcaRueda3 == null || txtMarcaRueda3.length < 3 || !/^[a-zA-Z]*$/i.test(txtMarcaRueda3)) {
        document.getElementById("caja8").innerHTML = "Introduce marca";
        document.getElementById("marcaRueda3").style.border = "1px solid red";
        document.getElementById("caja8").style.border = "1px solid red";
        document.getElementById("caja8").style.fontSize = "18px";
    } else {
        document.getElementById("caja8").innerHTML = "Marca introducida";
        document.getElementById("marcaRueda3").style.border = "1px solid blue";
        document.getElementById("caja8").style.border = "transparent";
        document.getElementById("caja8").style.fontSize = "18px";
    }
}

function validarDiametro3(e) {
    e.preventDefault();
    var txtDiametroRueda3: any = (<HTMLInputElement>document.getElementById('diametroRueda3')).value;
    if (txtDiametroRueda3 == null || !/^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/g.test(txtDiametroRueda3)) {
        document.getElementById("caja9").innerHTML = "Introduce diámetro rueda";
        document.getElementById("diametroRueda3").style.border = "1px solid red";
        document.getElementById("caja9").style.border = "1px solid red";
        document.getElementById("caja9").style.fontSize = "18px";
    } else {
        document.getElementById("caja9").innerHTML = "Diámetro introducido";
        document.getElementById("diametroRueda3").style.border = "1px solid blue";
        document.getElementById("caja9").style.border = "transparent";
        document.getElementById("caja9").style.fontSize = "18px";
    }
}
//Rueda 4
function validarMarcaRueda4(e) {
    e.preventDefault();
    var txtMarcaRueda4: any = (<HTMLInputElement>document.getElementById('marcaRueda4')).value;
    if (txtMarcaRueda4 == null || txtMarcaRueda4.length < 3 || !/^[a-zA-Z]*$/i.test(txtMarcaRueda4)) {
        document.getElementById("caja10").innerHTML = "Introduce marca";
        document.getElementById("marcaRueda4").style.border = "1px solid red";
        document.getElementById("caja10").style.border = "1px solid red";
        document.getElementById("caja10").style.fontSize = "18px";
    } else {
        document.getElementById("caja10").innerHTML = "Marca introducida";
        document.getElementById("marcaRueda4").style.border = "1px solid blue";
        document.getElementById("caja10").style.border = "transparent";
        document.getElementById("caja10").style.fontSize = "18px";
    }
}

function validarDiametro4(e) {
    e.preventDefault();
    var txtDiametroRueda4: any = (<HTMLInputElement>document.getElementById('diametroRueda4')).value;
    if (txtDiametroRueda4 == null || !/^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/g.test(txtDiametroRueda4)) {
        document.getElementById("caja11").innerHTML = "Introduce diámetro rueda";
        document.getElementById("diametroRueda4").style.border = "1px solid red";
        document.getElementById("caja11").style.border = "1px solid red";
        document.getElementById("caja11").style.fontSize = "18px";
    } else {
        document.getElementById("caja11").innerHTML = "Diámetro introducido";
        document.getElementById("diametroRueda4").style.border = "1px solid blue";
        document.getElementById("caja11").style.border = "transparent";
        document.getElementById("caja11").style.fontSize = "18px";
    }
}
var marcaRueda1: string;
var marcaRueda2: string;
var marcaRueda3: string;
var marcaRueda4: string;
var diametroRueda1: any;
var diametroRueda2: any;
var diametroRueda3: any;
var diametroRueda4: any;

function guardarRuedas(e) {
    e.preventDefault();

    validarMarcaRueda1(e);
    validarDiametro1(e);
    validarMarcaRueda2(e);
    validarDiametro2(e);
    validarMarcaRueda3(e);
    validarDiametro3(e);
    validarMarcaRueda4(e);
    validarDiametro4(e);


    var caja4 = (<HTMLInputElement>document.getElementById("caja4")).value;
    var caja5 = (<HTMLInputElement>document.getElementById("caja5")).value;
    var caja6 = (<HTMLInputElement>document.getElementById("caja6")).value;
    var caja7 = (<HTMLInputElement>document.getElementById("caja7")).value;
    var caja8 = (<HTMLInputElement>document.getElementById("caja8")).value;
    var caja9 = (<HTMLInputElement>document.getElementById("caja9")).value;
    var caja10 = (<HTMLInputElement>document.getElementById("caja10")).value;
    var caja11 = (<HTMLInputElement>document.getElementById("caja11")).value;


    if (typeof (caja4) == "undefined" && typeof (caja5) == "undefined" && typeof (caja6) == "undefined" && typeof (caja7) == "undefined" && typeof (caja8) == "undefined" && typeof (caja9) == "undefined" && typeof (caja10) == "undefined" && typeof (caja11) == "undefined") {
        marcaRueda1 = (<HTMLInputElement>document.getElementById("marcaRueda1")).value;
        diametroRueda1 = (<HTMLInputElement>document.getElementById("diametroRueda1")).value;
        marcaRueda2 = (<HTMLInputElement>document.getElementById("marcaRueda2")).value;
        diametroRueda2 = (<HTMLInputElement>document.getElementById("diametroRueda2")).value;
        marcaRueda3 = (<HTMLInputElement>document.getElementById("marcaRueda3")).value;
        diametroRueda3 = (<HTMLInputElement>document.getElementById("diametroRueda3")).value;
        marcaRueda4 = (<HTMLInputElement>document.getElementById("marcaRueda4")).value;
        diametroRueda4 = (<HTMLInputElement>document.getElementById("diametroRueda4")).value;

        if (marcaRueda1 == "" && diametroRueda1 == "" && marcaRueda2 == "" && diametroRueda2 == "" && marcaRueda3 == "" && diametroRueda3 == "" && marcaRueda4 == "" && diametroRueda4 == "") {
            document.getElementById("mensaje2").style.display = "block";
            document.getElementById("caja4").style.display = "none";
            document.getElementById("caja5").style.display = "none";
            document.getElementById("caja6").style.display = "none";
            document.getElementById("caja7").style.display = "none";
            document.getElementById("caja8").style.display = "none";
            document.getElementById("caja9").style.display = "none";
            document.getElementById("caja10").style.display = "none";
            document.getElementById("caja11").style.display = "none";
            document.getElementById("listado2").style.display = "none";
        }
    }

    //listado Ruedas
    var rueda = new Coche();
    rueda.setRueda1(marcaRueda1);
    rueda.setRueda2(marcaRueda2);
    rueda.setRueda3(marcaRueda3);
    rueda.setRueda4(marcaRueda4);
    rueda.setDiametro1(diametroRueda1);
    rueda.setDiametro2(diametroRueda2);
    rueda.setDiametro3(diametroRueda3);
    rueda.setDiametro4(diametroRueda4);

    ruedas.push(rueda);

    var list2 = "";
    for (var i = 0; i < ruedas.length; i++) {
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 1: " + ruedas[i].getRueda1() + " " + ruedas[i].getDiametro1() + "</li>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 2: " + ruedas[i].getRueda2() + " " + ruedas[i].getDiametro2() + "</li>" + "</br>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 3: " + ruedas[i].getRueda3() + " " + ruedas[i].getDiametro3() + "</li>";
        list2 = list2 + "<li>" + "Marca / Diámetro Rueda 4: " + ruedas[i].getRueda4() + " " + ruedas[i].getDiametro4() + "</li>" + "</br>";
    }

    var listado2 = <HTMLElement>document.getElementById("listado2");
    listado2.innerHTML = list2;

    (<HTMLInputElement>document.getElementById("marcaRueda1")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda1")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda2")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda2")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda3")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda3")).value = "";
    (<HTMLInputElement>document.getElementById("marcaRueda4")).value = "";
    (<HTMLInputElement>document.getElementById("diametroRueda4")).value = "";

}

