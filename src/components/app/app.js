import React from 'react';
import { Container} from 'reactstrap';
import Header from '../header';
import CharacterPage from '../pages/characterPage'
import BookPage from '../pages/bookPage'
import HousePage from '../pages/housePage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => {
    return (
        <Router>
            <>
            <Container>
                <Header />
            </Container>
            <Route path='/' exact component={()=><h1>Welcome</h1>}></Route>
            <Route path='/characters' component={CharacterPage}/>
            <Route path='/books' component={BookPage}/>
            <Route path='/houses' component={HousePage}/>
            {/* <CharacterPage/>
            <CharacterPage/>
            <CharacterPage/> */}
        </>
        </Router>
    );
};

export default App;