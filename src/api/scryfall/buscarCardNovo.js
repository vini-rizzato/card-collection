async function buscarCard(nome) {

    const res = await fetch(`https://api.scryfall.com/cards/named?exact=${encodeURIComponent(nome)}`);

    const cartaData  = await res.json();

    const image = data.image_uris
    ? data.image_uris.normal
    : data.card_faces[0].image_uris.normal;

    console.log({
        name: data.name,
        image
    });

    return cartaData;
}

export default buscarCard;
