var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getMatricula = function () {
        return this.matricula;
    };
    Coche.prototype.setMatricula = function (matricula) {
        this.matricula = matricula;
    };
    Coche.prototype.getMarca = function () {
        return this.marca;
    };
    Coche.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getRueda1 = function () {
        return this.marcaRueda1;
    };
    Coche.prototype.setRueda1 = function (marcaRueda1) {
        this.marcaRueda1 = marcaRueda1;
    };
    Coche.prototype.getRueda2 = function () {
        return this.marcaRueda2;
    };
    Coche.prototype.setRueda2 = function (marcaRueda2) {
        this.marcaRueda2 = marcaRueda2;
    };
    Coche.prototype.getRueda3 = function () {
        return this.marcaRueda3;
    };
    Coche.prototype.setRueda3 = function (marcaRueda3) {
        this.marcaRueda3 = marcaRueda3;
    };
    Coche.prototype.getRueda4 = function () {
        return this.marcaRueda4;
    };
    Coche.prototype.setRueda4 = function (marcaRueda4) {
        this.marcaRueda4 = marcaRueda4;
    };
    Coche.prototype.getDiametro1 = function () {
        return this.diametroRueda1;
    };
    Coche.prototype.setDiametro1 = function (diametroRueda1) {
        this.diametroRueda1 = diametroRueda1;
    };
    Coche.prototype.getDiametro2 = function () {
        return this.diametroRueda2;
    };
    Coche.prototype.setDiametro2 = function (diametroRueda2) {
        this.diametroRueda2 = diametroRueda2;
    };
    Coche.prototype.getDiametro3 = function () {
        return this.diametroRueda3;
    };
    Coche.prototype.setDiametro3 = function (diametroRueda3) {
        this.diametroRueda3 = diametroRueda3;
    };
    Coche.prototype.getDiametro4 = function () {
        return this.diametroRueda4;
    };
    Coche.prototype.setDiametro4 = function (diametroRueda4) {
        this.diametroRueda4 = diametroRueda4;
    };
    return Coche;
}());
var EditorCoche = /** @class */ (function (_super) {
    __extends(EditorCoche, _super);
    function EditorCoche() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorCoche.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditorCoche.prototype.getTimeline = function () {
        return this.timeline;
    };
    EditorCoche.prototype.getAllData = function () {
        return this.getMatricula() + "-" + this.getMarca() + "-" + this.getColor() + "-" + this.getTimeline();
    };
    return EditorCoche;
}(Coche));
var editor = new EditorCoche();
editor.setMatricula(1702);
editor.setMarca("citroen");
editor.setColor("verde");
editor.setTimeline(4000);
// Validar Formulario Coche
var coches = [];
var e;
document.querySelector('#matricula').addEventListener('blur', validarMatricula);
document.querySelector('#marca').addEventListener('blur', validarMarca);
document.querySelector('#color').addEventListener('blur', validarColor);
function validarMatricula(e) {
    var txtMatricula = document.querySelector('#matricula');
    if (/^[0-9]{1,4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}/.test(txtMatricula.value)) {
        txtMatricula.classList.remove('is-invalid');
        txtMatricula.classList.add('is-valid');
        return true;
    }
    else {
        txtMatricula.classList.remove('is-valid');
        txtMatricula.classList.add('is-invalid');
        return false;
    }
}
function validarMarca(e) {
    var txtMarca = document.querySelector('#marca');
    if (/^[a-zA-Z]{4}/.test(txtMarca.value)) {
        txtMarca.classList.remove('is-invalid');
        txtMarca.classList.add('is-valid');
        return true;
    }
    else {
        txtMarca.classList.remove('is-valid');
        txtMarca.classList.add('is-invalid');
        return false;
    }
}
function validarColor(e) {
    var txtColor = document.querySelector('#color');
    if (/^[a-zA-Z]{4}/.test(txtColor.value)) {
        txtColor.classList.remove('is-invalid');
        txtColor.classList.add('is-valid');
        return true;
    }
    else {
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
    var caja1 = document.getElementById("caja1").value;
    var caja2 = document.getElementById("caja2").value;
    var caja3 = document.getElementById("caja3").value;
    if (typeof (caja1) == "undefined" && typeof (caja2) == "undefined" && typeof (caja3) == "undefined") {
        var matricula = document.getElementById("matricula").value;
        var marca = document.getElementById("marca").value;
        var color = document.getElementById("color").value;
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
        list = list + "<li>" + "Matrícula: " + coches[i].getMatricula() + "</li>";
        list = list + "<li>" + "Marca: " + coches[i].getMarca() + "</li>";
        list = list + "<li>" + "Color: " + coches[i].getColor() + "</li>" + "<br>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("matricula").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("color").value = "";
}
(function () {
    var forms = document.querySelectorAll('.needs-validation');
    var _loop_1 = function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity() ||
                !validarMatricula(e) ||
                !validarMarca(e) ||
                !validarColor(e)) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                form.classList.add('was-validated');
            }
        }, false);
    };
    for (var _i = 0, _a = forms; _i < _a.length; _i++) {
        var form = _a[_i];
        _loop_1(form);
    }
})();
/*****************************************************************************/
var EditorRueda = /** @class */ (function (_super) {
    __extends(EditorRueda, _super);
    function EditorRueda() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorRueda.prototype.setTimelineRueda = function (timelineRueda) {
        this.timelineRueda = timelineRueda;
    };
    EditorRueda.prototype.getTimelineRueda = function () {
        return this.timelineRueda;
    };
    EditorRueda.prototype.getAllDataRueda = function () {
        return this.getRueda1() + "-" + this.getDiametro1() + "-" + this.getRueda2() + "-" + this.getDiametro2() + "-" + this.getRueda3() + "-" + this.getDiametro3() + this.getRueda4() + "-" + this.getDiametro4() + "-" + this.getTimelineRueda();
    };
    return EditorRueda;
}(Coche));
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
document.querySelector('#marcaRueda1').addEventListener('blur', validarMarcaRueda1);
document.querySelector('#diametroRueda1').addEventListener('blur', validarDiametro1);
document.querySelector('#marcaRueda2').addEventListener('blur', validarMarcaRueda2);
document.querySelector('#diametroRueda2').addEventListener('blur', validarDiametro2);
document.querySelector('#marcaRueda2').addEventListener('blur', validarMarcaRueda3);
document.querySelector('#diametroRueda2').addEventListener('blur', validarDiametro3);
document.querySelector('#marcaRueda2').addEventListener('blur', validarMarcaRueda4);
document.querySelector('#diametroRueda2').addEventListener('blur', validarDiametro4);
// Validaciones Formulario 
var valDia = /^(0+[,.][4-9]+)|(1+[,.][0-9]+)|[1-2]$/;
var valMar = /^[a-zA-Z]{3}/;
//Rueda 1
function validarMarcaRueda1(e) {
    var txtMarcaRueda1 = document.querySelector('#marcaRueda1');
    if (valMar.test(txtMarcaRueda1.value)) {
        txtMarcaRueda1.classList.remove('is-invalid');
        txtMarcaRueda1.classList.add('is-valid');
        return true;
    }
    else {
        txtMarcaRueda1.classList.remove('is-valid');
        txtMarcaRueda1.classList.add('is-invalid');
        return false;
    }
}
function validarDiametro1(e) {
    var txtDiametroRueda1 = document.querySelector('#diametroRueda1');
    if (valDia.test(txtDiametroRueda1.value)) {
        txtDiametroRueda1.classList.remove('is-invalid');
        txtDiametroRueda1.classList.add('is-valid');
        return true;
    }
    else {
        txtDiametroRueda1.classList.remove('is-valid');
        txtDiametroRueda1.classList.add('is-invalid');
        return false;
    }
}
//Rueda 2
function validarMarcaRueda2(e) {
    var txtMarcaRueda2 = document.querySelector('#marcaRueda2');
    if (valMar.test(txtMarcaRueda2.value)) {
        txtMarcaRueda2.classList.remove('is-invalid');
        txtMarcaRueda2.classList.add('is-valid');
        return true;
    }
    else {
        txtMarcaRueda2.classList.remove('is-valid');
        txtMarcaRueda2.classList.add('is-invalid');
        return false;
    }
}
function validarDiametro2(e) {
    var txtDiametroRueda2 = document.querySelector('#diametroRueda2');
    if (valDia.test(txtDiametroRueda2.value)) {
        txtDiametroRueda2.classList.remove('is-invalid');
        txtDiametroRueda2.classList.add('is-valid');
        return true;
    }
    else {
        txtDiametroRueda2.classList.remove('is-valid');
        txtDiametroRueda2.classList.add('is-invalid');
        return false;
    }
}
// Rueda 3
function validarMarcaRueda3(e) {
    var txtMarcaRueda3 = document.querySelector('#marcaRueda3');
    if (valMar.test(txtMarcaRueda3.value)) {
        txtMarcaRueda3.classList.remove('is-invalid');
        txtMarcaRueda3.classList.add('is-valid');
        return true;
    }
    else {
        txtMarcaRueda3.classList.remove('is-valid');
        txtMarcaRueda3.classList.add('is-invalid');
        return false;
    }
}
function validarDiametro3(e) {
    var txtDiametroRueda3 = document.querySelector('#diametroRueda3');
    if (valDia.test(txtDiametroRueda3.value)) {
        txtDiametroRueda3.classList.remove('is-invalid');
        txtDiametroRueda3.classList.add('is-valid');
        return true;
    }
    else {
        txtDiametroRueda3.classList.remove('is-valid');
        txtDiametroRueda3.classList.add('is-invalid');
        return false;
    }
}
//Rueda 4
function validarMarcaRueda4(e) {
    var txtMarcaRueda4 = document.querySelector('#marcaRueda4');
    if (valMar.test(txtMarcaRueda4.value)) {
        txtMarcaRueda4.classList.remove('is-invalid');
        txtMarcaRueda4.classList.add('is-valid');
        return true;
    }
    else {
        txtMarcaRueda4.classList.remove('is-valid');
        txtMarcaRueda4.classList.add('is-invalid');
        return false;
    }
}
function validarDiametro4(e) {
    var txtDiametroRueda4 = document.querySelector('#diametroRueda4');
    if (valDia.test(txtDiametroRueda4.value)) {
        txtDiametroRueda4.classList.remove('is-invalid');
        txtDiametroRueda4.classList.add('is-valid');
        return true;
    }
    else {
        txtDiametroRueda4.classList.remove('is-valid');
        txtDiametroRueda4.classList.add('is-invalid');
        return false;
    }
}
var marcaRueda1;
var marcaRueda2;
var marcaRueda3;
var marcaRueda4;
var diametroRueda1;
var diametroRueda2;
var diametroRueda3;
var diametroRueda4;
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
    var caja4 = document.getElementById("caja4").value;
    var caja5 = document.getElementById("caja5").value;
    var caja6 = document.getElementById("caja6").value;
    var caja7 = document.getElementById("caja7").value;
    var caja8 = document.getElementById("caja8").value;
    var caja9 = document.getElementById("caja9").value;
    var caja10 = document.getElementById("caja10").value;
    var caja11 = document.getElementById("caja11").value;
    if (typeof (caja4) == "undefined" && typeof (caja5) == "undefined" && typeof (caja6) == "undefined" && typeof (caja7) == "undefined" && typeof (caja8) == "undefined" && typeof (caja9) == "undefined" && typeof (caja10) == "undefined" && typeof (caja11) == "undefined") {
        marcaRueda1 = document.getElementById("marcaRueda1").value;
        diametroRueda1 = document.getElementById("diametroRueda1").value;
        marcaRueda2 = document.getElementById("marcaRueda2").value;
        diametroRueda2 = document.getElementById("diametroRueda2").value;
        marcaRueda3 = document.getElementById("marcaRueda3").value;
        diametroRueda3 = document.getElementById("diametroRueda3").value;
        marcaRueda4 = document.getElementById("marcaRueda4").value;
        diametroRueda4 = document.getElementById("diametroRueda4").value;
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
    var listado2 = document.getElementById("listado2");
    listado2.innerHTML = list2;
    document.getElementById("marcaRueda1").value = "";
    document.getElementById("diametroRueda1").value = "";
    document.getElementById("marcaRueda2").value = "";
    document.getElementById("diametroRueda2").value = "";
    document.getElementById("marcaRueda3").value = "";
    document.getElementById("diametroRueda3").value = "";
    document.getElementById("marcaRueda4").value = "";
    document.getElementById("diametroRueda4").value = "";
}
(function () {
    var forms = document.querySelectorAll('.needs-validation');
    var _loop_2 = function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity() ||
                !validarMarcaRueda1(e) ||
                !validarDiametro1(e) ||
                !validarMarcaRueda2(e) ||
                !validarDiametro2(e) ||
                !validarMarcaRueda3(e) ||
                !validarDiametro3(e) ||
                !validarMarcaRueda4(e) ||
                !validarDiametro4(e)) {
                event.preventDefault();
                event.stopPropagation();
            }
            else {
                form.classList.add('was-validated');
            }
        }, false);
    };
    for (var _i = 0, _a = forms; _i < _a.length; _i++) {
        var form = _a[_i];
        _loop_2(form);
    }
})();
