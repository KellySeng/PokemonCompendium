import * as React from "react"
import { Nav, Tab, Col, Row, Card } from 'react-bootstrap'

type DisplaySpritesProps = {
    sprites: PokemonTypings.PokemonSprite
}

export default class DisplaySprites extends React.Component<DisplaySpritesProps> {

    render() {
        const {front_default, back_default, front_shiny, back_shiny} = this.props.sprites
        return (
            <div>
                <Card className="card-style">
                <Card.Header as="h5" className="title">Sprites</Card.Header>
                <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="default">
                    <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="default">Default Sprite</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="shiny">Shiny Sprite</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                        <Tab.Pane eventKey="default">
                        <img alt="" loading="lazy" src={front_default}/>
                        <img alt="" loading="lazy" src={back_default}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="shiny">
                        <img alt="" loading="lazy" src={front_shiny}/>
                        <img loading="lazy" alt="" src={back_shiny}/>
                        </Tab.Pane>
                        </Tab.Content>
                    </Col>
                    </Row>
                </Tab.Container>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
