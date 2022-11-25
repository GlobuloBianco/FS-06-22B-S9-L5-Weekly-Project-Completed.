// [Custom] - [Custom] - [Custom] - [Custom] - [Custom] - [Custom] - [Custom] 
var display = document.getElementById('display');
display.addEventListener('click', blink);
var defaultFace = function (tempo) {
    setTimeout(function () {
        display.value = "龴ↀ◡ↀ龴";
    }, tempo);
};
onload = function (event) {
    setTimeout(function () {
        display.value = "龴 ─◡─ 龴";
    }, 1900);
    defaultFace(2700);
};
function blink() {
    if (display.value == "龴ↀ◡ↀ龴") {
        display.value = "龴 = ◡ = 龴"; //character invisibile " ";
        defaultFace(800);
    }
}
var Persona = /** @class */ (function () {
    function Persona(_credito) {
        this.credito = _credito;
        this.numeroChiamate = 0;
    }
    Persona.prototype.ricarica = function (add) {
        if (add != 5 && add != 10 && add != 20 && add != 50) {
            display.value = '5$ 10$ 20$ 50$';
            defaultFace(800);
        }
        else {
            this.credito = Number(Math.floor(this.credito + add));
            display.value = "Ricaricato ".concat(add, "$");
            defaultFace(800);
            setTimeout(function () {
                display.value = "龴 $ ◡ $ 龴";
            }, 1300);
            defaultFace(2500);
        }
    };
    Persona.prototype.chiamata = function (time) {
        if ((time * 0.20) > this.credito) {
            display.value = "No Soldi..";
            setTimeout(function () {
                display.value = "龴 = ︵ = 龴";
            }, 1500);
            defaultFace(2500);
        }
        else {
            var costo = 0.20; //costo chiamata al minuto modificabile
            var costoTot_1 = Number((time * costo).toFixed(2)); //usato per risolvere i problemi di tipo 5.9999999999$
            this.credito = Number((this.credito - costoTot_1).toFixed(2));
            this.numeroChiamate += 1; //+1 telefonata
            display.value = "Trascorso ".concat(time, " min.");
            setTimeout(function () {
                display.value = "costo ".concat(costoTot_1, "$");
            }, 2000);
            defaultFace(2500);
            setTimeout(function () {
                display.value = "龴 = ◡ = 龴";
            }, 2800);
            defaultFace(3500);
        }
    };
    Persona.prototype.numero404 = function () {
        display.value = "Hai ".concat(this.credito, "$");
        defaultFace(1400);
        setTimeout(function () {
            display.value = "龴 > ◡ < 龴";
        }, 1700);
        defaultFace(2400);
    };
    Persona.prototype.getNumeroChiamate = function () {
        display.value = "".concat(this.numeroChiamate, " volte");
        defaultFace(1400);
        setTimeout(function () {
            display.value = "龴 0 ◡ 0 龴";
        }, 1700);
        defaultFace(2400);
    };
    Persona.prototype.azzeraChiamate = function () {
        return this.numeroChiamate = 0;
    };
    return Persona;
}());
//    [link tasti] - [link tasti] - [link tasti] - [link tasti] - [link tasti] - [link tasti]||
var ricaricaInput = document.getElementById('ricaricaValue');
var ricaricaBtn = document.getElementById('ricaricaSoldi');
var chiamataInput = document.getElementById('tempoValue');
var chiamataBtn = document.getElementById('tempoBtn');
var balanceBtn = document.getElementById('balance');
var nChiamateBtn = document.getElementById('nChiamate');
var clearAll = document.getElementById('clearAll');
var utente = new Persona(0); //initial balance
//ricarica soldi----------
ricaricaBtn.addEventListener('click', aggiungi);
function aggiungi() {
    var saldo = Number(ricaricaInput.value);
    utente.ricarica(saldo);
    clearInputField();
}
//chiamata----------
chiamataBtn.addEventListener('click', chiama);
function chiama() {
    var tempo = Number(chiamataInput.value);
    utente.chiamata(tempo);
    clearInputField();
}
//Saldo / Numero404 ------------
balanceBtn.addEventListener('click', balance);
function balance() {
    utente.numero404();
}
//Numero Chiamate ----------------
nChiamateBtn.addEventListener('click', nChiamate);
function nChiamate() {
    utente.getNumeroChiamate();
}
//clear ALL
var refreshPage = function () {
    location.reload();
};
clearAll.addEventListener('click', refreshPage);
// ------------------------------------------------------------------------------------------||
function clearInputField() {
    ricaricaInput.value = "";
    chiamataInput.value = "";
}
