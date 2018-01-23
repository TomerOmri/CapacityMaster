import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import Header from './Header';
import Cal from './Cal';
import TeamManager from "./TeamManager";

const Dashboard = () => <h2>Dashboard</h2>
const SurevyNew = () => <h2>SurevyNew</h2>
const Landing = () => <h2>Landing</h2>


const App = () => {
    return (
        <div>
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact={true} path="/" component={Landing} />
                        <Route exact={true} path="/dashboard" component={Dashboard} />
                        <Route path="/dashboard/new" component={SurevyNew} />
                        <Route path="/dashboard/teamadmin" component={TeamManager} />
                        <Route path="/dashboard/cal" component={Cal} />
                    </div>
                </BrowserRouter>
            </div>
        </div>
    );
};


export default App;