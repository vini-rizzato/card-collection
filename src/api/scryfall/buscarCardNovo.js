async function buscarCard(nome) {

    const res = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(nome)}`);
    
    if(!res.ok) throw new Error("Erro ao buscar carta: " + res.statusText); 

    const cartaData  = await res.json();

    const image = cartaData.image_uris
        ? cartaData.image_uris.normal
        : cartaData.card_faces[0].image_uris.normal;

    console.log({
        name: cartaData.name,
        image
    });

    return cartaData;
}

export default buscarCard;
