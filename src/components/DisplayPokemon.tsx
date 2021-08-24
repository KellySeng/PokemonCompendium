import * as React from "react"
import { Card, Badge, ListGroup, Row, Col } from 'react-bootstrap'
import DisplayTypes from './DisplayTypes'
import DisplayTypeEffectiveness from './DisplayTypeEffectiveness'
import DisplayStats from './DisplayStats'
import DisplaySprites from "./DisplaySprites"

type DisplayPokemonProps = {
    pokemon: PokemonTypings.PokemonInformation
    typeEffectiveness: PokemonTypings.TypeEffectiveness[]
    types: string[]
}

export default class DisplayPokemon extends React.Component<DisplayPokemonProps> {

    render() {
        const {pokemon, types} = this.props
        const { pokemonData, pokemonSpecies, } = pokemon
        const pokemonType = pokemonData.types.map(item => item.type.name)
        const pokemonTypeEffectiveness = this.props.typeEffectiveness.filter(typeEffectiveness => pokemonType.includes(typeEffectiveness.name))
        console.log(pokemonSpecies)
        return (
                <Row>
                    <Col xs={12} md={12} lg={3}>
                        <Card className="card-style">
                            <Card.Header as="h4" className="title"><Badge variant="primary">#{pokemonData.id}</Badge> {pokemonData.name}</Card.Header>
                            <Card.Img variant="top" src={pokemonData.sprites.other["official-artwork"].front_default} />
                            <Card.Body>
                                <DisplayTypes types={pokemonData.types.map(item => ({ name: item.type.name }))} />
                                <ListGroup>
                                    <ListGroup.Item>Height: {pokemonData.height / 10} m</ListGroup.Item>
                                    <ListGroup.Item>Weight: {pokemonData.weight / 10} kg</ListGroup.Item>
                                    <ListGroup.Item>Base experience: {pokemonData.base_experience}</ListGroup.Item>
                                </ListGroup>
                                <Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={12} lg={9}>
                        <DisplayStats stats={pokemonData.stats}/>
                        <DisplayTypeEffectiveness typeRelations={pokemonTypeEffectiveness} types={types}/>
                        <DisplaySprites sprites={pokemonData.sprites}/>
                    </Col>
                    </Row>
        )
    }
}