//Dichiariamo le variabili

let bottone, bomba, difficolta;
let flag = false;
const griglia = document.getElementById('griglia');

//Creiamo la funziona per la il cubetto

function creaCubetto(){
    const cubettoAttuale = document.createElement('div');
    cubettoAttuale.classList.add('cubetto');
    return cubettoAttuale;
}

//Creiamo la funziona che genera le bombe
function creaBomba(difficolta){
    
    let bombe = [];
    let i = 0;
    while(i < 16){
        bomba = Math.floor(Math.random() * (difficolta - 1 + 1) + 1 );
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

        difficolta = 100;

        //bombe 
        arrayBombe = creaBomba(difficolta);
        console.log(arrayBombe);

        for(let i = 1; i<=difficolta; i++){
            
            //cubo
            const cubetto = creaCubetto();
            cubetto.addEventListener('click', function(){
                this.classList.add('background-blue');
                console.log("Ho cliccato la casella: "+i);
            })
            cubetto.innerText = i;
            griglia.appendChild(cubetto);
            
        }

}
);



