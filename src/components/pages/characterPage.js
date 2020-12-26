import RandomItem from '../randomItem';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Col, Row, Container, Button } from 'reactstrap';
import React, { useState } from 'react';
import GotService from '../../service/gotService';
import Field from '../fieldFromList/field'

const CharacterPage = () => {
    const [itemInfo, setInfo] = useState();
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomItemWithFields start={25} end={140} getRandomItem={(id) => getService.getCharacter(id)} /> : null;
    const buttonRandomText = showRandom ? 'Спрятать' : 'Показать';
    function showItem(id) {
        setInfo(id);
    }
    const getService = new GotService()
    const page = Math.floor(Math.random() * 10 + 1);

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
                    <ItemList showItem={(showItem)} getItems={() => getService.getAllCharacters(page, 3)}>
                    </ItemList>

                </Col>
                <Col md='6'>
                    <CharDetails itemInfo={itemInfo} >
                        <Field label='Died' item='died' />
                        <Field label='Born' item='born' />
                        <Field label='Culture' item='culture' />
                    </CharDetails>
                </Col>
            </Row>
        </Container>
    )
}
export default CharacterPage;
const RandomItemWithFields = ({ getRandomItem, start, end }) => {
    return (
        <RandomItem start={start} end={end} getRandomItem={getRandomItem} >
            <Field label='Died' item='died' />
            <Field label='Born' item='born' />
            <Field label='Culture' item='culture' />
        </RandomItem>
    )
}