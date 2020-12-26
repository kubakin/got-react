import RandomItem from '../randomItem';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Col, Row, Container, Button } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import GotService from '../../service/gotService';
import Field from '../fieldFromList/field'
import {withRouter} from 'react-router-dom'

const CharacterPage = (props) => {
    const [itemInfo, setInfo] = useState();
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomItemWithFields start={25} end={140} getRandomItem={(id) => getService.getCharacter(id)} /> : null;
    const buttonRandomText = showRandom ? 'Спрятать' : 'Показать';
    useEffect(()=>{})
    function showItem(id) {
        const idItem = id;
        setInfo(idItem);
    }
    const getService = new GotService()
    const page = 1;

    return (
        <Container>
            <Row>
                <Col lg={{ size: 5, offset: 0 }}>
                    <Button onClick={() => setShowRandom(!showRandom)}>{buttonRandomText}</Button>
                    {randomChar}
                </Col>

            </Row>

            <Row>
                <Col md='6'>
                    <ItemList showItem={(idItem)=>{props.history.push(`${idItem+(page-1)*10}`)}} getItems={() => getService.getAllCharacters(page, 10)}>
                    </ItemList>
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(CharacterPage);
const RandomItemWithFields = ({ getRandomItem, start, end }) => {
    return (
        <RandomItem start={start} end={end} getRandomItem={getRandomItem} >
            <Field label='Died' item='died' />
            <Field label='Born' item='born' />
            <Field label='Culture' item='culture' />
        </RandomItem>
    )
}