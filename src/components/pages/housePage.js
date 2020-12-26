import RandomItem from '../randomItem';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Col, Row, Container, Button } from 'reactstrap';
import React, { useState } from 'react';
import GotService from '../../service/gotService';
import Field from '../fieldFromList/field'
import {withRouter} from 'react-router-dom'
const HousePage = (props) => {
    const [itemInfo, setInfo] = useState();
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomItemWithFields start={1} end={10} getRandomItem={(id) => getService.getHouse(id)} /> : null;
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
                    <ItemList showItem={(idItem)=>props.history.push(`${idItem}`)} getItems={() => getService.getAllHouses(1, 3)}>
                    </ItemList>

                </Col>
                <Col md='6'>
                    
                </Col>
            </Row>
        </Container>
    )
}
export default withRouter(HousePage);
const RandomItemWithFields = ({ getRandomItem, start, end }) => {
    return (
        <RandomItem start={start} end={end} getRandomItem={getRandomItem} >
            <Field label='Region' item='region' />
            <Field label='Армия' item='coatOfArms' />
        </RandomItem>
    )
}