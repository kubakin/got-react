import React from 'react';
import GotService from '../../service/gotService'
import CharDetails from '../charDetails/itemDetails'
import Field from '../fieldFromList/field'
const HouseItem = ({match:{params:{id}}}) => {
    const getService = new GotService()
    return (
        <CharDetails itemInfo={id} getData={(itemInfo)=>getService.getHouse(itemInfo)}>
                        <Field label='Died' item='died' />
                        <Field label='Born' item='born' />
                        <Field label='Culture' item='culture' />
                    </CharDetails>
    )
}
export default HouseItem;