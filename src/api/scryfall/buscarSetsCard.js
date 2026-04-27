async function buscarSets(cartaData) {
    const oracleId = cartaData.oracle_id;

    if (!oracleId) {
        throw new Error("oracle_id inválido");
    }

    let url = `https://api.scryfall.com/cards/search?q=oracleid:${oracleId}&unique=prints`;
    let todas = [];

    while (url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Erro na API: ${res.status}`);
        }

        const dados = await res.json();

        if (Array.isArray(dados.data)) {
            todas = todas.concat(dados.data);
        }

        url = dados.has_more ? dados.next_page : null;
    }

    const setsUnicos = Array.from(
        new Map(
            todas
                .filter(card => card && card.set)
                .map(card => [
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
        (a, b) => new Date(b.released_at) - new Date(a.released_at)
    );

    return setsUnicos;
}

export default buscarSets;