import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './Header';
import Appi from '../old/App';

const Dashboard = () => <h2>Dashboard</h2>
const SurevyNew = () => <h2>SurevyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    return (
        <div className="container">
                <BrowserRouter>
                    <div>
                        <Appi />
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/new" component={SurevyNew} />
                    </div>
                </BrowserRouter>
        </div>
    );
};


export default App;