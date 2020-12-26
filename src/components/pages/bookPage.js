import RandomItem from '../randomItem';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Col, Row, Container, Button } from 'reactstrap';
import React, { useState } from 'react';
import GotService from '../../service/gotService';
import Field from '../fieldFromList/field'
import {withRouter} from 'react-router-dom'

const BookPage = (props) => {
    const [itemInfo, setInfo] = useState();
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomItemWithFields start={1} end={5} getRandomItem={(id) => getService.getBook(id)} /> : null;
    const buttonRandomText = showRandom ? 'Спрятать' : 'Показать';
    function showItem(id) {
        setInfo(id);
    }
    const page = 1
    const getService = new GotService()
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
                    <ItemList showItem={(idItem)=>{props.history.push(`${idItem}`)}} getItems={() => getService.getAllBooks(1, 3)} />

                </Col>
                
            </Row>
        </Container>
    )
}
export default withRouter(BookPage);
const RandomItemWithFields = ({ getRandomItem, start, end }) => {
    return (
        <RandomItem start={start} end={end} getRandomItem={getRandomItem} >
            <Field label='Количество страниц' item='numberOfPage' />
            <Field label='Издательство' item='publisher' />
            <Field label='Страна' item='country' />
        </RandomItem>
    )
}