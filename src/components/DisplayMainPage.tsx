import * as React from 'react'
import SearchPokemon from './SearchPokemon'
import { Container, Row } from 'react-bootstrap'

export default class DisplayMainPage extends React.Component {
    render() {
        return <Container>
            <Row className="justify-content-md-center"><img src="pokemonCompendiumTitle.png"/></Row>
            <SearchPokemon searchCategories={['Id / Name']}/>
        </Container>
    }
}