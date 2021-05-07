import * as React from "react"
import { Badge } from 'react-bootstrap'

type DisplayTypesProps = {
    types: string[]
}

export default class DisplayTypes extends React.Component<DisplayTypesProps> {

    constructor(props: DisplayTypesProps) {
        super(props)
    }

    render() {
        const { types } = this.props
        return (
            <div className="mb-2">
                {types.map(name => <Badge className="mr-2" pill variant={name}>{name.toUpperCase()}</Badge>)}
            </div>
        )
    }
}
