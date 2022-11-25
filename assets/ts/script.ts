// [Custom] - [Custom] - [Custom] - [Custom] - [Custom] - [Custom] - [Custom] 
const display = document.getElementById('display') as HTMLInputElement;
display.addEventListener('click', blink);

const defaultFace = (tempo) => {
    setTimeout(function(){
        display.value = "龴ↀ◡ↀ龴";
    }, tempo);
}

onload = (event) => {
    setTimeout(function(){
        display.value = "龴 ─◡─ 龴";
    }, 1900);
    defaultFace(2700);
};

function blink() {
    if(display.value == "龴ↀ◡ↀ龴") {
        display.value = "龴 = ◡ = 龴"; //character invisibile " ";
        defaultFace(800);
    }
}

// [COMPITO] - [COMPITO] - [COMPITO] - [COMPITO] - [COMPITO] - [COMPITO] 
interface Cellulare {
    credito: number;
    numeroChiamate: number;

    ricarica(add:number): void;
    chiamata(time: number): void;
    numero404(): void;
    getNumeroChiamate(): void;
    azzeraChiamate(): number;
}

class Persona implements Cellulare {
    public credito: number;
    public numeroChiamate: number;

    public constructor(_credito: number) {
        this.credito = _credito;
        this.numeroChiamate = 0;
    }

    public ricarica(add: number): void {
        if(add != 5 && add != 10 && add != 20 && add != 50) {
            display.value= '5$ 10$ 20$ 50$';
            defaultFace(800);
        }  else {
            this.credito = Number(Math.floor(this.credito + add));
            display.value= `Ricaricato ${add}$`;
            defaultFace(800);
            setTimeout(function(){
                display.value = "龴 $ ◡ $ 龴";
            }, 1300);
            defaultFace(2500);
        }
    }
    public chiamata(time: number): void {
        if((time * 0.20) > this.credito) {
            display.value =`No Soldi..`;
            setTimeout(function(){
                display.value = "龴 = ︵ = 龴";
            }, 1500);
            defaultFace(2500);
        } else {
            let costo: number = 0.20; //costo chiamata al minuto modificabile
            let costoTot: number = Number((time * costo).toFixed(2));//usato per risolvere i problemi di tipo 5.9999999999$
            this.credito = Number((this.credito - costoTot).toFixed(2));
            this.numeroChiamate += 1; //+1 telefonata
    
            display.value =`Trascorso ${time} min.`;
            setTimeout(function(){
                display.value =`costo ${costoTot}$`;
            }, 2000);
            defaultFace(2500);
            setTimeout(function(){
                display.value = "龴 = ◡ = 龴";
            }, 2800);
            defaultFace(3500);
        }
    }
    public numero404(): void {
        display.value = `Hai ${this.credito}$`;
        defaultFace(1400);
        setTimeout(function(){
            display.value = "龴 > ◡ < 龴";
        }, 1700);
        defaultFace(2400);
    }
    public getNumeroChiamate(): void {
        display.value = `${this.numeroChiamate} volte`;
        defaultFace(1400);
        setTimeout(function(){
            display.value = "龴 0 ◡ 0 龴";
        }, 1700);
        defaultFace(2400);
    }
    public azzeraChiamate(): number {
        return this.numeroChiamate = 0;
    }
}

//    [link tasti] - [link tasti] - [link tasti] - [link tasti] - [link tasti] - [link tasti]||
const ricaricaInput = document.getElementById('ricaricaValue') as HTMLInputElement;
const ricaricaBtn = document.getElementById('ricaricaSoldi') as HTMLElement;
const chiamataInput = document.getElementById('tempoValue') as HTMLInputElement;
const chiamataBtn = document.getElementById('tempoBtn') as HTMLElement;
const balanceBtn = document.getElementById('balance') as HTMLElement;
const nChiamateBtn = document.getElementById('nChiamate') as HTMLElement;
const clearAll = document.getElementById('clearAll') as HTMLElement;

let utente = new Persona(0); //initial balance
//ricarica soldi----------
ricaricaBtn.addEventListener('click', aggiungi);

function aggiungi() {
    let saldo: number = Number(ricaricaInput.value);
    utente.ricarica(saldo);
    clearInputField();
}

//chiamata----------
chiamataBtn.addEventListener('click', chiama);

function chiama() {
    let tempo: number = Number(chiamataInput.value);
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
const refreshPage = () => {
    location.reload();
}

clearAll.addEventListener('click', refreshPage);
// ------------------------------------------------------------------------------------------||

function clearInputField(): void {
    ricaricaInput.value ="";
    chiamataInput.value ="";
}



