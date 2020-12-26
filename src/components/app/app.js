import React from 'react';
import { Container } from 'reactstrap';
import Header from '../header';
import CharacterPage from '../pages/characterPage'
import BookPage from '../pages/bookPage'
import HousePage from '../pages/housePage'
import CharacterItem from '../pages/characterItem'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HouseItem from '../pages/houseItem'
import BookItem from '../pages/bookItem'
import './app.css'
const App = () => {
    return (

        <Router>
        <div className='app'>

                <Container>
                    <Header />
                </Container>
                <Route path='/' exact component={() => <h1>Welcome</h1>}></Route>
                <Route path='/characters/' exact component={CharacterPage} />
                <Route path='/characters/:id' render={({match}) => <CharacterItem match={match}/>} />
                <Route path='/books/' exact component={BookPage} />
                <Route path='/books/:id' render={({match}) => <BookItem match={match}/>} />
                <Route path='/houses/' exact component={HousePage} />
                <Route path='/houses/:id' render={({match}) => <HouseItem match={match}/>} />
                {/* <CharacterPage/>
            <CharacterPage/>
            <CharacterPage/> */}
        </div>

        </Router>

    );
};

export default App;