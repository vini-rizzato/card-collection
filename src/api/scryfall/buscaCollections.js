async function buscaCollections(codg) {
    const url = "https://api.scryfall.com/sets";

    try{
        const response = await fetch(url + `/id?= ${codg}`);

        return response;
    }catch(err) {
        console.error({ "message": "Erro " + err });
    };
}

export default buscaCollections;