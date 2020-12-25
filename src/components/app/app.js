import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
const App = () => {
    const [itemInfo, setInfo] = useState();
    const [showRandom, setShowRandom] = useState(true);
    const randomChar = showRandom ? <RandomChar /> : null;
    const buttonRandomText = showRandom ? 'Спрятать' : 'Показать';
    function showItem(id) {
        setInfo(id);
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
                        <ItemList showItem={(showItem)} />
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