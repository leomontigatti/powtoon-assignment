import React from 'react'
import { Form } from 'react-bootstrap'

export const SORT_TYPE_POPULARITY = 'popularity'
export const SORT_TYPE_RATING = 'rating'
export const SORT_TYPE_NAME_ASCENDING = 'nameAscending'
export const SORT_TYPE_NAME_DESCENDING = 'nameDescending'

function CustomSelect (props) {
    return(
        <Form.Select label="Sort By" value={props.sortBy} onChange={props.onChange}>
            <option value={SORT_TYPE_POPULARITY}>Most Popular</option>
            <option value={SORT_TYPE_RATING}>Top Rated</option>
            <option value={SORT_TYPE_NAME_ASCENDING}>A -> Z</option>
            <option value={SORT_TYPE_NAME_DESCENDING}>Z -> A</option>
        </Form.Select>
    )
}

export { CustomSelect }