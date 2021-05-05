import * as React from "react"
import { Badge } from 'react-bootstrap'

type DisplayTypesProps = {
    types: PokemonTypings.PokemonType[]
}

export default class DisplayTypes extends React.Component<DisplayTypesProps> {

    constructor(props : DisplayTypesProps) {
        super(props)
    }

    render() {
        const {types} = this.props
        return (
            <div>
                {types.map(item => <Badge pill variant={item.type.name}>{item.type.name}</Badge>)}
            </div>
        )
    }
}
