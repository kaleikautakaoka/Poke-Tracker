export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
//     query pokemon_species($name: String!) {

export function formatPokemonName(name) {
    return name.toLowerCase().split(" ").join("-");
}

//function that will make a connection to the graphql server, database, and return the data
export async function getPokemonData(pokName, method, object) {
    return new Promise((resolve, reject) => {
        const url = `https://pokeapi.co/api/v2/${method}/${object}/${pokName}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                resolve(data);
            }
            )
            .catch((err) => {
                reject(err);
            }
            );
    });
}
