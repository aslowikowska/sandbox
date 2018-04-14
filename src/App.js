import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from './components/common/AppBar';
import SideBar from './components/common/Sidebar';

import Dashboard from './components/Dashboard';
import Users from './components/Users';
import User from './components/User';

import './App.css';

class App extends Component {
    state = {
        showSideBar: false
    };

    toggleSideBar = () => (
        this.setState({ showSideBar: !this.state.showSideBar })
    );
    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div className="app">
                        <AppBar
                            onMenuClickProps={this.toggleSideBar}
                        />
                        <SideBar
                            showSideBar={this.state.showSideBar}
                            toggleSideBarProps={this.toggleSideBar}
                        />
                        <Route path='/' component={Dashboard} exact={true} />
                        <Route path='/users' component={Users} />
                        <Route path='/user/:user_name' component={User} />
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
