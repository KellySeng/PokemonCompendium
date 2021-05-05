export default function reducer<S>(state: PokemonTypings.SearchPokemonState, action: PokemonReducerTypes.Action<PokemonTypings.PokemonData>): PokemonTypings.SearchPokemonState {
    switch (action.type) {
        case 'success': 
            return {...state, pokemon: action.results};
            break
        case 'failure': 
            return {...state, error: action.error};
}}