import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../service/gotService';



const App = () => {
    const [itemList, setList] = useState([]);
    const [itemInfo, setInfo] = useState();
    useEffect(() => {
        const page = Math.floor(Math.random() * 10 + 1);
        new GotService().getAllCharacters(page, 3)
            .then(rs => {
                setList(rs)
            })

    }, []);
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomChar /> : null;
    const buttonRandomText = showRandom ? 'Спрятать' : 'Показать';
    function showItem(id) {
        setInfo(id);
        // console.log(id)
    }
    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        <Button onClick={() => setShowRandom(!showRandom)}>{buttonRandomText}</Button>
                        {randomChar}
                    </Col>

                </Row>

                <Row>
                    <Col md='6'>
                        <ItemList itemList={itemList} showItem={(showItem)} />
                    </Col>
                    <Col md='6'>
                        <CharDetails itemInfo={itemInfo} />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;