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
var e: any;
 

(<HTMLInputElement>document.querySelector('#matricula')).addEventListener('blur', validarMatricula);
(<HTMLInputElement>document.querySelector('#marca')).addEventListener('blur', validarMarca);
(<HTMLInputElement>document.querySelector('#color')).addEventListener('blur', validarColor);

function validarMatricula(e) {
    
    const txtMatricula: any = (<HTMLInputElement>document.querySelector('#matricula'));
    if (/^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/.test(txtMatricula.value)) {
        txtMatricula.classList.remove('is-invalid');
        txtMatricula.classList.add('is-valid');
        return true;
    } else {
        txtMatricula.classList.remove('is-valid');
        txtMatricula.classList.add('is-invalid');
        return false;
    }
}

function validarMarca(e) {
    
    const txtMarca: any = (<HTMLInputElement>document.querySelector('#marca'));
    if (/^[a-zA-Z]{4}/.test(txtMarca.value)) {
        txtMarca.classList.remove('is-invalid');
        txtMarca.classList.add('is-valid');
        return true;
    } else {
        txtMarca.classList.remove('is-valid');
        txtMarca.classList.add('is-invalid');
        return false;
    }
}

function validarColor(e) {
    
    const txtColor: any = (<HTMLInputElement>document.querySelector('#color'));
    if (/^[a-zA-Z]{4}/.test(txtColor.value)) {
        txtColor.classList.remove('is-invalid');
        txtColor.classList.add('is-valid');
        return true;
    } else {
        txtColor.classList.remove('is-valid');
        txtColor.classList.add('is-invalid');
        return false;
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
(function () {
    const forms = document.querySelectorAll('.needs-validation');
  
    for (let form of forms as any) {
      form.addEventListener(
        'submit',
        function (event) {
          if (
            !form.checkValidity() ||
            !validarMatricula(e) ||
            !validarMarca(e) ||
            !validarColor(e)
          ) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            form.classList.add('was-validated');
          }
        },
        false
      );
    }
  })();
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
        return this.getRueda1() + "-" + this.getDiametro1() + "-" + this.getRueda2() + "-" + this.getDiametro2() + "-" + this.getRueda3() + "-" + this.getDiametro3() + this.getRueda4() + "-" + this.getDiametro4() + "-" + this.getTimelineRueda();
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

(<HTMLInputElement>document.querySelector('#marcaRueda1')).addEventListener('blur', validarMarcaRueda1);
(<HTMLInputElement>document.querySelector('#diametroRueda1')).addEventListener('blur', validarDiametro1);
(<HTMLInputElement>document.querySelector('#marcaRueda2')).addEventListener('blur', validarMarcaRueda2);
(<HTMLInputElement>document.querySelector('#diametroRueda2')).addEventListener('blur', validarDiametro2);
(<HTMLInputElement>document.querySelector('#marcaRueda2')).addEventListener('blur', validarMarcaRueda3);
(<HTMLInputElement>document.querySelector('#diametroRueda2')).addEventListener('blur', validarDiametro3);
(<HTMLInputElement>document.querySelector('#marcaRueda2')).addEventListener('blur', validarMarcaRueda4);
(<HTMLInputElement>document.querySelector('#diametroRueda2')).addEventListener('blur', validarDiametro4);

// Validaciones Formulario 
const valDia=/^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/;
const valMar=/^[a-zA-Z]{3}/;
//Rueda 1
function validarMarcaRueda1(e) {
    const txtMarcaRueda1: any = (<HTMLInputElement>document.querySelector('#marcaRueda1'));
    if (valMar.test(txtMarcaRueda1.value)) {
        txtMarcaRueda1.classList.remove('is-invalid');
        txtMarcaRueda1.classList.add('is-valid');
        return true;
    } else {
        txtMarcaRueda1.classList.remove('is-valid');
        txtMarcaRueda1.classList.add('is-invalid');
        return false;
    }
}

function validarDiametro1(e) {
    const txtDiametroRueda1: any = (<HTMLInputElement>document.querySelector('#diametroRueda1'));
    if (valDia.test(txtDiametroRueda1.value)) {
        txtDiametroRueda1.classList.remove('is-invalid');
        txtDiametroRueda1.classList.add('is-valid');
        return true;
    } else {
        txtDiametroRueda1.classList.remove('is-valid');
        txtDiametroRueda1.classList.add('is-invalid');
        return false;
    }
}
//Rueda 2
function validarMarcaRueda2(e) {
    const txtMarcaRueda2: any = (<HTMLInputElement>document.querySelector('#marcaRueda2'));
    if (valMar.test(txtMarcaRueda2.value)) {
        txtMarcaRueda2.classList.remove('is-invalid');
        txtMarcaRueda2.classList.add('is-valid');
        return true;
    } else {
        txtMarcaRueda2.classList.remove('is-valid');
        txtMarcaRueda2.classList.add('is-invalid');
        return false;
    }
}

function validarDiametro2(e) {
    const txtDiametroRueda2: any = (<HTMLInputElement>document.querySelector('#diametroRueda2'));
    if (valDia.test(txtDiametroRueda2.value)) {
        txtDiametroRueda2.classList.remove('is-invalid');
        txtDiametroRueda2.classList.add('is-valid');
        return true;
    } else {
        txtDiametroRueda2.classList.remove('is-valid');
        txtDiametroRueda2.classList.add('is-invalid');
        return false;
    }
}

// Rueda 3
function validarMarcaRueda3(e) {
    const txtMarcaRueda3: any = (<HTMLInputElement>document.querySelector('#marcaRueda3'));
    if (valMar.test(txtMarcaRueda3.value)) {
        txtMarcaRueda3.classList.remove('is-invalid');
        txtMarcaRueda3.classList.add('is-valid');
        return true;
    } else {
        txtMarcaRueda3.classList.remove('is-valid');
        txtMarcaRueda3.classList.add('is-invalid');
        return false;
    }
}

function validarDiametro3(e) {
    const txtDiametroRueda3: any = (<HTMLInputElement>document.querySelector('#diametroRueda3'));
    if (valDia.test(txtDiametroRueda3.value)) {
        txtDiametroRueda3.classList.remove('is-invalid');
        txtDiametroRueda3.classList.add('is-valid');
        return true;
    } else {
        txtDiametroRueda3.classList.remove('is-valid');
        txtDiametroRueda3.classList.add('is-invalid');
        return false;
    }
}
//Rueda 4
function validarMarcaRueda4(e) {
    const txtMarcaRueda4: any = (<HTMLInputElement>document.querySelector('#marcaRueda4'));
    if (valMar.test(txtMarcaRueda4.value)) {
        txtMarcaRueda4.classList.remove('is-invalid');
        txtMarcaRueda4.classList.add('is-valid');
        return true;
    } else {
        txtMarcaRueda4.classList.remove('is-valid');
        txtMarcaRueda4.classList.add('is-invalid');
        return false;
    }
}

function validarDiametro4(e) {
    const txtDiametroRueda4: any = (<HTMLInputElement>document.querySelector('#diametroRueda4'));
    if (valDia.test(txtDiametroRueda4.value)) {
        txtDiametroRueda4.classList.remove('is-invalid');
        txtDiametroRueda4.classList.add('is-valid');
        return true;
    } else {
        txtDiametroRueda4.classList.remove('is-valid');
        txtDiametroRueda4.classList.add('is-invalid');
        return false;
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
(function () {
    const forms = document.querySelectorAll('.needs-validation');
  
    for (let form of forms as any) {
      form.addEventListener(
        'submit',
        function (event) {
          if (
            !form.checkValidity() ||
            !validarMarcaRueda1(e) ||
            !validarDiametro1(e) ||
            !validarMarcaRueda2(e) ||
            !validarDiametro2(e) ||
            !validarMarcaRueda3(e) ||
            !validarDiametro3(e) ||
            !validarMarcaRueda4(e) ||
            !validarDiametro4(e) 

          ) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            form.classList.add('was-validated');
          }
        },
        false
      );
    }
  })();
