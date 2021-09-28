import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Articles from './components/Article/Articles';
import NewArticle from './components/NewArticle/NewArticle';
import Article from './components/Article/Article';
import Update from './components/update/Update';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Articles} />
                <Route path='/new' component={NewArticle} />
                <Route path='/article/:id' render={(props) => <Article {...props}  />} />
                <Route path='/update/:id' render={(props) => <Update {...props}  />} />
            </Switch>

        </>
    )
}

export default App;
