import * as React from 'react'
import {useReducer} from 'react'
import { InputGroup, FormControl, DropdownButton, Dropdown, Button, Spinner, Col, Row, Container, Media } from 'react-bootstrap'
import fetchPokemonData from '../actions/fetchPokemonData'
import  DisplaySprites from './DisplaySprites'
import  DisplayTypes from './DisplayTypes'
import reducer from '../reducer/Reducer'


export default function SearchPokemon ({searchCategories}: PokemonTypings.SearchPokemonProps): JSX.Element {
    const [searchPokemonState, setSearchPokemonState] = React.useState<PokemonTypings.SearchPokemonState>({
        categorySelected: searchCategories[0],
        valueSearched: '',
        loading: false
    })

    const[state, dispatch] = useReducer<React.Reducer<PokemonTypings.SearchPokemonState, PokemonReducerTypes.Action<PokemonTypings.PokemonData>>>(reducer, searchPokemonState)
    const { categorySelected, valueSearched } = searchPokemonState
    return <div>
          <InputGroup className="mb-3">
            <DropdownButton as={InputGroup.Prepend} variant="secondary" title={categorySelected} id="input-group-dropdown-1">
               { searchCategories.map( category => 
                    <Dropdown.Item 
                        active={categorySelected === category} 
                        onClick={ () => setSearchPokemonState({...searchPokemonState, categorySelected: category, valueSearched: ''})}>
                            {category}
                    </Dropdown.Item>)}
            </DropdownButton>
            <FormControl 
                aria-describedby="basic-addon1" 
                placeholder="Search..." 
                value={valueSearched} 
                onChange={event => setSearchPokemonState({...searchPokemonState, valueSearched: event.target.value }) } />
            <InputGroup.Append>
                <Button 
                    type="submit" 
                    onClick={() => {
                        setSearchPokemonState({...searchPokemonState})
                        fetchPokemonData<PokemonTypings.PokemonData>(valueSearched.toLowerCase()).then(response => {
                            dispatch({ type: 'success', results : response });
                        })
                    }}>
                    Search
                </Button>
            </InputGroup.Append>     
        </InputGroup>

        {state.pokemon && 
            <Container>
                <Row>
                    <Col md="auto">{state.pokemon.id}</Col>
                    <Col>{state.pokemon.name}</Col>
                    <DisplayTypes types={state.pokemon.types}/>
                </Row>
                <DisplaySprites sprites={state.pokemon.sprites}/>
            </Container>
        }
    </div>
}

