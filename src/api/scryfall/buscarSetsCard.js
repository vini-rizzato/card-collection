async function buscarSets(nome) {
    let url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(`!"${nome}"`)}`;
    let todas = [];

    while (url) {
        const res = await fetch(url);
        const data = await res.json();

        todas = todas.concat(data.data);
        url = data.has_more ? data.next_page : null;
    }

    const setsUnicas = Array.from(
        new Map(
            todas.map(card => [
                card.set, 
                {
                    set: card.set,
                    set_name: card.set_name,
                    released_at: card.released_at
                }
            ])
        ).values()
    );

    setsUnicas.sort((a, b) => new Date(b.released_at) - new Date(a.released_at));

    console.log(setsUnicas);

    return setsUnicas;
}

export default buscarSets;
