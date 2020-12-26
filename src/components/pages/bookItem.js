import React from 'react';
import GotService from '../../service/gotService'
import CharDetails from '../charDetails/itemDetails'
import Field from '../fieldFromList/field'
const BookItem = ({ match: { params: { id } } }) => {
    const getService = new GotService()
    return (
        <CharDetails itemInfo={id} getData={(itemInfo) => getService.getBook(itemInfo)}>
                <Field label='Region' item='region' />
                <Field label='Армия' item='coatOfArms' />
        </CharDetails>
    )
}
export default BookItem;