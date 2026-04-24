async function buscarSets(cartaData) {

    const oracleId = cartaData.oracle_id;

    let dadosSet = await fetch(`https://api.scryfall.com/cards/search?q=oracleid:${oracleId}&unique=prints`);
    let sets = [];

    while(dadosSet) {
        let res = await fetch(dadosSet);
        let dados = await res.json();

        todas = todas.concat(dados.dados);
        dadosSet = dados.has_more ? dados.next_page : null;
    }

    const setsUnicos = Array.from(
        new Map(
            sets.map(card => [
                card.set,
                {
                    set: card.set,
                    set_name: card.set_name,
                    released_at: card.released_at
                }
            ])
        ).values()
    );

    setsUnicos.sort(
        (a,b) => new Date(b.released_at) - new Date(a.released_at)
    );

    return setsUnicos;
}

export default buscarSets;