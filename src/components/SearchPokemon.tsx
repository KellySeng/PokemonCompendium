import * as React from 'react'
import { InputGroup, FormControl, DropdownButton, Dropdown } from 'react-bootstrap'

type SearchPokemonProps = {
    searchCategories: string[]
}

export default function SearchPokemon<SearchPokemonProps> () {
    return <div>
          <InputGroup className="mb-3">
            <DropdownButton as={InputGroup.Prepend} variant="outline-secondary" title="Dropdown" id="input-group-dropdown-1">
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
  </InputGroup>
    </div>
}