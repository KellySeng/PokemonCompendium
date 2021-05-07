
const baseUrlApi = "https://pokeapi.co/api/v2"

export async function fetchPokemonData (value : string): Promise<PokemonTypings.PokemonInformation> {
    const pokemonData =  await fetchInfo<PokemonTypings.PokemonData>(`${baseUrlApi}/pokemon/${value}`)
    const pokemonSpecies = await fetchInfo<PokemonTypings.PokemonSpecies>(`${baseUrlApi}/pokemon-species/${value}`)
    const typeEffectiveness = await Promise.all(pokemonData.types.map(item => fetchInfo<PokemonTypings.TypeEffectiveness>(`${baseUrlApi}/type/${item.type.name}`))) 
    
    return {pokemonData: pokemonData, pokemonSpecies: pokemonSpecies, typeEffectiveness: typeEffectiveness}
}

async function fetchInfo<T>(url: string) : Promise<T> {
    const response = await fetch(url)
    const data = await response.json()
    return data
}