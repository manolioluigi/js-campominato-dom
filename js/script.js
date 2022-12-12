//Dichiariamo le variabili

let bottone, bomba, difficolta, cellePerRiga, celleTotali, select;
let contatore = 0;
let flag = false;
const griglia = document.querySelector('.griglia');

//Creiamo la funziona per la il cubetto

function creaCubetto(){
    const cubettoAttuale = document.createElement('div');
    cubettoAttuale.classList.add('cubetto');
    return cubettoAttuale;
}

//Creiamo la funziona che genera le bombe
function creaBomba(cellePerRiga){
    
    let bombe = [];
    let i = 0;
    while(i < cellePerRiga){
        bomba = Math.floor(Math.random() * (cellePerRiga - 1 + 1) + 1 );
        if(!bombe.includes(bomba)){
            bombe.push(bomba);
            i++;
        }
    }

    return bombe;
}


//Richiamiamo il bottone e creiamo la griglia

bottone = document.getElementById("play");
bottone.addEventListener(`click`, function(){

    let arrayBombe = [];
    griglia.innerHTML = " ";
    griglia.classList.remove('pointer-events');

        difficolta = parseInt(document.getElementById(`difficolta`).value);
        griglia.className = '';
        console.log(difficolta);
        switch(difficolta){
            case 1:
                celleTotali = 100;
                cellePerRiga = 10;
                griglia.classList.add(`griglia`);
                break;
            case 2:
                celleTotali = 81;
                cellePerRiga = 9;
                griglia.classList.add(`griglia-media`);
                break;
            case 3:
                celleTotali = 49;
                cellePerRiga = 7;
                griglia.classList.add(`griglia-piccola`);
                break;
            default:
                celleTotali = 100;
                cellePerRiga = 10;
                griglia.classList.add(`griglia`);
                break;
        }

        //bombe 
        arrayBombe = creaBomba(cellePerRiga);
        console.log(arrayBombe);

        for(let i = 1; i<=celleTotali; i++){
            console.log(celleTotali);
            //cubo
            const cubetto = creaCubetto();
            cubetto.addEventListener('click', function(){

                if(!arrayBombe.includes(i)){
                    this.classList.add('background-blue');
                    console.log("Ho cliccato la casella: "+i);
                    contatore++;
                }else{
                    this.classList.add('background-red');
                    console.log("Hai perso");
                    griglia.classList.add('pointer-events');
                    alert("Peccato, hai perso! Il tuo punteggio è: "+contatore);
                }
            })
            cubetto.innerText = i;
            griglia.appendChild(cubetto);
            
        }

        if(contatore == celleTotali - 16){
            alert("Complimenti! Hai vinto!");
        }

}
);



