
/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno 
 */
export const crearCartaHTML = (carta, ) => {

    // <img class="carta" src="assets/cartas/2C.png">
    if ( !carta ) throw new Error('La carta es un argumento obliogatorio')
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');


        return imgCarta;
}