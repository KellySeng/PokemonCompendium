import * as React from "react"
import { Nav, Tab, Col, Row, Container, Tabs } from 'react-bootstrap'

type DisplayStatsProps = {
    stats: PokemonTypings.PokemonSprite
}

export default class DisplayStats extends React.Component<DisplayStatsProps> {

    constructor(props : DisplayStatsProps) {
        super(props)
    }

    render() {
        return (
            <div>
                <h5 className="title">Base statistics</h5>
            </div>
        )
    }
}
