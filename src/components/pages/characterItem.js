import React from 'react';
import GotService from '../../service/gotService'
import CharDetails from '../charDetails/itemDetails'
import Field from '../fieldFromList/field'
const CharacterItem = ({match:{params:{id}}}) => {
    const getService = new GotService()
    return (
        <CharDetails itemInfo={id} getData={(itemInfo)=>getService.getCharacter(itemInfo)}>
                        <Field label='Died' item='died' />
                        <Field label='Born' item='born' />
                        <Field label='Culture' item='culture' />
                    </CharDetails>
    )
}
export default CharacterItem;