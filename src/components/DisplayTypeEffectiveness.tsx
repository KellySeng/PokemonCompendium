import * as React from "react"
import { Table } from 'react-bootstrap'
import DisplayTypes from "./DisplayTypes"


type DisplayTypeRelationsProps = {
    typeRelations: PokemonTypings.TypeEffectiveness[]
}

type DisplayTypeCoefficentState = {
    typesCoefficients: Map<string, number>,
}

const types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fire', 'fighting', 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water']
const resistanceLabels = [
    {name: "Neutral", condition: (value: number) => value == 1 },
    {name: "Weak to", condition: (value: number) => value > 1 },
    {name: "Immune to", condition: (value: number) => value == 0 },
    {name: "Resistant to", condition: (value: number) => value < 1 && value > 0 }
]

export default class DisplayTypeEffectiveness extends React.Component<DisplayTypeRelationsProps, DisplayTypeCoefficentState> {

    constructor(props: DisplayTypeRelationsProps) {
        super(props)
        this.state = { typesCoefficients: new Map<string, number>(types.map(type => [type, 1])) }
    }

    applyTypeResistanceCoefficients(types: PokemonTypings.RedirectionUrl[], coefficient: number) {
        types.forEach(item => {
            this.state.typesCoefficients.set(item.name, (this.state.typesCoefficients.get(item.name) as number) * coefficient)
        })
    }

    componentDidMount() {
        this.props.typeRelations.forEach(relation => {
            const { double_damage_from, half_damage_from, no_damage_from } = relation.damage_relations
            this.applyTypeResistanceCoefficients(double_damage_from, 2.0)
            this.applyTypeResistanceCoefficients(half_damage_from, 0.5)
            this.applyTypeResistanceCoefficients(no_damage_from, 0)
        })
        this.setState({ typesCoefficients: this.state.typesCoefficients })
    }

    componentDidUpdate(prevProps : any) {
        console.log(prevProps)
    }

    render() {
        return (
            <div>
                <h2 className="title">Type Effectiveness</h2>
                <Table hover bordered>
                    <thead>
                        <tr>
                            <th>Resistances</th>
                            <th>Types</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resistanceLabels.map(label => {
                            return (
                                <tr>
                                    <td>{label.name}</td>
                                    <td><DisplayTypes types={Array.from(this.state.typesCoefficients.entries()).filter(type => label.condition(type[1])).map(type => type[0])} /></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}
