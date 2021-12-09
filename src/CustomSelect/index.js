import React from 'react';
import { Form } from 'react-bootstrap';

function CustomSelect (props) {

    return(
        <Form.Select value={ props.sortBy } onChange={ props.onChange }>
            <option value="">Open this select menu</option>
            <option value="rating">rating</option>
            <option value="nameAscending">nameAscending</option>
            <option value="nameDescending">nameDescending</option>
        </Form.Select>
    );
};

export { CustomSelect };