import _ from 'underscore';

// export const miNombre = 'fernando'


/**
 * Esta función crea un nueveo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tiposDeCarta obligatorio como un arreglo de string')
    
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales obligatorio como un arreglo de string')
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}





// export default crearDeck; 